import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "童協會｜童话 Online 攻略数据库",
    template: "%s｜童協會",
  },
  description:
    "童话 Online 攻略数据库——搜索职业、技能、幻兽、装备、地图、任务。资料来源清楚，版本状态透明。",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ww3e23.github.io/FairyLand-book",
  ),
  openGraph: {
    title: "童協會｜童话 Online 攻略数据库",
    description: "童话世界的冒险者情报协会",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${notoSansTC.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
