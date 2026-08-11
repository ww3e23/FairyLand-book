import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { SearchBar } from "@/components/ui/SearchBar";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { search, TYPE_LABELS } from "@/data/index";
import type { EntityType } from "@/lib/types";

const FILTERS: { value: EntityType | "all"; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "class", label: "职业" },
  { value: "skill", label: "技能" },
  { value: "pet", label: "幻兽" },
  { value: "item", label: "装备" },
  { value: "job", label: "工作" },
  { value: "map", label: "地图" },
  { value: "quest", label: "任务" },
  { value: "guide", label: "攻略" },
];

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const type =
    typeof params.type === "string" ? (params.type as EntityType | "all") : "all";

  const results = q ? search(q, type) : [];

  return (
    <AppShell showContext={false}>
      <PageHeader
        title="搜索"
        subtitle="搜索职业、技能、幻兽、装备、地图、任务……"
      >
        <SearchBar defaultValue={q} autoFocus size="large" />
      </PageHeader>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/search?q=${encodeURIComponent(q)}&type=${f.value}`}
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
        <p className="text-sm text-coffee/60">输入关键词开始搜索</p>
      )}

      {q && results.length === 0 && (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm text-coffee/70">
            找不到「{q}」的相关结果
          </p>
          <p className="mt-1 text-xs text-coffee/50">
            试试其他关键词或别名，例如「兽王劈」「光使」
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs text-coffee/50">找到 {results.length} 笔结果</p>
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
