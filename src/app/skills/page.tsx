import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "技能资料",
};

export default function SkillsPage() {
  return (
    <AppShell>
      <PageHeader title="技能资料" subtitle="童话 Online 各职业技能查询" />

      <div className="space-y-4">
        {skills.map((s) => (
          <Link
            key={s.id}
            href={`/skills/${s.slug}`}
            className="glass-card block rounded-xl p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-coffee">{s.name}</h2>
              {s.className && (
                <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                  {s.className}
                </span>
              )}
              <TrustBadge status={s.trustStatus} />
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-coffee/70">
              {s.effect.value ?? s.effect.note ?? s.skillType.value}
            </p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
