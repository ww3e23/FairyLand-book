import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SearchBar, HotSearchTags } from "@/components/ui/SearchBar";
import { AppIcon } from "@/components/ui/Icon";
import {
  HOT_SEARCHES,
  CATEGORY_STATS,
  TYPE_LABELS,
} from "@/data/index";
import { updates, getFeaturedGuide } from "@/data/guides";
import { VERSION_LABEL } from "@/data/version";
import { getEntityHref } from "@/lib/entities";

export default function HomePage() {
  const featured = getFeaturedGuide();
  const readyCats = CATEGORY_STATS.filter((c) => c.ready !== false);
  const soonCats = CATEGORY_STATS.filter((c) => c.ready === false);

  return (
    <AppShell>
      <section className="relative mb-8 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee/20 via-transparent to-forest/10" />
        <div className="glass-overlay absolute inset-0" />
        <div className="relative px-6 py-10 md:py-14">
          <p className="text-center text-xs font-medium tracking-widest text-coffee/60 uppercase">
            童協會
          </p>
          <h1 className="mt-2 text-center text-2xl font-bold leading-snug text-coffee md:text-3xl">
            童話世界的冒險者情報協會
          </h1>
          <p className="mt-2 text-center text-sm text-coffee/65">
            攻略 · 資料 · 回憶 · 一起延續我們的童話冒險
          </p>
          <div className="mx-auto mt-6 max-w-2xl">
            <SearchBar size="large" />
          </div>
          <div className="mx-auto mt-4 max-w-2xl">
            <HotSearchTags tags={HOT_SEARCHES} />
          </div>
        </div>
      </section>

      {featured && (
        <section className="mb-8">
          <Link
            href={`/guides/${featured.slug}/`}
            className="glass-card-strong group block overflow-hidden rounded-2xl transition-shadow hover:shadow-md"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="mb-2 inline-block w-fit rounded-full bg-coffee px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-brass uppercase">
                  精選攻略
                </span>
                <h2 className="text-xl font-bold text-coffee md:text-2xl">
                  {featured.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-coffee/70">
                  {featured.summary}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-xl bg-coffee px-5 py-2.5 text-sm font-medium text-warm-white">
                  立即查看 →
                </span>
              </div>
              <div className="relative flex min-h-[140px] items-center justify-center bg-gradient-to-br from-coffee/25 via-brass/15 to-forest/20 md:min-h-[200px]">
                <AppIcon name="potion" className="h-28 w-28 rounded-2xl shadow-md" />
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-bold text-coffee">熱門分類</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {readyCats.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="glass-card group rounded-xl p-4 transition-all hover:shadow-md"
            >
              <div className="mb-3 h-14 w-14 overflow-hidden rounded-xl shadow-sm ring-1 ring-coffee/10">
                <AppIcon name={cat.icon} className="h-14 w-14" />
              </div>
              <p className="text-sm font-semibold text-coffee">{cat.label}</p>
              <p className="text-xs text-coffee/50">{cat.count}</p>
            </Link>
          ))}
        </div>
        {soonCats.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium text-coffee/45">即將推出</p>
            <div className="grid grid-cols-2 gap-3">
              {soonCats.map((cat) => (
                <div
                  key={cat.label}
                  className="glass-card rounded-xl p-4 opacity-60"
                >
                  <div className="mb-3 h-14 w-14 overflow-hidden rounded-xl ring-1 ring-coffee/10">
                    <AppIcon name={cat.icon} className="h-14 w-14" />
                  </div>
                  <p className="text-sm font-semibold text-coffee">{cat.label}</p>
                  <p className="text-xs text-coffee/50">資料尚未收錄</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-coffee">最新更新</h2>
        <div className="glass-card divide-y divide-coffee/8 overflow-hidden rounded-xl">
          {updates.map((u) => {
            const href = getEntityHref(u.entityType, u.entityId);
            const inner = (
              <>
                <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
                  {TYPE_LABELS[u.entityType]}
                </span>
                <span className="font-medium text-coffee">{u.entityName}</span>
                <span className="text-coffee/60">{u.changeSummary}</span>
                <span className="ml-auto text-xs text-coffee/40">
                  {u.publishedAt}
                </span>
              </>
            );
            if (!href) {
              return (
                <div
                  key={u.id}
                  className="flex flex-wrap items-center gap-2 px-4 py-3 text-sm"
                >
                  {inner}
                </div>
              );
            }
            return (
              <Link
                key={u.id}
                href={href}
                className="flex flex-wrap items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-cream/50"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <p className="mt-8 text-center text-xs text-coffee/45">
        資料適用版本：{VERSION_LABEL}
      </p>
    </AppShell>
  );
}
