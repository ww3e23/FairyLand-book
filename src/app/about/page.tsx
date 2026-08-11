import Link from "next/link";
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { VERSION_LABEL } from "@/data/version";

export const metadata: Metadata = {
  title: "关于童協會",
};

export default function AboutPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader title="关于童協會" />

      <div className="glass-card-strong space-y-6 rounded-xl p-6 md:p-8">
        <section>
          <h2 className="text-lg font-bold text-coffee">这是什么？</h2>
          <p className="mt-2 text-sm leading-relaxed text-coffee/80">
            童協會是《童话 Online》的公开攻略数据库。名字来自游戏中的家族，但网站的首要目标是成为一个
            <strong> 真正好用的童话资料站 </strong>
            ——让玩家查职业、技能、幻兽、装备、任务时，第一个想到童協會。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">网站理念</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-coffee/80">
            <li>资料来源清楚，每条重要资讯都标注出处</li>
            <li>版本状态透明，知道哪些可能过时</li>
            <li>不确定的资料会说明并提供参考链接，而非自行编造</li>
            <li>降低维护成本，靠 AI 整理 + 玩家回报持续修正</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">目前版本</h2>
          <p className="mt-2 text-sm text-coffee/80">{VERSION_LABEL}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-coffee">加入童協會家族</h2>
          <p className="mt-2 text-sm text-coffee/80">
            童協會也是游戏内的家族。如果你喜欢在童话世界冒险，欢迎加入我们。
          </p>
          <p className="mt-2 text-sm text-coffee/60">
            （游戏内加入方式待补充——目前无资料，待好心人士提供。）
          </p>
        </section>
      </div>

      <footer className="mt-8 border-t border-coffee/10 pt-6 text-center text-xs text-coffee/45">
        <p>童協會 © 2026 童话 Online 攻略数据库 版权所有</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/about" className="hover:text-coffee">
            关于我们
          </Link>
          <Link href="/report" className="hover:text-coffee">
            联系我们
          </Link>
        </div>
      </footer>
    </AppShell>
  );
}
