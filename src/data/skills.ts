import type { SkillEntity } from "@/lib/types";
import { SOURCES } from "./sources";

export const skills: SkillEntity[] = [
  {
    id: "skill-beast-king-slash",
    slug: "獸王劈",
    name: "獸王劈",
    aliases: ["獸劈", "獸王"],
    classId: "class-berserker",
    className: "狂戰士",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    lastVerifiedAt: "2026-08-11",
    sources: [SOURCES.bahamutForum, SOURCES.baojia, SOURCES.bahamutWiki],
    metaTitle: "獸王劈｜狂戰士技能資料－童協會",
    metaDescription:
      "童話 Online 狂戰士獸王劈技能資料、學習條件、技能效果、相關攻略與版本資訊。",
    skillType: {
      status: "uncertain",
      value: "主動技能（物理攻擊）",
      note: "技能類型整理自巴哈姆特精華區與攻略討論，正式分類名稱以遊戲內為準。",
      references: [
        {
          title: "斧戰士【狂戰士】技能介紹－巴哈姆特精華區",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
      ],
    },
    learnLevel: {
      status: "uncertain",
      note: "學習等級需對照遊戲內技能樹確認。可參考巴哈姆特精華區狂戰士技能介紹，但王國復甦版本可能有差異。",
      references: [
        {
          title: "斧戰士【狂戰士】技能介紹",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
        SOURCES.baojia,
      ],
    },
    learnConditions: {
      status: "uncertain",
      note: "獸王劈有技能任務流程。敗家一族資料曾被玩家指出有誤，巴哈姆特精華區有更正文章，建議對照以下連結自行確認。",
      references: [
        {
          title: "斧戰的獸王劈 -- 技能任務流程（敗家資料錯的所以貼上來更正）",
          url: "https://forum.gamer.com.tw/listG.php?bsn=4211",
          reliability: 3,
        },
        SOURCES.baojia,
      ],
    },
    effect: {
      status: "uncertain",
      note: "技能效果與傷害公式尚未有王國復甦版的可靠實測來源。請勿直接引用舊版數值。若你有最新實測，歡迎回報。",
      references: [SOURCES.bahamutForum],
    },
    mpCost: {
      status: "unavailable",
      note: "目前無資料，待好心人士提供王國復甦版實測。",
    },
    attackRange: {
      status: "unavailable",
      note: "目前無資料，待好心人士提供。",
    },
    targetType: {
      status: "unavailable",
      note: "目前無資料，待好心人士提供。",
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
