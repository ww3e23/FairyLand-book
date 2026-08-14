import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { items } from "@/data/items";

export const metadata: Metadata = {
  title: "裝備道具",
};

export default function ItemsPage() {
  return (
    <AppShell>
      <PageHeader
        title="裝備道具"
        subtitle="目前先收錄調整藥丸等消耗品，其餘裝備資料陸續擴充"
      />

      <div className="space-y-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.slug}`}
            className="glass-card block rounded-xl p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-coffee">{item.name}</h2>
              {item.category && (
                <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                  {item.category}
                </span>
              )}
              <TrustBadge status={item.trustStatus} />
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-coffee/70">
              {item.effect.value ?? item.effect.note}
            </p>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}
