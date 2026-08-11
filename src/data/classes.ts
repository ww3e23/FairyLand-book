import type { ClassEntity } from "@/lib/types";
import { SOURCES } from "./sources";

export const classes: ClassEntity[] = [
  {
    id: "class-berserker",
    slug: "狂战士",
    name: "狂战士",
    aliases: ["斧战", "狂战", "斧战士二转"],
    branch: "warrior",
    tier: 2,
    parentClassId: "class-axe-warrior",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.baojia, SOURCES.bahamutForum],
    metaTitle: "狂战士｜职业攻略－童協會",
    metaDescription:
      "童话 Online 狂战士职业介绍、技能、配点方向、相关攻略与版本资讯。",
    description: {
      status: "uncertain",
      value:
        "战士系进阶职业（二转），由斧战士转职而来，以斧类武器与物理输出见长。",
      note: "职业特色描述整理自巴哈姆特攻略百科与精华区，王国复苏版本是否调整尚待进一步确认。",
      references: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    },
    attributeGuide: {
      status: "uncertain",
      value: "常见配点方向以力量、敏捷、体质为主。",
      note: "配点建议来自旧版攻略整理，现版本是否仍为最优解尚待玩家确认。",
      references: [SOURCES.bahamutWiki],
    },
    equipmentGuide: {
      status: "unavailable",
      note: "目前尚无经确认的王国复苏版装备方向整理。若你有最新心得，欢迎透过页面下方回报提供。",
      references: [SOURCES.bahamutForum],
    },
    petGuide: {
      status: "uncertain",
      note: "物理系常见讨论为金力、光力等方向，详见相关攻略与幻兽页面。",
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
    metaTitle: "光之使者｜职业攻略－童協會",
    metaDescription:
      "童话 Online 光之使者职业介绍、技能与学习条件、相关攻略。",
    description: {
      status: "uncertain",
      value: "修士系正式职业，光属性法术方向。",
      note: "资料整理自巴哈姆特攻略百科，王国复苏版本细节尚待确认。",
      references: [SOURCES.bahamutWiki],
    },
    attributeGuide: {
      status: "uncertain",
      value: "常见配点以敏捷、智慧为主，辅以体质。",
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
    metaTitle: "商人｜职业攻略－童協會",
    metaDescription: "童话 Online 商人职业介绍、技能与赚钱相关攻略。",
    description: {
      status: "uncertain",
      value: "旅人系正式职业，擅长交易与辅助类技能。",
      references: [SOURCES.bahamutWiki],
    },
  },
  {
    id: "class-beast-tamer",
    slug: "幻兽师",
    name: "幻兽师",
    aliases: ["兽师"],
    branch: "traveler",
    tier: 1,
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki, SOURCES.official],
    metaTitle: "幻兽师｜职业攻略－童協會",
    metaDescription: "童话 Online 幻兽师职业介绍、幻兽培养相关攻略。",
    description: {
      status: "uncertain",
      value: "旅人系正式职业，与幻兽系统深度相关。",
      references: [SOURCES.bahamutWiki, SOURCES.official],
    },
  },
  {
    id: "class-beast-lord",
    slug: "魔兽使",
    name: "魔兽使",
    aliases: ["兽王"],
    branch: "traveler",
    tier: 2,
    parentClassId: "class-beast-tamer",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutWiki],
    metaTitle: "魔兽使｜职业攻略－童協會",
    metaDescription: "童话 Online 魔兽使二转职业介绍与相关攻略。",
    description: {
      status: "uncertain",
      value: "幻兽师二转进阶职业。",
      note: "二转技能与培养方向资料尚待补充确认。",
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
