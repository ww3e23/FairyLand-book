"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { legacyRedirect } from "@/lib/legacyRedirects";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const next = legacyRedirect(pathname);
    if (next) router.replace(next);
  }, [pathname, router]);

  return (
    <AppShell showContext={false}>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-6xl">🧭</p>
        <h1 className="mt-4 text-xl font-bold text-coffee">找不到頁面</h1>
        <p className="mt-2 text-sm text-coffee/60">
          這項資料可能尚未收錄，或網址已改成英文路徑。正在嘗試幫你轉到正確頁面。
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/search/"
            className="rounded-xl bg-coffee px-6 py-2.5 text-sm font-medium text-warm-white"
          >
            搜尋資料
          </Link>
          <Link
            href="/guides/"
            className="rounded-xl border border-coffee/20 px-6 py-2.5 text-sm text-coffee"
          >
            攻略列表
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
