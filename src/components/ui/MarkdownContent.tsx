import Link from "next/link";
import { withBasePath } from "@/lib/paths";

/** 簡易 Markdown 渲染（V1：支援標題、連結、列表、表格、分隔線） */
export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++}>{parseInline(line.slice(3))}</h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++}>{parseInline(line.slice(4))}</h3>,
      );
      i++;
      continue;
    }

    if (line.startsWith("---")) {
      elements.push(<hr key={key++} />);
      i++;
      continue;
    }

    const imageMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      elements.push(
        renderFigure(imageMatch[1], imageMatch[2], key++),
      );
      i++;
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, key++));
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++}>
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    elements.push(<p key={key++}>{parseInline(line)}</p>);
    i++;
  }

  return <div className="prose-fairy">{elements}</div>;
}

function renderFigure(alt: string, src: string, key: number) {
  const url = src.startsWith("http") ? src : withBasePath(src);
  return (
    <figure key={key} className="guide-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={alt} />
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  );
}

function renderTable(lines: string[], key: number) {
  const rows = lines
    .filter((l) => !l.match(/^\|[\s-|]+\|$/))
    .map((l) =>
      l
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim()),
    );

  if (rows.length === 0) return null;

  const [header, ...body] = rows;

  return (
    <table key={key}>
      <thead>
        <tr>
          {header.map((cell, i) => (
            <th key={i}>{parseInline(cell)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci}>{parseInline(cell)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let k = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      const href = match[3].startsWith("/") && !match[3].endsWith("/")
        ? `${match[3]}/`
        : match[3];
      const isInternal = href.startsWith("/");
      if (isInternal) {
        parts.push(
          <Link key={k++} href={href} className="text-brown underline">
            {match[2]}
          </Link>,
        );
      } else {
        parts.push(
          <a
            key={k++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brown underline"
          >
            {match[2]}
          </a>,
        );
      }
    } else if (match[4]) {
      parts.push(<strong key={k++}>{match[4]}</strong>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}
