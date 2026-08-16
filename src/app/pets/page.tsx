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
    "童話 Online 幻獸圖鑑。目前先收錄金系，插畫為本站重繪，數值請以遊戲內為準。",
};

export default function PetsPage() {
  return (
    <AppShell>
      <PageHeader
        title="幻獸圖鑑"
        subtitle={`先收錄金系 ${pets.length} 隻。插畫是本站依外觀重繪，不是截圖。`}
      />
      <p className="mb-6 text-sm text-coffee/70">
        地點、掉寶、可學技能交叉整理自百科與舊玩家表，六維只在有對過的個體才填。也可先看{" "}
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
