import Link from "next/link";

const ICONS: Record<string, React.ReactNode> = {
  search: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return <span className={className}>{icon}</span>;
}

interface SearchBarProps {
  defaultValue?: string;
  size?: "default" | "large";
  autoFocus?: boolean;
}

export function SearchBar({
  defaultValue = "",
  size = "default",
  autoFocus = false,
}: SearchBarProps) {
  const isLarge = size === "large";
  return (
    <form action="/search/" method="GET" className="w-full">
      <div
        className={`search-glow glass-card-strong flex items-center gap-3 rounded-2xl border border-coffee/10 transition-shadow ${
          isLarge ? "px-5 py-4" : "px-4 py-2.5"
        }`}
      >
        <Icon name="search" className="shrink-0 text-coffee/50" />
        <input
          type="search"
          name="q"
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          placeholder="搜尋職業、技能、幻獸、裝備、地圖、任務……"
          className={`w-full bg-transparent text-coffee-dark placeholder:text-coffee/40 focus:outline-none ${
            isLarge ? "text-base" : "text-sm"
          }`}
        />
      </div>
    </form>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coffee text-brass shadow-md">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
        <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 4.01-2.68 7.78-6 8.87-3.32-1.09-6-4.86-6-8.87V6.43l6-2.25zM11 7v2H9v2h2v2h2v-2h2V9h-2V7h-2z" />
        </svg>
      </div>
      {!compact && (
        <div>
          <p className="text-base font-bold tracking-wide text-coffee group-hover:text-coffee-dark">
            童協會
          </p>
          <p className="text-[11px] text-coffee/60">童話 Online 攻略資料庫</p>
        </div>
      )}
    </Link>
  );
}

export function HotSearchTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-medium text-coffee/60">熱門：</span>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/search/?q=${encodeURIComponent(tag)}`}
          className="glass-card rounded-full px-3 py-1 text-xs text-coffee transition-colors hover:bg-cream/80 hover:text-coffee-dark"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
