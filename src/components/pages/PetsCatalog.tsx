"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { PetInfoBlock } from "@/components/pages/PetInfoBlock";
import { PetPhotoSlot } from "@/components/pages/PetPhotoSlot";
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
        <div className="space-y-5">
          {list.map((pet) => (
            <article
              key={pet.id}
              className="glass-card rounded-xl p-4 md:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <PetPhotoSlot
                  petName={pet.name}
                  petSlug={pet.slug}
                  image={pet.image}
                  imageKind={pet.imageKind}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Link
                      href={pageHref("pets", pet.slug)}
                      className="text-lg font-bold text-coffee hover:underline"
                    >
                      {pet.name}
                    </Link>
                    <TrustBadge status={pet.trustStatus} />
                  </div>
                  <PetInfoBlock pet={pet} compact />
                </div>
              </div>
            </article>
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
