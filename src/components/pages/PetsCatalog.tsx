"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TrustBadge } from "@/components/ui/TrustBadge";
import {
  PET_ELEMENT_LABEL,
  PET_ELEMENT_ORDER,
  pets,
} from "@/data/pets";
import { pageHref } from "@/lib/paths";
import type { PetElement } from "@/lib/types";

type Filter = PetElement | "all" | "rare";

export function PetsCatalog() {
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(() => {
    if (filter === "all") return pets;
    if (filter === "rare") return pets.filter((p) => p.rare);
    return pets.filter((p) => p.element === filter);
  }, [filter]);

  const rareCount = pets.filter((p) => p.rare).length;

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`全部 ${pets.length}`}
        />
        {PET_ELEMENT_ORDER.map((el) => {
          const count = pets.filter((p) => p.element === el).length;
          return (
            <FilterChip
              key={el}
              active={filter === el}
              onClick={() => setFilter(el)}
              label={`${PET_ELEMENT_LABEL[el]}系 ${count}`}
            />
          );
        })}
        <FilterChip
          active={filter === "rare"}
          onClick={() => setFilter("rare")}
          label={`稀有 ${rareCount}`}
        />
      </div>

      {list.length === 0 ? (
        <div className="glass-card rounded-xl p-6 text-sm text-coffee/70">
          這個分類目前沒有資料。
        </div>
      ) : (
        <div className="space-y-2">
          {list.map((pet) => (
            <Link
              key={pet.id}
              href={pageHref("pets", pet.slug)}
              className="glass-card block rounded-xl p-3 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-sm font-bold text-coffee">{pet.name}</h2>
                <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                  {PET_ELEMENT_LABEL[pet.element]}
                  {pet.rare ? " · 稀有" : ""} · {pet.bias.value ?? "偏向性未填"}
                </span>
                <TrustBadge status={pet.trustStatus} />
              </div>
              <p className="mt-1 text-xs text-coffee/60">
                {pet.spawnLevel.value ?? "等級未填"}
                {" · "}
                {pet.spawnMaps.value ?? "地點未填"}
                {" · 技能欄 "}
                {pet.skillSlots.value ?? "—"}
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
        active
          ? "bg-coffee text-cream"
          : "bg-cream/80 text-coffee/70 hover:bg-cream"
      }`}
    >
      {label}
    </button>
  );
}
