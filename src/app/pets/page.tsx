import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { PetsCatalog } from "@/components/pages/PetsCatalog";

export const metadata: Metadata = {
  title: "幻獸圖鑑",
  description:
    "童話 Online 幻獸圖鑑。收錄百科野生出現表與稀有幻獸，外觀圖改由玩家提供。",
};

export default function PetsPage() {
  return (
    <AppShell>
      <PageHeader title="幻獸圖鑑" />
      <PetsCatalog />
    </AppShell>
  );
}
