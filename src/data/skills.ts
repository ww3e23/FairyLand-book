import type { SkillEntity } from "@/lib/types";
import { SOURCES } from "./sources";

export const skills: SkillEntity[] = [
  {
    id: "skill-beast-king-slash",
    slug: "兽王劈",
    name: "兽王劈",
    aliases: ["兽劈", "兽王"],
    classId: "class-berserker",
    className: "狂战士",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    lastVerifiedAt: "2026-08-11",
    sources: [SOURCES.bahamutForum, SOURCES.baojia, SOURCES.bahamutWiki],
    metaTitle: "兽王劈｜狂战士技能资料－童協會",
    metaDescription:
      "童话 Online 狂战士兽王劈技能资料、学习条件、技能效果、相关攻略与版本资讯。",
    skillType: {
      status: "uncertain",
      value: "主动技能（物理攻击）",
      note: "技能类型整理自巴哈姆特精华区与攻略讨论，正式分类名称以游戏内为准。",
      references: [
        {
          title: "斧战士【狂战士】技能介绍－巴哈姆特精华区",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
      ],
    },
    learnLevel: {
      status: "uncertain",
      note: "学习等级需对照游戏内技能树确认。可参考巴哈姆特精华区狂战士技能介绍，但王国复苏版本可能有差异。",
      references: [
        {
          title: "斧战士【狂战士】技能介绍",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
        SOURCES.baojia,
      ],
    },
    learnConditions: {
      status: "uncertain",
      note: "兽王劈有技能任务流程。败家一族资料曾被玩家指出有误，巴哈姆特精华区有更正文章，建议对照以下连结自行确认。",
      references: [
        {
          title: "斧战的兽王劈 -- 技能任务流程（败家资料错的所以贴上来更正）",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
        SOURCES.baojia,
      ],
    },
    effect: {
      status: "uncertain",
      note: "技能效果与伤害公式尚未有王国复苏版的可靠实测来源。请勿直接引用旧版数值。若你有最新实测，欢迎回报。",
      references: [SOURCES.bahamutForum],
    },
    mpCost: {
      status: "unavailable",
      note: "目前无资料，待好心人士提供王国复苏版实测。",
    },
    attackRange: {
      status: "unavailable",
      note: "目前无资料，待好心人士提供。",
    },
    targetType: {
      status: "unavailable",
      note: "目前无资料，待好心人士提供。",
    },
    relatedGuideIds: ["guide-berserker-build"],
  },
];

export function getSkillBySlug(slug: string) {
  return skills.find((s) => s.slug === slug);
}

export function getSkillById(id: string) {
  return skills.find((s) => s.id === id);
}
