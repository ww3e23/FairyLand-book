import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { guides } from "@/data/guides";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "攻略文章",
};

export default function GuidesPage() {
  return (
    <AppShell>
      <PageHeader
        title="新手 / 回鍋攻略"
        subtitle="文章型攻略，遊戲名詞會連結至資料庫"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.id}
            href={`/guides/${g.slug}/`}
            className="glass-card block overflow-hidden rounded-xl transition-shadow hover:shadow-md"
          >
            {g.coverImage && (
              <div className="h-48 overflow-hidden sm:h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(g.coverImage)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                {g.isFeatured && (
                  <span className="rounded-full bg-coffee px-2 py-0.5 text-[10px] font-bold text-brass">
                    精選
                  </span>
                )}
                <h2 className="text-lg font-bold text-coffee">{g.name}</h2>
                <TrustBadge status={g.trustStatus} />
              </div>
              <p className="mt-2 text-sm text-coffee/70">{g.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
