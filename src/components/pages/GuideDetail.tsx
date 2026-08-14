import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { SourceList } from "@/components/ui/DataField";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { EntityLink } from "@/components/ui/EntityLink";
import { VERSION_LABEL } from "@/data/version";
import { withBasePath } from "@/lib/paths";
import type { GuideEntity } from "@/lib/types";

function GuideImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="guide-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBasePath(src)} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function GuideDetail({ guide }: { guide: GuideEntity }) {
  const figures = guide.figures ?? [];

  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/guides" className="hover:text-coffee">
          攻略
        </Link>
        <span>/</span>
        <span className="text-coffee">{guide.name}</span>
      </div>

      {guide.coverImage && (
        <GuideImage src={guide.coverImage} alt={guide.name} />
      )}

      <div className="mb-2 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">
          {guide.name}
        </h1>
        <TrustBadge status={guide.trustStatus} />
      </div>
      <p className="mb-2 text-sm leading-relaxed text-coffee/70">{guide.summary}</p>
      <p className="mb-6 text-xs text-coffee/50">適用版本：{VERSION_LABEL}</p>

      {figures.length > 0 && (
        <section className="mb-6 space-y-4">
          <h2 className="text-lg font-bold text-coffee">圖解</h2>
          {figures.map((fig) => (
            <GuideImage
              key={fig.src}
              src={fig.src}
              alt={fig.caption}
              caption={fig.caption}
            />
          ))}
          <p className="text-center text-[11px] text-coffee/45">
            插圖為說明用示意，非遊戲截圖
          </p>
        </section>
      )}

      <div className="glass-card-strong rounded-xl p-5 md:p-8">
        <MarkdownContent content={guide.content} />
      </div>

      {guide.linkedEntityIds && guide.linkedEntityIds.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相關連結</h2>
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
