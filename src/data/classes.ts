import type { ClassEntity } from "@/lib/types";
import { SOURCES } from "./sources";

export const classes: ClassEntity[] = [
  {
    id: "class-berserker",
    slug: "狂戰士",
    name: "狂戰士",
    aliases: ["斧戰", "狂戰", "斧戰士二轉"],
    branch: "warrior",
    tier: 2,
    parentClassId: "class-axe-warrior",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.baojia, SOURCES.bahamutForum],
    metaTitle: "狂戰士｜職業攻略－童協會",
    metaDescription:
      "童話 Online 狂戰士職業介紹、技能、配點方向、相關攻略與版本資訊。",
    description: {
      status: "uncertain",
      value:
        "戰士系進階職業（二轉），由斧戰士轉職而來，以斧類武器與物理輸出見長。",
      note: "職業特色描述整理自巴哈姆特攻略百科與精華區，王國復甦版本是否調整尚待進一步確認。",
      references: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    },
    attributeGuide: {
      status: "uncertain",
      value: "常見配點方向以力量、敏捷、體質為主。",
      note: "配點建議來自舊版攻略整理，現版本是否仍為最優解尚待玩家確認。",
      references: [SOURCES.bahamutWiki],
    },
    equipmentGuide: {
      status: "unavailable",
      note: "目前尚無經確認的王國復甦版裝備方向整理。若你有最新心得，歡迎透過頁面下方回報提供。",
      references: [SOURCES.bahamutForum],
    },
    petGuide: {
      status: "uncertain",
      note: "物理系常見討論為金力、光力等方向，詳見相關攻略與幻獸頁面。",
      references: [SOURCES.bahamutForum],
    },
    relatedSkillIds: ["skill-beast-king-slash"],
    relatedGuideIds: ["guide-berserker-build"],
  },
  {
    id: "class-light-messenger",
    slug: "光之使者",
    name: "光之使者",
    aliases: ["光使", "光法"],
    branch: "cleric",
    tier: 1,
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    metaTitle: "光之使者｜職業攻略－童協會",
    metaDescription:
      "童話 Online 光之使者職業介紹、技能與學習條件、相關攻略。",
    description: {
      status: "uncertain",
      value: "修士系正式職業，光屬性法術方向。",
      note: "資料整理自巴哈姆特攻略百科，王國復甦版本細節尚待確認。",
      references: [SOURCES.bahamutWiki],
    },
    attributeGuide: {
      status: "uncertain",
      value: "常見配點以敏捷、智慧為主，輔以體質。",
      references: [SOURCES.bahamutWiki],
    },
  },
  {
    id: "class-merchant",
    slug: "商人",
    name: "商人",
    aliases: ["商"],
    branch: "traveler",
    tier: 1,
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    metaTitle: "商人｜職業攻略－童協會",
    metaDescription: "童話 Online 商人職業介紹、技能與賺錢相關攻略。",
    description: {
      status: "uncertain",
      value: "旅人系正式職業，擅長交易與輔助類技能。",
      references: [SOURCES.bahamutWiki],
    },
  },
  {
    id: "class-beast-tamer",
    slug: "幻獸師",
    name: "幻獸師",
    aliases: ["獸師"],
    branch: "traveler",
    tier: 1,
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.official],
    metaTitle: "幻獸師｜職業攻略－童協會",
    metaDescription: "童話 Online 幻獸師職業介紹、幻獸培養相關攻略。",
    description: {
      status: "uncertain",
      value: "旅人系正式職業，與幻獸系統深度相關。",
      references: [SOURCES.bahamutWiki, SOURCES.official],
    },
  },
  {
    id: "class-beast-lord",
    slug: "魔獸使",
    name: "魔獸使",
    aliases: ["獸王"],
    branch: "traveler",
    tier: 2,
    parentClassId: "class-beast-tamer",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki],
    metaTitle: "魔獸使｜職業攻略－童協會",
    metaDescription: "童話 Online 魔獸使二轉職業介紹與相關攻略。",
    description: {
      status: "uncertain",
      value: "幻獸師二轉進階職業。",
      note: "二轉技能與培養方向資料尚待補充確認。",
      references: [SOURCES.bahamutWiki],
    },
  },
];

export function getClassBySlug(slug: string) {
  return classes.find((c) => c.slug === slug);
}

export function getClassById(id: string) {
  return classes.find((c) => c.id === id);
}
