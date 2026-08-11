import type { EntityType } from "@/lib/types";
import { getClassById } from "@/data/classes";
import { getSkillById } from "@/data/skills";
import { getGuideById } from "@/data/guides";

export function getEntityHref(type: EntityType, id: string): string | null {
  switch (type) {
    case "class": {
      const e = getClassById(id);
      return e ? `/classes/${e.slug}` : null;
    }
    case "skill": {
      const e = getSkillById(id);
      return e ? `/skills/${e.slug}` : null;
    }
    case "guide": {
      const e = getGuideById(id);
      return e ? `/guides/${e.slug}` : null;
    }
    default:
      return null;
  }
}
