"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function FavoritesPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="收藏"
        subtitle="收藏功能尚未開放，先從現有資料開始看"
      />
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-sm text-coffee/70">你還沒有收藏任何資料</p>
        <p className="mt-1 text-xs text-coffee/50">
          LocalStorage 收藏即將推出。現在可以先瀏覽這些頁面：
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link
            href="/guides"
            className="rounded-lg bg-coffee px-4 py-2 text-xs font-medium text-warm-white"
          >
            攻略文章
          </Link>
          <Link
            href="/items"
            className="glass-overlay rounded-lg px-4 py-2 text-xs text-coffee"
          >
            裝備道具
          </Link>
          <Link
            href="/classes"
            className="glass-overlay rounded-lg px-4 py-2 text-xs text-coffee"
          >
            職業
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
