import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { classes } from "@/data/classes";
import { BRANCH_LABEL } from "@/components/pages/ClassDetail";

export const metadata: Metadata = {
  title: "職業攻略",
};

export default function ClassesPage() {
  return (
    <AppShell>
      <PageHeader
        title="職業攻略"
        subtitle="童話 Online 各職業介紹、技能與養成方向"
      />

      <div className="space-y-4">
        {classes.map((c) => (
          <Link
            key={c.id}
            href={`/classes/${c.slug}`}
            className="glass-card block rounded-xl p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-coffee">{c.name}</h2>
              <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                {BRANCH_LABEL[c.branch]} ·{" "}
                {c.tier === 2 ? "二轉" : c.tier === 1 ? "一轉" : "見習"}
              </span>
              <TrustBadge status={c.trustStatus} />
            </div>
            {c.aliases && c.aliases.length > 0 && (
              <p className="mt-1 text-xs text-coffee/50">
                別名：{c.aliases.join("、")}
              </p>
            )}
            <p className="mt-2 line-clamp-2 text-sm text-coffee/70">
              {c.description.value ?? c.description.note}
            </p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
