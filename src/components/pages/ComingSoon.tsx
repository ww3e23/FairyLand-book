import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

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
        <p className="text-4xl">🚧</p>
        <p className="mt-3 text-sm font-medium text-coffee">此分類尚在建設中</p>
        <p className="mt-1 text-xs text-coffee/60">
          V1 先聚焦職業、技能與攻略。此區塊將在後續階段擴充。
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-brown underline"
        >
          回到首頁搜尋
        </Link>
      </div>
    </AppShell>
  );
}
