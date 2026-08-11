import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";

export default function NotFound() {
  return (
    <AppShell showContext={false}>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-6xl">🧭</p>
        <h1 className="mt-4 text-xl font-bold text-coffee">找不到頁面</h1>
        <p className="mt-2 text-sm text-coffee/60">
          這項資料可能尚未收錄，或 URL 有誤。
        </p>
        <Link
          href="/search"
          className="mt-6 rounded-xl bg-coffee px-6 py-2.5 text-sm font-medium text-warm-white"
        >
          搜尋資料
        </Link>
      </div>
    </AppShell>
  );
}
