"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function FavoritesPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="收藏"
        subtitle="收藏的資料會保存在此瀏覽器（無需登入）"
      />
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-sm text-coffee/70">你還沒有收藏任何資料</p>
        <p className="mt-1 text-xs text-coffee/50">
          V1 收藏功能即將推出（LocalStorage）
        </p>
      </div>
    </AppShell>
  );
}
