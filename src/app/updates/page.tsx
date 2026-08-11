import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { updates } from "@/data/guides";
import { TYPE_LABELS } from "@/data/index";

export default function UpdatesPage() {
  return (
    <AppShell>
      <PageHeader title="版本更新" subtitle="資料庫更新記錄" />
      <div className="glass-card divide-y divide-coffee/8 rounded-xl overflow-hidden">
        {updates.map((u) => (
          <div key={u.id} className="px-4 py-3 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
                {TYPE_LABELS[u.entityType]}
              </span>
              <span className="font-medium text-coffee">{u.entityName}</span>
              <span className="text-coffee/60">{u.changeSummary}</span>
              <span className="ml-auto text-xs text-coffee/40">{u.publishedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
