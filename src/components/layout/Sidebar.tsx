"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/SearchBar";
import { NAV_ITEMS } from "@/data/index";

function NavIcon() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center opacity-70">
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <circle cx="12" cy="12" r="8" />
      </svg>
    </span>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-56 xl:w-60 shrink-0 flex-col border-r border-coffee/10">
      <div className="glass-overlay sticky top-0 flex h-screen flex-col">
        <div className="border-b border-coffee/8 p-5">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-coffee/10 font-medium text-coffee"
                        : "text-coffee/70 hover:bg-cream/60 hover:text-coffee"
                    }`}
                  >
                    <NavIcon />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-coffee/8 p-4">
          <div className="glass-card rounded-xl p-3">
            <p className="text-xs font-semibold text-coffee">關於童協會</p>
            <p className="mt-1 text-[11px] leading-relaxed text-coffee/65">
              我們是一群熱愛童話 Online 的冒險者，希望整理完整、最新的遊戲情報。
            </p>
            <Link
              href="/about"
              className="mt-2 inline-block text-xs font-medium text-brown underline underline-offset-2"
            >
              加入童協會家族 →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  return (
    <header className="glass-card-strong sticky top-0 z-40 flex items-center justify-between border-b border-coffee/10 px-4 py-3 lg:hidden">
      <Logo compact />
      <div className="flex items-center gap-2">
        <Link
          href="/recent"
          className="rounded-lg px-2 py-1.5 text-xs text-coffee/70 hover:bg-cream/60"
        >
          最近瀏覽
        </Link>
      </div>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const items = [
    { label: "首頁", href: "/", icon: "home" },
    { label: "分類", href: "/classes", icon: "grid" },
    { label: "搜尋", href: "/search", icon: "search", center: true },
    { label: "收藏", href: "/favorites", icon: "star" },
    { label: "更多", href: "/about", icon: "more" },
  ];

  return (
    <nav className="glass-card-strong fixed bottom-0 left-0 right-0 z-50 border-t border-coffee/10 lg:hidden">
      <ul className="flex items-end justify-around px-2 pb-safe pt-1">
        {items.map((item) => {
          const active = pathname === item.href;
          if (item.center) {
            return (
              <li key={item.href} className="-mt-4">
                <Link
                  href={item.href}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-coffee text-warm-white shadow-lg ring-4 ring-parchment"
                  aria-label="搜尋"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Link>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 text-[10px] ${
                  active ? "text-coffee font-medium" : "text-coffee/50"
                }`}
              >
                <span className="h-5 w-5 rounded bg-coffee/10" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
