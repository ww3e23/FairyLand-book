"use client";

import Link from "next/link";

export function PetReviewBoard() {
  return (
    <div className="paper-bg flex min-h-dvh items-center justify-center px-4">
      <div className="glass-card-strong w-full max-w-md rounded-2xl p-6">
        <h1 className="text-lg font-bold text-coffee">不用再審核</h1>
        <p className="mt-3 text-sm leading-relaxed text-coffee/75">
          玩家投稿的幻獸圖會自動上圖鑑，不必在這頁按核准。血腥、色情不要收；若亂圖太多，跟 Cursor
          說「關掉玩家傳圖」即可。
        </p>
        <Link
          href="/pets/"
          className="mt-5 block rounded-xl bg-coffee py-2.5 text-center text-sm font-medium text-warm-white"
        >
          打開圖鑑
        </Link>
      </div>
    </div>
  );
}
