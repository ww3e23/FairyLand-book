import type { EntityType } from "@/lib/types";
import { getClassById } from "@/data/classes";
import { getSkillById } from "@/data/skills";
import { getGuideById } from "@/data/guides";
import { getItemById } from "@/data/items";
import { pageHref } from "@/lib/paths";

export function getEntityHref(type: EntityType, id: string): string | null {
  switch (type) {
    case "class": {
      const e = getClassById(id);
      return e ? pageHref("classes", e.slug) : null;
    }
    case "skill": {
      const e = getSkillById(id);
      return e ? pageHref("skills", e.slug) : null;
    }
    case "guide": {
      const e = getGuideById(id);
      return e ? pageHref("guides", e.slug) : null;
    }
    case "item": {
      const e = getItemById(id);
      return e ? pageHref("items", e.slug) : null;
    }
    default:
      return null;
  }
}
