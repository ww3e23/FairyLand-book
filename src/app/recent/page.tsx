"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function RecentPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader title="最近瀏覽" subtitle="瀏覽記錄功能尚未開放" />
      <div className="glass-card rounded-xl p-8 text-center">
        <p className="text-sm text-coffee/70">尚無瀏覽記錄</p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-brown underline"
        >
          回到首頁
        </Link>
      </div>
    </AppShell>
  );
}
