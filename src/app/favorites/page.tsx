"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function FavoritesPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="收藏"
        subtitle="收藏的资料会保存在此浏览器（无需登录）"
      />
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-sm text-coffee/70">你还没有收藏任何资料</p>
        <p className="mt-1 text-xs text-coffee/50">
          V1 收藏功能即将推出（LocalStorage）
        </p>
      </div>
    </AppShell>
  );
}
