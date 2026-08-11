import type { DataField as DataFieldType, SourceRef } from "@/lib/types";
import { FieldStatusTag } from "./TrustBadge";

function SourceLinks({ references }: { references: SourceRef[] }) {
  if (!references.length) return null;
  return (
    <div className="mt-2 space-y-1">
      <p className="text-xs font-medium text-coffee/70">相關參考：</p>
      <ul className="space-y-1">
        {references.map((ref) => (
          <li key={ref.url}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brown underline underline-offset-2 hover:text-coffee"
            >
              {ref.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface DataFieldProps {
  label: string;
  field: DataFieldType;
}

export function DataField({ label, field }: DataFieldProps) {
  const showValue = field.value && field.status !== "unavailable";

  return (
    <div className="border-b border-coffee/8 py-4 last:border-0">
      <div className="mb-1.5 flex items-center gap-2">
        <h3 className="text-sm font-semibold text-coffee">{label}</h3>
        <FieldStatusTag status={field.status} />
      </div>

      {showValue && (
        <p className="text-sm leading-relaxed text-coffee-dark">{field.value}</p>
      )}

      {field.status === "unavailable" && !field.value && (
        <p className="text-sm italic text-coffee/60">
          目前無資料，待好心人士提供。
        </p>
      )}

      {field.note && field.status !== "unavailable" && (
        <p className="mt-1.5 text-xs leading-relaxed text-coffee/70">
          {field.note}
        </p>
      )}

      {field.note && field.status === "unavailable" && field.value === undefined && (
        <p className="mt-1.5 text-xs leading-relaxed text-coffee/70">
          {field.note}
        </p>
      )}

      {field.references && field.references.length > 0 && (
        <SourceLinks references={field.references} />
      )}
    </div>
  );
}

export function SourceList({ sources }: { sources: SourceRef[] }) {
  return (
    <div className="glass-card rounded-xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-coffee">資料來源</h3>
      <ul className="space-y-2">
        {sources.map((s) => (
          <li key={s.url} className="text-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown underline underline-offset-2 hover:text-coffee"
            >
              {s.title}
            </a>
            {s.reliability && (
              <span className="ml-2 text-xs text-coffee/50">
                可信度 {s.reliability}/5
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
