import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable, { File as FormidableFile } from 'formidable';
import * as fs from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileTypeFromFile } from 'file-type';

export const config = { api: { bodyParser: false } };

const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);

const ALLOWED_EXT = new Set(['jpg', 'jpeg', 'png', 'webp', 'pdf', 'doc', 'docx']);
const MAX_FILES = 8;
const MAX_FILE_SIZE = 15 * 1024 * 1024;
type TgError = { description?: string };
function getTgDescription(payload: unknown): string | undefined {
  if (!payload || typeof payload !== 'object') return undefined;
  const p = payload as TgError;
  return typeof p.description === 'string' ? p.description : undefined;
}
function getExt(name: string) {
  return name.split('.').pop()?.toLowerCase() ?? '';
}

function isProbablyDoc(ext: string) {
  return ext === 'doc' || ext === 'docx';
}

async function sendTelegramDocument(
  token: string,
  chatId: string,
  filePath: string,
  filename: string,
) {
  const buf = await readFile(filePath);

  const tgForm = new FormData();
  tgForm.append('chat_id', chatId);
  tgForm.append('document', new Blob([buf]), filename);

  const resp = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
    method: 'POST',
    body: tgForm,
  });

  const json = await resp.json().catch(() => null);

  if (!resp.ok) {
    const desc = getTgDescription(json);
    const msg = desc ?? `HTTP ${resp.status}`;
    throw new Error(`sendDocument failed: ${msg}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  if (!token || !chatId)
    return res.status(500).json({ ok: false, error: 'Missing env TG_BOT_TOKEN/TG_CHAT_ID' });

  const form = formidable({
    multiples: true,
    maxFiles: MAX_FILES,
    maxFileSize: MAX_FILE_SIZE,
    keepExtensions: true,
  });

  let parsedFiles: FormidableFile[] = [];

  try {
    const [fields, files] = await form.parse(req);

    const raw = fields.data;
    const dataStr = Array.isArray(raw) ? raw[0] : raw;

    if (!dataStr) return res.status(400).json({ ok: false, error: 'No data field' });

    const data = JSON.parse(dataStr);

    const msgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text:
          `🧾 New lead\n\n` +
          `👤 ${data.name ?? '-'}\n` +
          `📩 ${data.contact ?? '-'}\n\n` +
          `${data.message ?? ''}\n\n` +
          `🌐 ${data.url ?? ''}`,
      }),
    });

    if (!msgResp.ok) {
      const j = await msgResp.json().catch(() => null);
      throw new Error(`sendMessage failed: ${j?.description ?? `HTTP ${msgResp.status}`}`);
    }
    const incoming = files.files;
    const uploaded = Array.isArray(incoming) ? incoming : incoming ? [incoming] : [];
    parsedFiles = uploaded;

    for (const f of uploaded) {
      const filepath = f.filepath;
      const original = f.originalFilename ?? path.basename(filepath);
      const ext = getExt(original);

      if (!ALLOWED_EXT.has(ext)) {
        throw new Error(`File type not allowed: ${original}`);
      }
      if (!isProbablyDoc(ext)) {
        const ft = await fileTypeFromFile(filepath);
        if (!ft || !ALLOWED_MIME.has(ft.mime)) {
          throw new Error(`Bad file signature: ${original}`);
        }
      }

      await sendTelegramDocument(token, chatId, filepath, original);
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unknown error';
    return res.status(500).json({ ok: false, error: msg });
  } finally {
    for (const f of parsedFiles) {
      try {
        fs.unlinkSync(f.filepath);
      } catch (err) {
        console.warn('Failed to cleanup temp file', f.filepath, err);
      }
    }
  }
}
