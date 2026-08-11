import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { VERSION_LABEL } from "@/data/version";

export const metadata: Metadata = {
  title: "關於童協會",
};

export default function AboutPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader title="關於童協會" />

      <div className="glass-card-strong space-y-6 rounded-xl p-6 md:p-8">
        <section>
          <h2 className="text-lg font-bold text-coffee">這是什麼？</h2>
          <p className="mt-2 text-sm leading-relaxed text-coffee/80">
            童協會是《童話 Online》的公開攻略資料庫。名字來自遊戲中的家族，但網站的首要目標是成為一個
            <strong> 真正好用的童話資料站 </strong>
            ——讓玩家查職業、技能、幻獸、裝備、任務時，第一個想到童協會。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">網站理念</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-coffee/80">
            <li>資料來源清楚，每條重要資訊都標註出處</li>
            <li>版本狀態透明，知道哪些可能過時</li>
            <li>不確定的資料會說明並提供參考連結，而非自行編造</li>
            <li>降低維護成本，靠 AI 整理 + 玩家回報持續修正</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">目前版本</h2>
          <p className="mt-2 text-sm text-coffee/80">{VERSION_LABEL}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">加入童協會家族</h2>
          <p className="mt-2 text-sm text-coffee/80">
            童協會也是遊戲內的家族。如果你喜歡在童話世界冒險，歡迎加入我們。
          </p>
          <p className="mt-2 text-sm text-coffee/60">
            （遊戲內加入方式待補充——目前無資料，待好心人士提供。）
          </p>
        </section>
      </div>

      <footer className="mt-8 border-t border-coffee/10 pt-6 text-center text-xs text-coffee/45">
        <p>童協會 © 2026 童話 Online 攻略資料庫 版權所有</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/about" className="hover:text-coffee">
            關於我們
          </Link>
          <Link href="/report" className="hover:text-coffee">
            聯絡我們
          </Link>
        </div>
      </footer>
    </AppShell>
  );
}
