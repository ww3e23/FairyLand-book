import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { SourceList } from "@/components/ui/DataField";
import { PetInfoBlock } from "@/components/pages/PetInfoBlock";
import { PetPhotoSlot } from "@/components/pages/PetPhotoSlot";
import { PET_ELEMENT_LABEL } from "@/data/pets";
import { VERSION_LABEL } from "@/data/version";
import { pageHref } from "@/lib/paths";
import type { PetEntity } from "@/lib/types";

export function PetDetail({ pet }: { pet: PetEntity }) {
  return (
    <AppShell>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-coffee/60">
        <Link href="/pets" className="hover:text-coffee">
          幻獸圖鑑
        </Link>
        <span>/</span>
        <span className="text-coffee">{pet.name}</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-bold text-coffee md:text-3xl">
          {pet.name}
        </h1>
        <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs text-coffee/70">
          {PET_ELEMENT_LABEL[pet.element]}系
          {pet.rare ? " · 稀有" : ""}
        </span>
        <TrustBadge status={pet.trustStatus} />
      </div>

      {pet.aliases && pet.aliases.length > 0 && (
        <p className="mb-2 text-xs text-coffee/50">
          別名：{pet.aliases.join("、")}
        </p>
      )}

      <p className="mb-6 text-xs text-coffee/50">
        適用版本：{VERSION_LABEL}
        {" · "}現服請以遊戲內為準
      </p>

      <div className="mb-6 flex flex-col gap-6 md:flex-row">
        <PetPhotoSlot
          petName={pet.name}
          petSlug={pet.slug}
          image={pet.image}
          imageKind={pet.imageKind}
          size="md"
        />
        <div className="glass-card-strong min-w-0 flex-1 rounded-xl p-5">
          <PetInfoBlock pet={pet} />
        </div>
      </div>

      <p className="mt-4 text-sm text-coffee/70">
        養寵方向也可先看{" "}
        <Link
          href={pageHref("guides", "pet-fusion")}
          className="text-brown underline underline-offset-2"
        >
          幻獸選擇與融合
        </Link>
        。
      </p>

      <div className="mt-6">
        <SourceList sources={pet.sources} />
      </div>

      <ReportSection />
    </AppShell>
  );
}
