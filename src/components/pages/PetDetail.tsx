import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ReportSection } from "@/components/layout/ContextPanel";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { DataField, SourceList } from "@/components/ui/DataField";
import { PET_ELEMENT_LABEL } from "@/data/pets";
import { VERSION_LABEL } from "@/data/version";
import { pageHref, withBasePath } from "@/lib/paths";
import type { PetEntity } from "@/lib/types";

function StatCell({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-lg bg-cream/70 px-3 py-2 text-center">
      <p className="text-[10px] tracking-wide text-coffee/50">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-coffee">
        {value ?? "—"}
      </p>
    </div>
  );
}

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
        {" · "}地點／技能／掉寶整理自舊玩家表與百科，現服請以遊戲內為準
      </p>

      <figure className="guide-figure mb-6 max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBasePath(pet.image)} alt={`${pet.name}（本站重繪）`} />
        <figcaption>
          本站依外觀重繪的 Q 版插畫，不是遊戲截圖，也不是其他資料站的圖。
        </figcaption>
      </figure>

      <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-7">
        <StatCell label="生命" value={pet.hp.value} />
        <StatCell label="力量" value={pet.str.value} />
        <StatCell label="體質" value={pet.sta.value} />
        <StatCell label="敏捷" value={pet.agi.value} />
        <StatCell label="智慧" value={pet.int.value} />
        <StatCell label="幸運" value={pet.luk.value} />
        <StatCell label="魅力" value={pet.cha.value} />
      </div>

      <div className="glass-card-strong rounded-xl p-5 md:p-6">
        <DataField label="偏向性" field={pet.bias} />
        <DataField label="出現等級" field={pet.spawnLevel} />
        <DataField label="出現地點" field={pet.spawnMaps} />
        <DataField label="技能欄" field={pet.skillSlots} />
        <DataField label="生命" field={pet.hp} />
        <DataField label="力量" field={pet.str} />
        <DataField label="體質" field={pet.sta} />
        <DataField label="敏捷" field={pet.agi} />
        <DataField label="智慧" field={pet.int} />
        <DataField label="幸運" field={pet.luk} />
        <DataField label="魅力" field={pet.cha} />
        <DataField label="掉寶" field={pet.drops} />
        <DataField label="可學技能" field={pet.learnableSkills} />
        <DataField label="備註" field={pet.note} />
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
