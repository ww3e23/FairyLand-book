import { decodeURIComponentSafe, pageHref } from "@/lib/paths";
import { getClassBySlug } from "@/data/classes";
import { getSkillBySlug } from "@/data/skills";
import { getGuideBySlug } from "@/data/guides";
import { getItemBySlug } from "@/data/items";

const PREFIX: Record<string, "classes" | "skills" | "guides" | "items"> = {
  classes: "classes",
  skills: "skills",
  guides: "guides",
  items: "items",
};

export function legacyRedirect(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "FairyLand-book") parts.shift();
  if (parts.length < 2) return null;

  const type = PREFIX[parts[0]];
  if (!type) return null;

  const raw = decodeURIComponentSafe(parts[1]);
  const entity =
    type === "classes"
      ? getClassBySlug(raw)
      : type === "skills"
        ? getSkillBySlug(raw)
        : type === "guides"
          ? getGuideBySlug(raw)
          : getItemBySlug(raw);

  if (!entity) return null;
  if (entity.slug === raw) return null;
  return pageHref(type, entity.slug);
}
