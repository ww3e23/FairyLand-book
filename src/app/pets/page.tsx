import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { PetsCatalog } from "@/components/pages/PetsCatalog";
import { pets } from "@/data/pets";
import { pageHref } from "@/lib/paths";

export const metadata: Metadata = {
  title: "幻獸圖鑑",
  description:
    "童話 Online 幻獸圖鑑。收錄百科野生出現表與稀有幻獸，外觀圖改由玩家提供。",
};

export default function PetsPage() {
  return (
    <AppShell>
      <PageHeader
        title="幻獸圖鑑"
        subtitle={`目前 ${pets.length} 筆。點空相框即可上傳外觀圖（審核後才上圖鑑）。`}
      />
      <p className="mb-6 text-sm text-coffee/70">
        每隻都有地點、出現等級、技能欄、可學技能與掉寶。出現等級是野生等級（例如 1～3 等），不是卡片編號。也可先看{" "}
        <Link
          href={pageHref("guides", "pet-fusion")}
          className="text-brown underline underline-offset-2"
        >
          幻獸選擇與融合
        </Link>
        。
      </p>
      <PetsCatalog />
    </AppShell>
  );
}
