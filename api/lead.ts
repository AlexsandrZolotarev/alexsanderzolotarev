import type { VercelRequest, VercelResponse } from '@vercel/node';
import formidable, { type Fields, type Files, type File as FormidableFile } from 'formidable';
import fs from 'fs';
import FormData from 'form-data';

export const config = {
  api: { bodyParser: false },
};

function firstField(fields: Fields, name: string): string {
  const v = fields[name];
  if (!v) throw new Error(`Missing field: ${name}`);
  return Array.isArray(v) ? String(v[0]) : String(v);
}

function fileArray(files: Files, name: string): FormidableFile[] {
  const v = files[name];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

type LeadPayload = {
  services?: string[];
  pages?: string;
  deadline?: string;
  hasTz?: string;
  name?: string;
  contact?: string;
  message?: string;
  url?: string;
  ua?: string;
  createdAt?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: 'Missing TG_BOT_TOKEN or TG_CHAT_ID' });
    return;
  }

  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      maxFileSize: 25 * 1024 * 1024,
    });

    const [fields, files] = await form.parse(req);

    const dataStr = firstField(fields, 'data');
    const data = JSON.parse(dataStr) as LeadPayload;

    const msgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text:
          `🧾 New lead\n\n` +
          `👤 ${data.name ?? '—'}\n` +
          `📩 ${data.contact ?? '—'}\n\n` +
          `${data.message ?? ''}`,
      }),
    });

    if (!msgRes.ok) {
      const t = await msgRes.text();
      throw new Error(`sendMessage failed: ${msgRes.status} ${t}`);
    }

    const uploaded = fileArray(files, 'files');

    for (const file of uploaded) {
      if (!file.filepath) continue;

      const tgForm = new FormData();
      tgForm.append('chat_id', chatId);

      tgForm.append('document', fs.createReadStream(file.filepath), {
        filename: file.originalFilename ?? 'file',
        contentType: file.mimetype ?? 'application/octet-stream',
        knownLength: file.size,
      });

      const docRes = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
        method: 'POST',
        body: tgForm,
        headers: tgForm.getHeaders(),
      });

      if (!docRes.ok) {
        const t = await docRes.text();
        throw new Error(`sendDocument failed: ${docRes.status} ${t}`);
      }
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    res.status(500).json({ ok: false, error: message });
  }
}
