"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppIcon } from "@/components/ui/Icon";

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
  const router = useRouter();
  const isLarge = size === "large";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = String(new FormData(e.currentTarget).get("q") ?? "").trim();
    if (!q) {
      router.push("/search/");
      return;
    }
    router.push(`/search/?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`search-glow glass-card-strong flex items-center gap-3 rounded-2xl border border-coffee/10 transition-shadow ${
          isLarge ? "px-5 py-4" : "px-4 py-2.5"
        }`}
      >
        <AppIcon name="search" className="h-6 w-6 shrink-0 rounded" />
        <input
          type="search"
          name="q"
          defaultValue={defaultValue}
          autoFocus={autoFocus}
          placeholder="搜尋職業、技能、道具、攻略……"
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
        <AppIcon name="shield" className="relative h-5 w-5" />
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
