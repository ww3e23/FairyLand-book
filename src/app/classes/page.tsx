import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { classes } from "@/data/classes";
import { BRANCH_LABEL } from "@/components/pages/ClassDetail";
import { pageHref } from "@/lib/paths";
import type { ClassEntity } from "@/lib/types";

export const metadata: Metadata = {
  title: "職業攻略",
};

const BRANCHES: ClassEntity["branch"][] = ["warrior", "traveler", "cleric"];
const TIER_LABEL = ["見習", "一轉", "二轉"] as const;

export default function ClassesPage() {
  return (
    <AppShell>
      <PageHeader
        title="職業攻略"
        subtitle="見習 → 10 級一轉 → 60 級二轉。先看職業一覽再點各職業。"
      />
      <p className="mb-6 text-sm text-coffee/70">
        <Link
          href={pageHref("guides", "class-overview")}
          className="text-brown underline underline-offset-2"
        >
          職業一覽（轉職對照表）
        </Link>
        {" · "}
        <Link
          href={pageHref("guides", "newbie")}
          className="text-brown underline underline-offset-2"
        >
          新手入門
        </Link>
      </p>

      {BRANCHES.map((branch) => (
        <section key={branch} className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-coffee">
            {BRANCH_LABEL[branch]}
          </h2>
          <div className="space-y-3">
            {classes
              .filter((c) => c.branch === branch)
              .map((c) => (
                <Link
                  key={c.id}
                  href={pageHref("classes", c.slug)}
                  className="glass-card block rounded-xl p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-coffee">{c.name}</h3>
                    <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                      {TIER_LABEL[c.tier]}
                    </span>
                    <TrustBadge status={c.trustStatus} />
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-coffee/70">
                    {c.description.value ?? c.description.note}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </AppShell>
  );
}
