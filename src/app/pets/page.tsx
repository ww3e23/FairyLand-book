import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { PetsCatalog } from "@/components/pages/PetsCatalog";
import { PlayerPetImageCta } from "@/components/pages/PlayerPetImageCta";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";
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
        subtitle={`目前 ${pets.length} 筆：七系野生出現表＋稀有。先不放本站插畫。`}
      />
      <p className="mb-6 text-sm text-coffee/70">
        地點、掉寶、可學技能整理自巴哈百科（來源標敗家一族、Yuki）。遊戲宣稱約 980 種（含同物種不同色），沒有出現地的變體這裡不編造。百科「虛寶幻獸」頁目前是空的。六維只在有對過的個體才填。也可先看{" "}
        <Link
          href={pageHref("guides", "pet-fusion")}
          className="text-brown underline underline-offset-2"
        >
          幻獸選擇與融合
        </Link>
        。
      </p>
      {PLAYER_PET_IMAGE_SUBMISSIONS && (
        <div className="mb-6">
          <PlayerPetImageCta />
        </div>
      )}
      <PetsCatalog />
    </AppShell>
  );
}
