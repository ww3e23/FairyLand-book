"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TrustBadge } from "@/components/ui/TrustBadge";
import {
  PET_ELEMENT_LABEL,
  PET_ELEMENT_ORDER,
  pets,
} from "@/data/pets";
import { pageHref, withBasePath } from "@/lib/paths";
import type { PetElement } from "@/lib/types";

type Filter = PetElement | "all";

export function PetsCatalog() {
  const [filter, setFilter] = useState<Filter>("metal");

  const list = useMemo(
    () => (filter === "all" ? pets : pets.filter((p) => p.element === filter)),
    [filter],
  );

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
              label={`${PET_ELEMENT_LABEL[el]}系${count ? ` ${count}` : ""}`}
            />
          );
        })}
      </div>

      {list.length === 0 ? (
        <div className="glass-card rounded-xl p-6 text-sm text-coffee/70">
          這個系別還沒收錄。目前先放金系常見的幾隻，其他系會陸續補上。
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((pet) => (
            <Link
              key={pet.id}
              href={pageHref("pets", pet.slug)}
              className="glass-card flex gap-4 rounded-xl p-4 transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(pet.image)}
                alt=""
                className="h-24 w-24 shrink-0 rounded-lg border border-coffee/10 bg-[#efe4cf] object-contain sm:h-28 sm:w-28"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-bold text-coffee">{pet.name}</h2>
                  <span className="rounded-full bg-cream px-2 py-0.5 text-[10px] text-coffee/70">
                    {PET_ELEMENT_LABEL[pet.element]} · {pet.bias.value ?? "偏向性未填"}
                  </span>
                  <TrustBadge status={pet.trustStatus} />
                </div>
                <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-coffee/70 sm:grid-cols-3">
                  <div>
                    <dt className="text-coffee/40">地點</dt>
                    <dd className="line-clamp-2">{pet.spawnMaps.value ?? "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-coffee/40">出現等級</dt>
                    <dd>{pet.spawnLevel.value ?? "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-coffee/40">技能欄</dt>
                    <dd>{pet.skillSlots.value ?? "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-coffee/40">生命</dt>
                    <dd>{pet.hp.value ?? "待確認"}</dd>
                  </div>
                  <div className="col-span-2 sm:col-span-2">
                    <dt className="text-coffee/40">六維 力／體／敏／智／幸／魅</dt>
                    <dd>
                      {[
                        pet.str.value,
                        pet.sta.value,
                        pet.agi.value,
                        pet.int.value,
                        pet.luk.value,
                        pet.cha.value,
                      ].every(Boolean)
                        ? [
                            pet.str.value,
                            pet.sta.value,
                            pet.agi.value,
                            pet.int.value,
                            pet.luk.value,
                            pet.cha.value,
                          ].join("／")
                        : "待確認"}
                    </dd>
                  </div>
                </dl>
                <p className="mt-2 line-clamp-2 text-sm text-coffee/75">
                  {pet.note.value}
                </p>
              </div>
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
