import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { updates } from "@/data/guides";
import { TYPE_LABELS } from "@/data/index";
import { getEntityHref } from "@/lib/entities";

export default function UpdatesPage() {
  return (
    <AppShell>
      <PageHeader title="版本更新" subtitle="資料庫更新記錄" />
      <div className="glass-card divide-y divide-coffee/8 overflow-hidden rounded-xl">
        {updates.map((u) => {
          const href = getEntityHref(u.entityType, u.entityId);
          const inner = (
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
                {TYPE_LABELS[u.entityType]}
              </span>
              <span className="font-medium text-coffee">{u.entityName}</span>
              <span className="text-coffee/60">{u.changeSummary}</span>
              <span className="ml-auto text-xs text-coffee/40">
                {u.publishedAt}
              </span>
            </div>
          );
          if (!href) {
            return (
              <div key={u.id} className="px-4 py-3 text-sm">
                {inner}
              </div>
            );
          }
          return (
            <Link
              key={u.id}
              href={href}
              className="block px-4 py-3 text-sm transition-colors hover:bg-cream/50"
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
