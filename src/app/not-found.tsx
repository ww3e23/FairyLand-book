import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";

export default function NotFound() {
  return (
    <AppShell showContext={false}>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-6xl">🧭</p>
        <h1 className="mt-4 text-xl font-bold text-coffee">找不到页面</h1>
        <p className="mt-2 text-sm text-coffee/60">
          这项资料可能尚未收录，或 URL 有误。
        </p>
        <Link
          href="/search"
          className="mt-6 rounded-xl bg-coffee px-6 py-2.5 text-sm font-medium text-warm-white"
        >
          搜索资料
        </Link>
      </div>
    </AppShell>
  );
}
