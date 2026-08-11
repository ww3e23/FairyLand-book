import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { SourceList } from "@/components/ui/DataField";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { EntityLink } from "@/components/ui/EntityLink";
import { VERSION_LABEL } from "@/data/version";
import type { GuideEntity } from "@/lib/types";

export function GuideDetail({ guide }: { guide: GuideEntity }) {
  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/guides" className="hover:text-coffee">
          攻略
        </Link>
        <span>/</span>
        <span className="text-coffee">{guide.name}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">
          {guide.name}
        </h1>
        <TrustBadge status={guide.trustStatus} />
      </div>

      <p className="mb-6 text-xs text-coffee/50">适用版本：{VERSION_LABEL}</p>

      <div className="glass-card-strong rounded-xl p-5 md:p-8">
        <MarkdownContent content={guide.content} />
      </div>

      {guide.linkedEntityIds && guide.linkedEntityIds.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相关链接</h2>
          <div className="flex flex-wrap gap-2">
            {guide.linkedEntityIds.map((link) => (
              <EntityLink
                key={link.id}
                type={link.type}
                id={link.id}
                label={link.label}
              />
            ))}
          </div>
        </section>
      )}

      <div className="mt-6">
        <SourceList sources={guide.sources} />
      </div>

      <ReportSection />
    </AppShell>
  );
}
