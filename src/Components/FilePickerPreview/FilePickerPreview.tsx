import { useEffect, useMemo, useState } from 'react';

type PreviewItem = {
  key: string;
  file: File;
  name: string;
  sizeLabel: string;
  ext: string;
  kind: 'image' | 'video' | 'audio' | 'doc' | 'pdf' | 'archive' | 'code' | 'file';
  url?: string; // objectURL for preview
};

function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let b = bytes;
  let i = 0;
  while (b >= 1024 && i < units.length - 1) {
    b /= 1024;
    i++;
  }
  return `${b.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function getExt(name: string) {
  const idx = name.lastIndexOf('.');
  return idx >= 0 ? name.slice(idx + 1).toLowerCase() : '';
}

function kindFrom(file: File): PreviewItem['kind'] {
  const t = file.type;

  if (t.startsWith('image/')) return 'image';
  if (t.startsWith('video/')) return 'video';
  if (t.startsWith('audio/')) return 'audio';
  if (t === 'application/pdf') return 'pdf';

  const ext = getExt(file.name);
  if (['doc', 'docx', 'rtf', 'odt'].includes(ext)) return 'doc';
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return 'archive';
  if (['js', 'ts', 'tsx', 'json', 'html', 'css', 'scss', 'md'].includes(ext)) return 'code';

  return 'file';
}

function FileIcon({ kind }: { kind: PreviewItem['kind'] }) {
  // супер-лёгкие “иконки” без библиотек
  const label =
    kind === 'doc'
      ? 'DOC'
      : kind === 'pdf'
        ? 'PDF'
        : kind === 'archive'
          ? 'ZIP'
          : kind === 'audio'
            ? 'AUDIO'
            : kind === 'video'
              ? 'VIDEO'
              : kind === 'code'
                ? 'CODE'
                : 'FILE';

  return (
    <div className="msq__fileThumb msq__fileThumb--icon" aria-hidden="true">
      <span className="msq__fileBadge">{label}</span>
    </div>
  );
}

export function FilePickerPreview({
  files,
  onChange,
  onRemove,
  i18n = {
    choose: 'Choose files',
    count: (n: number) => `Files: ${n}`,
    remove: 'Remove',
  },
}: {
  files: File[];
  onChange: (next: File[]) => void;
  onRemove: (index: number) => void;
  i18n?: {
    choose: string;
    count: (n: number) => string;
    remove: string;
  };
}) {
  const [items, setItems] = useState<PreviewItem[]>([]);

  useEffect(() => {
    const next: PreviewItem[] = files.map((file) => {
      const ext = getExt(file.name);
      const kind = kindFrom(file);
      const canPreview = kind === 'image' || kind === 'video' || kind === 'audio';

      const base: Omit<PreviewItem, 'url'> = {
        key: `${file.name}-${file.size}-${file.lastModified}`,
        file,
        name: file.name,
        sizeLabel: formatBytes(file.size),
        ext,
        kind,
      };

      return canPreview ? { ...base, url: URL.createObjectURL(file) } : base;
    });

    setItems(next);

    return () => {
      next.forEach((x) => {
        if ('url' in x && x.url) URL.revokeObjectURL(x.url);
      });
    };
  }, [files]);
  const inputId = useMemo(() => `msq-files-${Math.random().toString(16).slice(2)}`, []);

  return (
    <div className="msq__upload">
      <div className="msq__uploadTop">
        <input
          id={inputId}
          className="msq__file"
          type="file"
          multiple
          onChange={(e) => onChange(Array.from(e.target.files ?? []))}
        />

        <label className="msq__fileBtn" htmlFor={inputId}>
          {i18n.choose}
        </label>

        <div className="msq__fileCount">{i18n.count(files.length)}</div>
      </div>

      {items.length > 0 && (
        <ul className="msq__fileList">
          {items.map((x, idx) => (
            <li key={x.key} className="msq__fileRow">
              {/* thumb */}
              {x.kind === 'image' ? (
                <img className="msq__fileThumb" src={x.url} alt="" />
              ) : (
                <FileIcon kind={x.kind} />
              )}

              {/* meta */}
              <div className="msq__fileMeta">
                <div className="msq__fileName" title={x.name}>
                  {x.name}
                </div>
                <div className="msq__fileSub">
                  {x.ext ? x.ext.toUpperCase() : '—'} • {x.sizeLabel}
                </div>
              </div>

              {/* actions */}
              <button
                type="button"
                className="msq__fileRemove"
                onClick={() => onRemove(idx)}
                aria-label={`${i18n.remove}: ${x.name}`}
                title={i18n.remove}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
