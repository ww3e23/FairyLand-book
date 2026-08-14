import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { AppIcon } from "@/components/ui/Icon";

const READY_LINKS = [
  { href: "/classes/", label: "職業攻略", icon: "shield" },
  { href: "/guides/class-overview/", label: "職業一覽", icon: "book" },
  { href: "/items/", label: "裝備道具", icon: "armor" },
  { href: "/guides/", label: "攻略文章", icon: "potion" },
];

export function ComingSoonPage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <AppShell>
      <PageHeader title={title} subtitle={subtitle} />
      <div className="glass-card rounded-xl p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-coffee/8 text-coffee/50">
          <AppIcon name="spark" className="h-7 w-7" />
        </div>
        <p className="mt-3 text-sm font-medium text-coffee">此分類尚在建設中</p>
        <p className="mt-1 text-xs text-coffee/60">
          目前還沒有可查的資料。你可以先看已經收錄的內容：
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {READY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-overlay flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm text-coffee hover:bg-cream/80"
            >
              <AppIcon name={link.icon} className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
