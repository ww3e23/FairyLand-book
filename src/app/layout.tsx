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
    default: "童協會｜童話 Online 攻略資料庫",
    template: "%s｜童協會",
  },
  description:
    "童話 Online 攻略資料庫——搜尋職業、技能、幻獸、裝備、地圖、任務。資料來源清楚，版本狀態透明。",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ww3e23.github.io/FairyLand-book",
  ),
  openGraph: {
    title: "童協會｜童話 Online 攻略資料庫",
    description: "童話世界的冒險者情報協會",
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
