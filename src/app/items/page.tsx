import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { getItemsByCategory } from "@/data/items";

export const metadata: Metadata = {
  title: "裝備道具",
};

export default function ItemsPage() {
  const groups = getItemsByCategory();

  return (
    <AppShell>
      <PageHeader
        title="裝備道具"
        subtitle="目前先收錄調整屬性／洗點相關消耗品，其餘裝備資料陸續擴充"
      />

      <p className="mb-6 text-sm text-coffee/70">
        也可先看{" "}
        <Link
          href="/guides/調整屬性與洗點道具"
          className="text-brown underline underline-offset-2"
        >
          調整屬性與洗點道具整理
        </Link>
        。
      </p>

      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group.category}>
            <h2 className="mb-3 text-sm font-semibold text-coffee">
              {group.category}
            </h2>
            <div className="space-y-3">
              {group.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/${item.slug}`}
                  className="glass-card block rounded-xl p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-coffee">
                      {item.name}
                    </h3>
                    <TrustBadge status={item.trustStatus} />
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-coffee/70">
                    {item.effect.value ?? item.effect.note}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}
