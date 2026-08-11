"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function RecentPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader title="最近浏览" subtitle="自动保存最近查看的资料" />
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-sm text-coffee/70">尚无浏览记录</p>
        <p className="mt-1 text-xs text-coffee/50">
          V1 最近浏览功能即将推出（LocalStorage）
        </p>
      </div>
    </AppShell>
  );
}
