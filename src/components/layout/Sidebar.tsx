"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/SearchBar";
import { AppIcon } from "@/components/ui/Icon";
import { NAV_ITEMS } from "@/data/index";

export function Sidebar() {
  const pathname = usePathname();
  const readyItems = NAV_ITEMS.filter((item) => item.ready !== false);
  const soonItems = NAV_ITEMS.filter((item) => item.ready === false);

  return (
    <aside className="hidden lg:flex lg:w-56 xl:w-60 shrink-0 flex-col border-r border-coffee/10">
      <div className="glass-overlay sticky top-0 flex h-screen flex-col">
        <div className="border-b border-coffee/8 p-5">
          <Logo />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {readyItems.map((item) => {
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
                    <AppIcon name={item.icon} className="h-7 w-7 shrink-0 rounded-md" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {soonItems.length > 0 && (
            <div className="mt-5">
              <p className="mb-1 px-3 text-[10px] font-semibold tracking-wide text-coffee/40 uppercase">
                即將推出
              </p>
              <ul className="space-y-0.5">
                {soonItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-coffee/40 hover:bg-cream/40 hover:text-coffee/60"
                    >
                      <AppIcon name={item.icon} className="h-7 w-7 shrink-0 rounded-md" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      <Link
        href="/guides"
        className="rounded-lg px-2 py-1.5 text-xs text-coffee/70 hover:bg-cream/60"
      >
        攻略
      </Link>
    </header>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const items = [
    { label: "首頁", href: "/", icon: "home" },
    { label: "職業", href: "/classes", icon: "shield" },
    { label: "搜尋", href: "/search", icon: "search", center: true },
    { label: "道具", href: "/items", icon: "armor" },
    { label: "攻略", href: "/guides", icon: "potion" },
  ];

  return (
    <nav className="glass-card-strong fixed bottom-0 left-0 right-0 z-50 border-t border-coffee/10 lg:hidden">
      <ul className="flex items-end justify-around px-2 pb-safe pt-1">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          if (item.center) {
            return (
              <li key={item.href} className="-mt-4">
                <Link
                  href={item.href}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-coffee text-warm-white shadow-lg ring-4 ring-parchment"
                  aria-label="搜尋"
                >
                  <AppIcon name="search" className="h-9 w-9 rounded-full" />
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
                <AppIcon name={item.icon} className="h-7 w-7" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
