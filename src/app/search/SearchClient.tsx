"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { SearchBar } from "@/components/ui/SearchBar";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { search, TYPE_LABELS } from "@/data/index";
import type { EntityType } from "@/lib/types";

const FILTERS: { value: EntityType | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "class", label: "職業" },
  { value: "skill", label: "技能" },
  { value: "item", label: "裝備" },
  { value: "guide", label: "攻略" },
  { value: "pet", label: "幻獸" },
];

export default function SearchClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const type = (searchParams.get("type") ?? "all") as EntityType | "all";

  const results = useMemo(
    () => (q ? search(q, type) : []),
    [q, type],
  );

  return (
    <AppShell showContext={false}>
      <PageHeader
        title="搜尋"
        subtitle="搜尋職業、技能、道具、攻略、幻獸……"
      >
        <SearchBar defaultValue={q} autoFocus size="large" />
      </PageHeader>

      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/search/?q=${encodeURIComponent(q)}&type=${f.value}`}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              type === f.value
                ? "bg-coffee text-warm-white"
                : "glass-card text-coffee/70 hover:text-coffee"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {!q && (
        <p className="text-sm text-coffee/60">輸入關鍵字開始搜尋</p>
      )}

      {q && results.length === 0 && (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm text-coffee/70">
            找不到「{q}」的相關結果
          </p>
          <p className="mt-1 text-xs text-coffee/50">
            試試其他關鍵字或別名，例如「獸王劈」「光使」
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs text-coffee/50">找到 {results.length} 筆結果</p>
          {results.map((r) => (
            <Link
              key={r.id}
              href={r.href}
              className="glass-card block rounded-xl p-4 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-coffee/8 px-2 py-0.5 text-[10px] font-medium text-coffee">
                  {TYPE_LABELS[r.type]}
                </span>
                <span className="font-semibold text-coffee">{r.name}</span>
                <TrustBadge status={r.trustStatus} />
              </div>
              {r.description && (
                <p className="mt-1.5 line-clamp-2 text-sm text-coffee/65">
                  {r.description}
                </p>
              )}
              <p className="mt-1 text-[11px] text-coffee/40">
                更新：{r.updatedAt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </AppShell>
  );
}
