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
      href: `/${TYPE_PATH.class}/${c.slug}`,
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
      href: `/${TYPE_PATH.skill}/${s.slug}`,
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
      href: `/${TYPE_PATH.guide}/${g.slug}`,
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
      href: `/${TYPE_PATH.item}/${item.slug}`,
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
  "力量寵",
  "迷裝",
  "挖礦",
];

export const CATEGORY_STATS = [
  { label: "職業攻略", count: "8 職業", href: "/classes", icon: "shield" },
  { label: "技能資料", count: "512 筆", href: "/skills", icon: "book" },
  { label: "幻獸圖鑑", count: "327 種", href: "/pets", icon: "pet" },
  { label: "裝備道具", count: "1280 項", href: "/items", icon: "armor" },
  { label: "工作技能", count: "23 種", href: "/jobs", icon: "hammer" },
  { label: "地圖怪物", count: "85 張", href: "/maps", icon: "map" },
];

export const QUICK_LINKS = [
  { label: "新手入門", href: "/guides/2026回鍋玩家完整指南" },
  { label: "練功地點", href: "/maps" },
  { label: "幻獸推薦", href: "/pets" },
  { label: "賺取可因", href: "/guides" },
  { label: "裝備製作", href: "/jobs" },
  { label: "迷宮攻略", href: "/guides" },
];

export const NAV_ITEMS = [
  { label: "首頁", href: "/", icon: "home" },
  { label: "職業", href: "/classes", icon: "shield" },
  { label: "技能", href: "/skills", icon: "book" },
  { label: "幻獸", href: "/pets", icon: "pet" },
  { label: "裝備道具", href: "/items", icon: "armor" },
  { label: "工作技能", href: "/jobs", icon: "hammer" },
  { label: "地圖怪物", href: "/maps", icon: "map" },
  { label: "任務攻略", href: "/quests", icon: "scroll" },
  { label: "新手回鍋", href: "/guides", icon: "potion" },
  { label: "遊戲工具", href: "/tools", icon: "wrench" },
  { label: "版本更新", href: "/updates", icon: "refresh" },
  { label: "情報回報", href: "/report", icon: "flag" },
];
