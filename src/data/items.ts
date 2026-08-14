import type { ItemEntity } from "@/lib/types";
import { SOURCES } from "./sources";

const ATTRS = "力量、體質、敏捷、智慧、魅力、幸運";

const STATS = [
  { key: "str", name: "力量" },
  { key: "con", name: "體質" },
  { key: "agi", name: "敏捷" },
  { key: "int", name: "智慧" },
  { key: "cha", name: "魅力" },
  { key: "luk", name: "幸運" },
] as const;

type StatKey = (typeof STATS)[number]["key"];

function others(name: string) {
  return STATS.filter((s) => s.name !== name)
    .map((s) => s.name)
    .join("、");
}

function statIds(kind: "pill" | "vial" | "potion" | "prank") {
  return STATS.map((s) => `item-${s.key}-${kind}`);
}

const NOTE_OLD =
  "整理自舊官方指南與巴哈姆特百科，王國復甦是否完全相同尚待遊戲內確認。";
const NOTE_LV10 =
  "舊官方說明與巴哈百科另有「角色等級低於 10 級不能使用」。玩家提供資料表未列出此限制，現版本是否仍適用尚待確認。";
const NOTE_FLOOR =
  "玩家討論：屬調需六屬皆達等級 1/2 才可用；轉生後常見在 10～11 等開始洗點。調水／調劑使用時該屬性不可低於 10，調水一次 -5，故可洗到 5。";

const HUB_RELATED = [
  "item-single-stat-pill",
  "item-all-stat-pill",
  "item-random-stat-pill",
  "item-all-prank-pill",
  "item-random-prank-pill",
  "item-str-pill",
  "item-str-vial",
  "item-str-potion",
];

function namedAdjustPill(key: StatKey, name: string): ItemEntity {
  return {
    id: `item-${key}-pill`,
    slug: `${name}調整藥丸`,
    name: `${name}調整藥丸`,
    aliases: [`${name}藥丸`, `單屬${name}`],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.officialScrolls, SOURCES.bahamutSpecialItems],
    metaTitle: `${name}調整藥丸｜道具資料－童協會`,
    metaDescription: `童話 Online ${name}調整藥丸：降低${name}一點後重新配點，受等級 2/3 與 10 級限制。`,
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: { status: "uncertain", value: "-1" },
    usageLimit: {
      status: "uncertain",
      value: `當${name}低於角色等級的 2/3，或角色等級低於 10 級時，就不能使用。`,
      note: NOTE_OLD,
    },
    effect: {
      status: "uncertain",
      value: `降${name}屬性一點，讓玩家可重新配點；但是當${name}低於角色等級的 2/3、或角色等級低於 10 級的時候，就不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "開寶箱、任務、遊樂場抓鬼、活動",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      "item-single-stat-pill",
      `item-${key}-vial`,
      `item-${key}-potion`,
      `item-${key}-prank`,
      "item-all-stat-pill",
    ],
  };
}

function namedVial(key: StatKey, name: string): ItemEntity {
  return {
    id: `item-${key}-vial`,
    slug: `${name}調整藥劑`,
    name: `${name}調整藥劑`,
    aliases: [`${name}藥劑`, "調劑"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.bahamutSpecialItems, SOURCES.bahamutRebirthPts],
    metaTitle: `${name}調整藥劑｜道具資料－童協會`,
    metaDescription: `童話 Online ${name}調整藥劑：降低${name}三點後重新配點，該屬性低於 10 則無法使用。`,
    itemType: "消耗品",
    category: "調整藥劑",
    changeValue: {
      status: "uncertain",
      value: "-3",
      note: "巴哈百科：降指定屬性三點。玩家俗稱「調劑」。",
    },
    usageLimit: {
      status: "uncertain",
      value: `當${name}低於 10 時就不能使用。`,
      note: `${NOTE_OLD} ${NOTE_FLOOR}`,
    },
    effect: {
      status: "uncertain",
      value: `降${name}屬性三點，讓玩家可重新配點；但是當${name}低於 10 時就不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "驚喜寶箱",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      `item-${key}-pill`,
      `item-${key}-potion`,
      "item-all-stat-pill",
    ],
  };
}

function namedPotion(key: StatKey, name: string): ItemEntity {
  return {
    id: `item-${key}-potion`,
    slug: `${name}調整藥水`,
    name: `${name}調整藥水`,
    aliases: [`${name}藥水`, "調水"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.bahamutSpecialItems, SOURCES.bahamutRebirthPts],
    metaTitle: `${name}調整藥水｜道具資料－童協會`,
    metaDescription: `童話 Online ${name}調整藥水：降低${name}五點後重新配點，該屬性低於 10 則無法使用。`,
    itemType: "消耗品",
    category: "調整藥水",
    changeValue: {
      status: "uncertain",
      value: "-5",
      note: "巴哈百科：降指定屬性五點。玩家俗稱「調水」，流通量通常比調劑多。",
    },
    usageLimit: {
      status: "uncertain",
      value: `當${name}低於 10 時就不能使用。若使用時剛好為 10，一次 -5 可洗到 5。`,
      note: `${NOTE_OLD} ${NOTE_FLOOR}`,
    },
    effect: {
      status: "uncertain",
      value: `降${name}屬性五點，讓玩家可重新配點；但是當${name}低於 10 時就不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "活動、童話商城-十一周年禮盒",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      `item-${key}-pill`,
      `item-${key}-vial`,
      "item-all-stat-pill",
    ],
  };
}

function namedPrank(key: StatKey, name: string): ItemEntity {
  return {
    id: `item-${key}-prank`,
    slug: `${name}搗蛋藥丸`,
    name: `${name}搗蛋藥丸`,
    aliases: [`${name}搗蛋`],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.officialScrolls, SOURCES.bahamutSpecialItems],
    metaTitle: `${name}搗蛋藥丸｜道具資料－童協會`,
    metaDescription: `童話 Online ${name}搗蛋藥丸：從其他屬性隨機扣一點加到${name}，無法自由配點。`,
    itemType: "消耗品",
    category: "搗蛋藥丸",
    changeValue: {
      status: "uncertain",
      value: "其他屬性 -1 → 指定屬性 +1",
      note: "不是自由配點，點數會自動加到指定屬性。",
    },
    usageLimit: {
      status: "uncertain",
      value: `扣除來源若低於等級 1/2 則不會被抽中；若除${name}以外皆無法扣除則無法使用。當${name}高於（角色等級×3＋轉生次數×12）或角色等級低於 10 級時也不能使用。`,
      note: NOTE_OLD,
    },
    effect: {
      status: "uncertain",
      value: `隨機在${others(name)}等屬性中選一屬性扣除一點，再增加到${name}上。但當某屬性值低於等級的 1/2，則該屬性不會被選擇扣除；如除${name}以外的屬性皆無法扣除，則無法使用。另外當${name}值高於（角色等級×3＋轉生次數×12）時或角色等級低於 10 級時也不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value:
        name === "力量"
          ? "開寶箱、任務、遊樂場抓鬼"
          : "開寶箱、遊樂場抓鬼",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      "item-random-prank-pill",
      "item-all-prank-pill",
      `item-${key}-pill`,
    ],
  };
}

const hubs: ItemEntity[] = [
  {
    id: "item-single-stat-pill",
    slug: "單屬調整藥丸",
    name: "單屬調整藥丸",
    aliases: ["單屬藥丸", "單屬洗點", "洗點藥"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [
      SOURCES.playerItemTable,
      SOURCES.officialScrolls,
      SOURCES.bahamutSpecialItems,
    ],
    metaTitle: "單屬調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 單屬調整藥丸：降低單一屬性一點並重新配點，受角色等級 2/3 最低限制。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "-1",
      note: "玩家資料表數值欄為 -1。舊資料另有六種具名單屬藥丸（力量調整藥丸等），機制相同。",
    },
    usageLimit: {
      status: "conflict",
      value: "當目標屬性低於角色等級的 2/3 時無法使用。",
      note: `玩家資料表標註「2/3屬性最低限制-1」。舊官方具名藥丸另有 10 級限制。${NOTE_LV10}`,
    },
    effect: {
      status: "uncertain",
      value:
        "降屬性一點，讓玩家可重新配點；但是當屬性低於角色等級的 2/3，就不能使用。",
    },
    obtainMethod: {
      status: "unavailable",
      note: "單屬調整藥丸本身的取得方式目前無資料。具名單屬藥丸（如力量調整藥丸）舊資料為開寶箱、任務、遊樂場抓鬼、活動。",
    },
    relatedItemIds: [...statIds("pill"), "item-all-stat-pill", "item-random-stat-pill"],
  },
  {
    id: "item-all-stat-pill",
    slug: "屬性調整藥丸",
    name: "屬性調整藥丸",
    aliases: ["全屬調整藥丸", "六屬藥丸", "全屬洗點", "薯條", "屬調"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [
      SOURCES.playerItemTable,
      SOURCES.officialScrolls,
      SOURCES.bahamutSpecialItems,
      SOURCES.bahamutRebirthPts,
    ],
    metaTitle: "屬性調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 屬性調整藥丸（薯條／屬調）：六大屬性各扣一點後重新配點。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "六屬各 -1",
      note: "玩家資料表數值欄為 -1；效果為六大屬性各扣一點，轉為可自由配點。",
    },
    usageLimit: {
      status: "conflict",
      value:
        "當任一項屬性值低於角色等級的 1/2 時無法使用。舊官方與巴哈百科另寫：角色等級低於 10 級也不能使用。",
      note: `玩家資料表未列出 10 級限制。${NOTE_LV10} ${NOTE_FLOOR}`,
    },
    effect: {
      status: "uncertain",
      value: `各自從${ATTRS}等屬性中扣除一點，讓玩家可以重新配點。但當某項屬性值低於等級的 1/2 時，就無法使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "開寶箱、幻獸／BOSS 掉落、遊樂場抓鬼、活動、童話商城-十一周年禮盒",
      note: NOTE_OLD,
    },
    relatedItemIds: HUB_RELATED.filter((id) => id !== "item-all-stat-pill"),
  },
  {
    id: "item-random-stat-pill",
    slug: "調整藥丸",
    name: "調整藥丸",
    aliases: ["隨機調整藥丸", "隨機洗點", "隨機屬性藥丸"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [
      SOURCES.playerItemTable,
      SOURCES.officialScrolls,
      SOURCES.bahamutSpecialItems,
    ],
    metaTitle: "調整藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 調整藥丸：隨機扣除一項六大屬性一點後自由加點。",
    itemType: "消耗品",
    category: "調整藥丸",
    changeValue: {
      status: "uncertain",
      value: "隨機一屬 -1",
      note: "扣除後可自由加到六大屬性之一，與搗蛋藥丸不同。",
    },
    usageLimit: {
      status: "conflict",
      value:
        "屬性值低於角色等級 1/2 時，該屬性不會被選為扣除對象；若六項皆無法扣除，則無法使用。舊官方另寫：角色等級低於 10 級也不能使用。",
      note: NOTE_LV10,
    },
    effect: {
      status: "uncertain",
      value: `隨機在${ATTRS}等屬性中選擇某個屬性扣除一點，讓玩家可以自由選擇加到六大屬性之一。但當某項屬性值低於等級的 1/2 時，則該屬性不會被選擇扣除；如全部的屬性都無法扣除，則無法使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "開寶箱",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      "item-all-stat-pill",
      "item-single-stat-pill",
      "item-random-prank-pill",
    ],
  },
  {
    id: "item-all-prank-pill",
    slug: "屬性搗蛋藥丸",
    name: "屬性搗蛋藥丸",
    aliases: ["全屬搗蛋", "屬搗"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.officialScrolls, SOURCES.bahamutSpecialItems],
    metaTitle: "屬性搗蛋藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 屬性搗蛋藥丸：六大屬性各扣一點後自動隨機配點，無法自選。",
    itemType: "消耗品",
    category: "搗蛋藥丸",
    changeValue: {
      status: "uncertain",
      value: "六屬各 -1，再自動隨機配點",
    },
    usageLimit: {
      status: "uncertain",
      value: "任一屬性低於等級 1/2，或角色等級低於 10 級時就不能使用。",
      note: NOTE_OLD,
    },
    effect: {
      status: "uncertain",
      value: `在${ATTRS}等屬性中各扣除一點，再自動隨機配點。但任一屬性數值低於等級的 1/2，或角色等級低於 10 級時不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "開寶箱、遊樂場抓鬼",
      note: NOTE_OLD,
    },
    relatedItemIds: [
      "item-random-prank-pill",
      "item-all-stat-pill",
      ...statIds("prank"),
    ],
  },
  {
    id: "item-random-prank-pill",
    slug: "搗蛋藥丸",
    name: "搗蛋藥丸",
    aliases: ["隨機搗蛋"],
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.officialScrolls, SOURCES.bahamutSpecialItems],
    metaTitle: "搗蛋藥丸｜道具資料－童協會",
    metaDescription:
      "童話 Online 搗蛋藥丸：隨機扣一點再隨機加到另一屬性，無法自由配點。",
    itemType: "消耗品",
    category: "搗蛋藥丸",
    changeValue: {
      status: "uncertain",
      value: "隨機一屬 -1 → 隨機一屬 +1",
    },
    usageLimit: {
      status: "uncertain",
      value:
        "低於等級 1/2 的屬性不會被扣除；高於（角色等級×3＋已轉生次數×12）的屬性不會被增加。全部無法扣除或全部無法增加則無法使用。角色等級低於 10 級也不能使用。",
      note: NOTE_OLD,
    },
    effect: {
      status: "uncertain",
      value: `隨機在${ATTRS}等六大屬性中選一屬性扣除一點，再隨機增加到其他任一屬性上。低於等級 1/2 者不被扣除；高於（角色等級×3＋已轉生次數×12）者不被增加。角色等級低於 10 級不能使用。`,
    },
    obtainMethod: {
      status: "uncertain",
      value: "開寶箱、遊樂場抓鬼",
      note: NOTE_OLD,
    },
    relatedItemIds: ["item-all-prank-pill", "item-random-stat-pill", ...statIds("prank")],
  },
];

export const items: ItemEntity[] = [
  ...hubs,
  ...STATS.map((s) => namedAdjustPill(s.key, s.name)),
  ...STATS.map((s) => namedVial(s.key, s.name)),
  ...STATS.map((s) => namedPotion(s.key, s.name)),
  ...STATS.map((s) => namedPrank(s.key, s.name)),
];

export const ITEM_CATEGORY_ORDER = [
  "調整藥丸",
  "調整藥劑",
  "調整藥水",
  "搗蛋藥丸",
];

export function getItemBySlug(slug: string) {
  return items.find((i) => i.slug === slug);
}

export function getItemById(id: string) {
  return items.find((i) => i.id === id);
}

export function getItemsByCategory() {
  const groups = ITEM_CATEGORY_ORDER.map((category) => ({
    category,
    items: items.filter((i) => i.category === category),
  }));
  const rest = items.filter(
    (i) => !i.category || !ITEM_CATEGORY_ORDER.includes(i.category),
  );
  if (rest.length) groups.push({ category: "其他", items: rest });
  return groups;
}
