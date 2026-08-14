import type { ItemEntity } from "@/lib/types";
import { SOURCES } from "./sources";

const ATTRS = "力量、體質、敏捷、智慧、魅力、幸運";

export const items: ItemEntity[] = [
  {
    id: "item-single-stat-pill",
    slug: "單屬調整藥丸",
    name: "單屬調整藥丸",
    aliases: ["單屬藥丸", "單屬洗點", "洗點藥"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.playerItemTable],
    metaTitle: "單屬調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 單屬調整藥丸效果：降低單一屬性一點並重新配點，受角色等級 2/3 最低限制。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "-1",
      note: "資料表數值欄為 -1，表示扣除一點屬性後可重新配點。",
    },
    usageLimit: {
      status: "uncertain",
      value:
        "當目標屬性低於角色等級的 2/3 時無法使用。資料表標註為「2/3屬性最低限制-1」。",
      note: "整理自玩家提供之遊戲資料表，建議遊戲內再確認一次計算方式（是否無條件捨去等）。",
    },
    effect: {
      status: "uncertain",
      value:
        "降屬性一點，讓玩家可重新配點；但是當屬性低於角色等級的 2/3，就不能使用。",
    },
    relatedItemIds: ["item-all-stat-pill", "item-random-stat-pill"],
  },
  {
    id: "item-all-stat-pill",
    slug: "屬性調整藥丸",
    name: "屬性調整藥丸",
    aliases: ["全屬調整藥丸", "六屬藥丸", "全屬洗點"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.playerItemTable],
    metaTitle: "屬性調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 屬性調整藥丸效果：六大屬性各扣一點後重新配點，受角色等級 1/2 最低限制。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "-1",
      note: "資料表數值欄為 -1；效果為六大屬性各扣一點。",
    },
    usageLimit: {
      status: "uncertain",
      value:
        "當任一項屬性值低於角色等級的 1/2 時無法使用。資料表標註為「1/2 屬性最低限制-1」。",
      note: "整理自玩家提供之遊戲資料表，建議遊戲內再確認一次。",
    },
    effect: {
      status: "uncertain",
      value: `各自從${ATTRS}等屬性中扣除一點，讓玩家可以重新配點。但當某項屬性值低於等級的 1/2 時，就無法使用。`,
    },
    relatedItemIds: ["item-single-stat-pill", "item-random-stat-pill"],
  },
  {
    id: "item-random-stat-pill",
    slug: "調整藥丸",
    name: "調整藥丸",
    aliases: ["隨機調整藥丸", "隨機洗點", "隨機屬性藥丸"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.playerItemTable],
    metaTitle: "調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 調整藥丸效果：隨機扣除一項六大屬性一點後自由加點，低於等級 1/2 的屬性不會被抽中。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "-1",
      note: "資料表數值欄為 -1；實際為隨機一項屬性扣除一點。",
    },
    usageLimit: {
      status: "uncertain",
      value:
        "屬性值低於角色等級 1/2 時，該屬性不會被選為扣除對象；若六項皆無法扣除，則無法使用。資料表標註為「1/2 屬性最低限制-1」。",
      note: "整理自玩家提供之遊戲資料表，建議遊戲內再確認一次。",
    },
    effect: {
      status: "uncertain",
      value: `隨機在${ATTRS}等屬性中選擇某個屬性扣除一點，讓玩家可以自由選擇加到六大屬性之一。但當某項屬性值低於等級的 1/2 時，則該屬性不會被選擇扣除；如全部的屬性都無法扣除，則無法使用。`,
    },
    relatedItemIds: ["item-single-stat-pill", "item-all-stat-pill"],
  },
];

export function getItemBySlug(slug: string) {
  return items.find((i) => i.slug === slug);
}

export function getItemById(id: string) {
  return items.find((i) => i.id === id);
}
