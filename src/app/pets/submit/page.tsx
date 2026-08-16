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
            ? "選圖、裁切後直接送出。約幾分鐘會出現在圖鑑。"
            : "這項功能目前暫停。"
        }
      />

      {PLAYER_PET_IMAGE_SUBMISSIONS ? (
        <>
          <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-coffee/70">
            <li>只要該隻幻獸長怎樣，遊戲內截圖最好認。</li>
            <li>禁止血腥、色情畫面。</li>
            <li>不要用其他攻略站、圖鑑站的圖。</li>
            <li>亂圖太多會關掉這入口。</li>
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
