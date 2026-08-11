import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SearchBar, HotSearchTags } from "@/components/ui/SearchBar";
import {
  HOT_SEARCHES,
  CATEGORY_STATS,
  TYPE_LABELS,
} from "@/data/index";
import { updates, getFeaturedGuide } from "@/data/guides";
import { VERSION_LABEL } from "@/data/version";

export default function HomePage() {
  const featured = getFeaturedGuide();

  return (
    <AppShell>
      {/* Hero */}
      <section className="relative mb-8 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee/20 via-transparent to-forest/10" />
        <div className="glass-overlay absolute inset-0" />
        <div className="relative px-6 py-10 md:py-14">
          <p className="text-center text-xs font-medium tracking-widest text-coffee/60 uppercase">
            童協會
          </p>
          <h1 className="mt-2 text-center text-2xl font-bold leading-snug text-coffee md:text-3xl">
            童话世界的冒险者情报协会
          </h1>
          <p className="mt-2 text-center text-sm text-coffee/65">
            攻略 · 资料 · 回忆 · 一起延续我们的童话冒险
          </p>
          <div className="mx-auto mt-6 max-w-2xl">
            <SearchBar size="large" />
          </div>
          <div className="mx-auto mt-4 max-w-2xl">
            <HotSearchTags tags={HOT_SEARCHES} />
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="mb-8">
          <div className="glass-card-strong overflow-hidden rounded-2xl">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="mb-2 inline-block w-fit rounded-full bg-coffee px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-brass uppercase">
                  精选攻略 NEW
                </span>
                <h2 className="text-xl font-bold text-coffee md:text-2xl">
                  {featured.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-coffee/70">
                  {featured.summary}
                </p>
                <Link
                  href={`/guides/${featured.slug}`}
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-xl bg-coffee px-5 py-2.5 text-sm font-medium text-warm-white transition-opacity hover:opacity-90"
                >
                  立即查看 →
                </Link>
              </div>
              <div className="relative min-h-[160px] bg-gradient-to-br from-coffee/30 via-brass/20 to-forest/20 md:min-h-[220px]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-bold text-coffee">热门分类</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {CATEGORY_STATS.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="glass-card group rounded-xl p-4 transition-all hover:shadow-md"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-coffee/8 text-coffee transition-colors group-hover:bg-coffee/15">
                <span className="text-lg">📖</span>
              </div>
              <p className="text-sm font-semibold text-coffee">{cat.label}</p>
              <p className="text-xs text-coffee/50">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest updates */}
      <section>
        <h2 className="mb-4 text-lg font-bold text-coffee">最新更新</h2>
        <div className="glass-card divide-y divide-coffee/8 rounded-xl overflow-hidden">
          {updates.map((u) => (
            <div
              key={u.id}
              className="flex flex-wrap items-center gap-2 px-4 py-3 text-sm"
            >
              <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
                {TYPE_LABELS[u.entityType]}
              </span>
              <span className="font-medium text-coffee">{u.entityName}</span>
              <span className="text-coffee/60">{u.changeSummary}</span>
              <span className="ml-auto text-xs text-coffee/40">{u.publishedAt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Version footer note */}
      <p className="mt-8 text-center text-xs text-coffee/45">
        资料适用版本：{VERSION_LABEL}
      </p>
    </AppShell>
  );
}
