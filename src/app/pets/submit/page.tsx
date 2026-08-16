import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { PetImageSubmitForm } from "@/components/pages/PetImageSubmitForm";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";

export const metadata: Metadata = {
  title: "提供幻獸圖片",
  robots: PLAYER_PET_IMAGE_SUBMISSIONS ? undefined : { index: false, follow: false },
};

export default function PetImageSubmitPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="提供幻獸圖片"
        subtitle={
          PLAYER_PET_IMAGE_SUBMISSIONS
            ? "測試中：先收遊戲內截圖或你畫的外觀。審核後才上圖鑑。"
            : "這項功能目前暫停。"
        }
      />

      {PLAYER_PET_IMAGE_SUBMISSIONS ? (
        <>
          <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-coffee/70">
            <li>只要該隻幻獸長怎樣，遊戲內截圖最好認。</li>
            <li>自己畫的也可以，但請畫得像，不要只交可愛無關圖。</li>
            <li>不要用其他攻略站、圖鑑站的圖（含截他們的頁面）。</li>
            <li>亂圖、無關圖、盜用圖不會上站；太多的話這入口會關掉。</li>
          </ul>
          <Suspense
            fallback={
              <p className="text-sm text-coffee/60">載入投稿表單…</p>
            }
          >
            <PetImageSubmitForm />
          </Suspense>
        </>
      ) : (
        <div className="glass-card rounded-xl p-6 text-sm text-coffee/70">
          玩家提供圖片已關閉。仍可從{" "}
          <Link href="/pets" className="text-brown underline underline-offset-2">
            幻獸圖鑑
          </Link>
          {" "}看現有資料，或用{" "}
          <Link href="/report" className="text-brown underline underline-offset-2">
            情報回報
          </Link>
          {" "}反應錯誤。
        </div>
      )}
    </AppShell>
  );
}
