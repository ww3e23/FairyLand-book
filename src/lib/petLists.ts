import { pets } from "@/data/pets";

export function splitPetList(value?: string) {
  return (value ?? "")
    .split(/[、,，]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "zh-Hant"));
}

export const PET_MAP_OPTIONS = uniqueSorted(
  pets.flatMap((p) => splitPetList(p.spawnMaps.value)),
);

export const PET_SKILL_OPTIONS = uniqueSorted(
  pets.flatMap((p) => splitPetList(p.learnableSkills.value)),
);
