import { pets } from "@/data/pets";

export const PET_SUBMIT_OTHER = "other";

export function petSubmitOptions() {
  return [
    ...pets.map((p) => ({ slug: p.slug, name: p.name })),
    { slug: PET_SUBMIT_OTHER, name: "其他／尚未收錄的幻獸" },
  ];
}
