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
        <p className="mt-3 text-sm font-medium text-coffee">此分类尚在建设中</p>
        <p className="mt-1 text-xs text-coffee/60">
          V1 先聚焦职业、技能与攻略。此区块将在后续阶段扩充。
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-brown underline"
        >
          回到首页搜索
        </Link>
      </div>
    </AppShell>
  );
}
