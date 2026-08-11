import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { DataField, SourceList } from "@/components/ui/DataField";
import { getSkillById } from "@/data/skills";
import { getGuideById } from "@/data/guides";
import { VERSION_LABEL } from "@/data/version";
import type { ClassEntity } from "@/lib/types";

export const BRANCH_LABEL = {
  warrior: "戰士系",
  traveler: "旅人系",
  cleric: "修士系",
};

export function ClassDetail({ cls }: { cls: ClassEntity }) {
  const relatedSkills = (cls.relatedSkillIds ?? [])
    .map(getSkillById)
    .filter(Boolean);
  const relatedGuides = (cls.relatedGuideIds ?? [])
    .map(getGuideById)
    .filter(Boolean);

  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/classes" className="hover:text-coffee">
          職業
        </Link>
        <span>/</span>
        <span className="text-coffee">{cls.name}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">{cls.name}</h1>
        <TrustBadge status={cls.trustStatus} />
      </div>

      {cls.aliases && cls.aliases.length > 0 && (
        <p className="mb-2 text-xs text-coffee/50">別名：{cls.aliases.join("、")}</p>
      )}

      <p className="mb-6 text-xs text-coffee/50">適用版本：{VERSION_LABEL}</p>

      <div className="glass-card-strong rounded-xl p-5 md:p-6">
        <DataField label="職業介紹" field={cls.description} />
        {cls.attributeGuide && (
          <DataField label="屬性配點" field={cls.attributeGuide} />
        )}
        {cls.equipmentGuide && (
          <DataField label="裝備方向" field={cls.equipmentGuide} />
        )}
        {cls.petGuide && <DataField label="幻獸搭配" field={cls.petGuide} />}
      </div>

      {relatedSkills.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相關技能</h2>
          <div className="flex flex-wrap gap-2">
            {relatedSkills.map(
              (s) =>
                s && (
                  <Link
                    key={s.id}
                    href={`/skills/${s.slug}`}
                    className="glass-card rounded-lg px-3 py-2 text-sm text-coffee hover:shadow-sm"
                  >
                    {s.name}
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相關攻略</h2>
          <div className="space-y-2">
            {relatedGuides.map(
              (g) =>
                g && (
                  <Link
                    key={g.id}
                    href={`/guides/${g.slug}`}
                    className="glass-card block rounded-lg px-4 py-3 text-sm text-coffee hover:shadow-sm"
                  >
                    {g.name}
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      <div className="mt-6">
        <SourceList sources={cls.sources} />
      </div>

      <ReportSection />
    </AppShell>
  );
}
