import Link from "next/link";
import type { EntityType } from "@/lib/types";
import { getClassById } from "@/data/classes";
import { getSkillById } from "@/data/skills";
import { getGuideById } from "@/data/guides";

const TYPE_PATH: Record<EntityType, string> = {
  class: "classes",
  skill: "skills",
  pet: "pets",
  item: "items",
  job: "jobs",
  map: "maps",
  quest: "quests",
  guide: "guides",
};

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

export function EntityLink({
  type,
  id,
  label,
}: {
  type: EntityType;
  id: string;
  label: string;
}) {
  const href = getEntityHref(type, id);
  if (!href) {
    return (
      <span className="glass-card rounded-lg px-3 py-2 text-sm text-coffee/50">
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="glass-card rounded-lg px-3 py-2 text-sm text-coffee hover:shadow-sm"
    >
      {label}
    </Link>
  );
}
