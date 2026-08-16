"use client";

import { useMemo, useState } from "react";
import { PetInfoBlock } from "@/components/pages/PetInfoBlock";
import { PetPhotoSlot } from "@/components/pages/PetPhotoSlot";
import {
  PET_ELEMENT_LABEL,
  PET_ELEMENT_ORDER,
  pets,
} from "@/data/pets";
import {
  PET_MAP_OPTIONS,
  PET_SKILL_OPTIONS,
  splitPetList,
} from "@/lib/petLists";
import type { PetElement, PetEntity } from "@/lib/types";

type ElementFilter = PetElement | "all" | "rare";

const selectClass =
  "w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm text-coffee-dark focus:outline-none focus:ring-2 focus:ring-brass/40";

export function PetsCatalog() {
  const [query, setQuery] = useState("");
  const [element, setElement] = useState<ElementFilter>("all");
  const [map, setMap] = useState("");
  const [skill, setSkill] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pets.filter((pet) => {
      if (element === "rare" && !pet.rare) return false;
      if (element !== "all" && element !== "rare" && pet.element !== element)
        return false;
      if (map && !splitPetList(pet.spawnMaps.value).includes(map)) return false;
      if (skill && !splitPetList(pet.learnableSkills.value).includes(skill))
        return false;
      if (!q) return true;
      return petSearchText(pet).includes(q);
    });
  }, [query, element, map, skill]);

  return (
    <>
      <div className="mb-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋名稱、別名、地點、技能、掉寶…"
          className={selectClass}
        />
      </div>

      <div className="mb-4 grid gap-2 sm:grid-cols-2">
        <label className="block text-xs text-coffee/50">
          地點
          <select
            value={map}
            onChange={(e) => setMap(e.target.value)}
            className={`mt-1 ${selectClass}`}
          >
            <option value="">全部地點</option>
            {PET_MAP_OPTIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-xs text-coffee/50">
          可學技能
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className={`mt-1 ${selectClass}`}
          >
            <option value="">全部技能</option>
            {PET_SKILL_OPTIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <FilterChip
          active={element === "all"}
          onClick={() => setElement("all")}
          label="全部"
        />
        {PET_ELEMENT_ORDER.map((el) => (
          <FilterChip
            key={el}
            active={element === el}
            onClick={() => setElement(el)}
            label={`${PET_ELEMENT_LABEL[el]}系`}
          />
        ))}
        <FilterChip
          active={element === "rare"}
          onClick={() => setElement("rare")}
          label="稀有"
        />
      </div>

      <p className="mb-3 text-xs text-coffee/50">
        {list.length} 筆 · 點名稱展開資料
      </p>

      {list.length === 0 ? (
        <div className="glass-card rounded-xl p-6 text-sm text-coffee/70">
          沒有符合的幻獸，試試別的關鍵字或篩選。
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {list.map((pet) => {
            const open = openId === pet.id;
            return (
              <article
                key={pet.id}
                className={`glass-card rounded-xl p-3 ${open ? "col-span-2 sm:col-span-3 md:col-span-4" : ""}`}
              >
                <div className={`flex ${open ? "flex-col gap-4 sm:flex-row" : "flex-col items-center gap-2"}`}>
                  <PetPhotoSlot
                    petName={pet.name}
                    petSlug={pet.slug}
                    image={pet.image}
                    imageKind={pet.imageKind}
                    size="sm"
                  />
                  <div className="min-w-0 w-full flex-1">
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : pet.id)}
                      className="w-full text-center text-sm font-bold text-coffee hover:underline sm:text-left"
                    >
                      {pet.name}
                      {pet.rare ? (
                        <span className="ml-1 text-[10px] font-normal text-coffee/50">
                          稀有
                        </span>
                      ) : null}
                    </button>
                    {open && (
                      <div className="mt-3">
                        <PetInfoBlock pet={pet} compact />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}

function petSearchText(pet: PetEntity) {
  return [
    pet.name,
    ...(pet.aliases ?? []),
    pet.spawnMaps.value,
    pet.learnableSkills.value,
    pet.drops.value,
    pet.note.value,
    PET_ELEMENT_LABEL[pet.element],
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
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
