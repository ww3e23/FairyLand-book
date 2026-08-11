import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader, ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { DataField, SourceList } from "@/components/ui/DataField";
import { getClassById } from "@/data/classes";
import { getGuideById } from "@/data/guides";
import { VERSION_LABEL } from "@/data/version";
import type { SkillEntity } from "@/lib/types";

export function SkillDetail({ skill }: { skill: SkillEntity }) {
  const cls = skill.classId ? getClassById(skill.classId) : null;
  const relatedGuides = (skill.relatedGuideIds ?? [])
    .map(getGuideById)
    .filter(Boolean);

  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/skills" className="hover:text-coffee">
          技能
        </Link>
        <span>/</span>
        <span className="text-coffee">{skill.name}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">
          {skill.name}
        </h1>
        <TrustBadge status={skill.trustStatus} />
      </div>

      {skill.aliases && skill.aliases.length > 0 && (
        <p className="mb-2 text-xs text-coffee/50">
          别名：{skill.aliases.join("、")}
        </p>
      )}

      {cls && (
        <p className="mb-2 text-sm text-coffee/70">
          所属职业：
          <Link
            href={`/classes/${cls.slug}`}
            className="ml-1 font-medium text-brown underline underline-offset-2"
          >
            {cls.name}
          </Link>
        </p>
      )}

      <p className="mb-6 text-xs text-coffee/50">
        适用版本：{VERSION_LABEL}
        {skill.lastVerifiedAt && ` · 最后确认：${skill.lastVerifiedAt}`}
      </p>

      <div className="glass-card-strong rounded-xl p-5 md:p-6">
        <DataField label="技能类型" field={skill.skillType} />
        <DataField label="学习等级" field={skill.learnLevel} />
        <DataField label="学习条件" field={skill.learnConditions} />
        <DataField label="技能效果" field={skill.effect} />
        <DataField label="消耗" field={skill.mpCost} />
        <DataField label="攻击范围" field={skill.attackRange} />
        <DataField label="作用目标" field={skill.targetType} />
      </div>

      {relatedGuides.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相关攻略</h2>
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
        <SourceList sources={skill.sources} />
      </div>

      <ReportSection />
    </AppShell>
  );
}
