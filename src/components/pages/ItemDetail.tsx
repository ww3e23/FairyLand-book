import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { DataField, SourceList } from "@/components/ui/DataField";
import { getItemById } from "@/data/items";
import { VERSION_LABEL } from "@/data/version";
import type { ItemEntity } from "@/lib/types";

export function ItemDetail({ item }: { item: ItemEntity }) {
  const relatedItems = (item.relatedItemIds ?? [])
    .map(getItemById)
    .filter(Boolean);

  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/items" className="hover:text-coffee">
          裝備道具
        </Link>
        <span>/</span>
        <span className="text-coffee">{item.name}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">
          {item.name}
        </h1>
        <TrustBadge status={item.trustStatus} />
      </div>

      {item.aliases && item.aliases.length > 0 && (
        <p className="mb-2 text-xs text-coffee/50">
          別名：{item.aliases.join("、")}
        </p>
      )}

      <p className="mb-6 text-xs text-coffee/50">
        {item.itemType}
        {item.category ? ` · ${item.category}` : ""}
        {" · "}適用版本：{VERSION_LABEL}
      </p>

      <div className="glass-card-strong rounded-xl p-5 md:p-6">
        <DataField label="效果" field={item.effect} />
        <DataField label="使用限制" field={item.usageLimit} />
        <DataField label="數值變化" field={item.changeValue} />
      </div>

      {relatedItems.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-coffee">相關道具</h2>
          <div className="space-y-2">
            {relatedItems.map(
              (related) =>
                related && (
                  <Link
                    key={related.id}
                    href={`/items/${related.slug}`}
                    className="glass-card block rounded-lg px-4 py-3 text-sm text-coffee hover:shadow-sm"
                  >
                    {related.name}
                    {related.category && (
                      <span className="ml-2 text-xs text-coffee/50">
                        {related.category}
                      </span>
                    )}
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      <div className="mt-6">
        <SourceList sources={item.sources} />
      </div>

      <ReportSection />
    </AppShell>
  );
}
