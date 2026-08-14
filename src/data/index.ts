import { classes } from "./classes";
import { skills } from "./skills";
import { guides } from "./guides";
import { items } from "./items";
import type { EntityType, SearchResult } from "@/lib/types";

const TYPE_LABELS: Record<EntityType, string> = {
  class: "職業",
  skill: "技能",
  pet: "幻獸",
  item: "裝備",
  job: "工作",
  map: "地圖",
  quest: "任務",
  guide: "攻略",
};

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

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const c of classes) {
    results.push({
      id: c.id,
      type: "class",
      name: c.name,
      slug: c.slug,
      description: c.description.value ?? c.description.note ?? "",
      trustStatus: c.trustStatus,
      updatedAt: c.indexedAt,
      href: `/${TYPE_PATH.class}/${c.slug}/`,
    });
  }

  for (const s of skills) {
    results.push({
      id: s.id,
      type: "skill",
      name: s.name,
      slug: s.slug,
      description:
        s.effect.value ?? s.effect.note ?? `${s.className ?? ""}技能`.trim(),
      trustStatus: s.trustStatus,
      updatedAt: s.lastVerifiedAt ?? s.indexedAt,
      href: `/${TYPE_PATH.skill}/${s.slug}/`,
    });
  }

  for (const g of guides) {
    results.push({
      id: g.id,
      type: "guide",
      name: g.name,
      slug: g.slug,
      description: g.summary,
      trustStatus: g.trustStatus,
      updatedAt: g.indexedAt,
      href: `/${TYPE_PATH.guide}/${g.slug}/`,
    });
  }

  for (const item of items) {
    results.push({
      id: item.id,
      type: "item",
      name: item.name,
      slug: item.slug,
      description: item.effect.value ?? item.effect.note ?? item.itemType,
      trustStatus: item.trustStatus,
      updatedAt: item.indexedAt,
      href: `/${TYPE_PATH.item}/${item.slug}/`,
    });
  }

  return results;
}

export function search(
  query: string,
  typeFilter?: EntityType | "all",
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const index = buildSearchIndex();
  const allEntities = [...classes, ...skills, ...guides, ...items];

  return index.filter((item) => {
    if (typeFilter && typeFilter !== "all" && item.type !== typeFilter)
      return false;

    const entity = allEntities.find((e) => e.id === item.id);
    const aliases = entity?.aliases ?? [];
    const haystack = [item.name, item.description, ...aliases]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q) || item.name.toLowerCase().includes(q);
  });
}

export { TYPE_LABELS, TYPE_PATH };

export const HOT_SEARCHES = [
  "光之使者",
  "狂戰士",
  "獸王劈",
  "調整藥丸",
  "薯條",
  "調水",
  "回鍋",
];

export const CATEGORY_STATS = [
  {
    label: "職業攻略",
    count: `${classes.length} 職業`,
    href: "/classes",
    icon: "shield",
    ready: true,
  },
  {
    label: "技能資料",
    count: `${skills.length} 筆`,
    href: "/skills",
    icon: "book",
    ready: true,
  },
  {
    label: "裝備道具",
    count: `${items.length} 項`,
    href: "/items",
    icon: "armor",
    ready: true,
  },
  {
    label: "攻略文章",
    count: `${guides.length} 篇`,
    href: "/guides",
    icon: "potion",
    ready: true,
  },
  {
    label: "幻獸圖鑑",
    count: "建設中",
    href: "/pets",
    icon: "pet",
    ready: false,
  },
  {
    label: "地圖怪物",
    count: "建設中",
    href: "/maps",
    icon: "map",
    ready: false,
  },
];

export const QUICK_LINKS = [
  { label: "新手入門", href: "/guides/newbie/" },
  { label: "職業一覽", href: "/guides/class-overview/" },
  { label: "洗點道具", href: "/guides/stat-reset/" },
  { label: "轉生入門", href: "/guides/rebirth/" },
  { label: "基礎工作", href: "/guides/work-basics/" },
  { label: "回鍋指南", href: "/guides/returning-2026/" },
];

export const NAV_ITEMS = [
  { label: "首頁", href: "/", icon: "home", ready: true },
  { label: "職業", href: "/classes", icon: "shield", ready: true },
  { label: "技能", href: "/skills", icon: "book", ready: true },
  { label: "裝備道具", href: "/items", icon: "armor", ready: true },
  { label: "新手回鍋", href: "/guides", icon: "potion", ready: true },
  { label: "版本更新", href: "/updates", icon: "refresh", ready: true },
  { label: "情報回報", href: "/report", icon: "flag", ready: true },
  { label: "工作技能", href: "/jobs", icon: "hammer", ready: true },
  { label: "幻獸", href: "/pets", icon: "pet", ready: false },
  { label: "地圖怪物", href: "/maps", icon: "map", ready: false },
  { label: "任務攻略", href: "/quests", icon: "scroll", ready: false },
  { label: "遊戲工具", href: "/tools", icon: "wrench", ready: false },
];
