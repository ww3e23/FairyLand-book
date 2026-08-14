import type { ClassEntity } from "@/lib/types";
import { SOURCES } from "./sources";

const SRC = [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide];
const NOTE =
  "整理自舊官方遊戲指南與巴哈姆特職業分析。王國復甦細節（技能數值、裝備限制）請以遊戲內為準。";

function cls(
  partial: Omit<ClassEntity, "trustStatus" | "applicableVersion" | "indexedAt" | "sources"> &
    Partial<Pick<ClassEntity, "trustStatus" | "sources">>,
): ClassEntity {
  return {
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: SRC,
    ...partial,
  };
}

export const classes: ClassEntity[] = [
  cls({
    id: "class-apprentice-soldier",
    slug: "apprentice-soldier",
    name: "見習士兵",
    aliases: ["見習戰士", "士兵"],
    branch: "warrior",
    tier: 0,
    metaTitle: "見習士兵｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "戰士公會見習職業。10 級後可在金銀城戰士公會轉職為劍戰士、刀戰士或斧戰士。技能：衝擊、盾技。不能使用衣袍、帽子、杖。",
      note: NOTE,
    },
  }),
  cls({
    id: "class-apprentice-traveler",
    slug: "apprentice-traveler",
    name: "見習旅人",
    aliases: ["見習旅行者"],
    branch: "traveler",
    tier: 0,
    metaTitle: "見習旅人｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "旅人公會見習職業。10 級後可在彩虹城旅人公會轉職為武鬥家、幻獸師或商人。技能：迅捷、閃躲。不能使用鎧甲、盾牌。",
      note: NOTE,
    },
  }),
  cls({
    id: "class-apprentice-cleric",
    slug: "apprentice-cleric",
    name: "見習修士",
    aliases: ["見習僧侶"],
    branch: "cleric",
    tier: 0,
    metaTitle: "見習修士｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "修士公會見習職業。10 級後可在青鳥城修士公會轉職為僧侶、法師、光之信徒或闇之信徒。技能：魔杖、祈禱、魔刃術、巨木之擊。不能使用鎧甲、皮甲、頭盔、盾牌、刀、劍、斧。",
      note: NOTE,
    },
  }),
  cls({
    id: "class-sword",
    slug: "sword-warrior",
    name: "劍戰士",
    aliases: ["劍戰"],
    branch: "warrior",
    tier: 1,
    parentClassId: "class-apprentice-soldier",
    metaTitle: "劍戰士｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "擅長用劍的戰士，擁有增加攻擊威力的劍類招式。於金銀城戰士公會加入。基礎技能：衝擊、連擊、盾技、劍技。二轉為大劍師。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "戰士系常見以敏捷、力量、體質為主。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-blade",
    slug: "blade-warrior",
    name: "刀戰士",
    aliases: ["刀戰"],
    branch: "warrior",
    tier: 1,
    parentClassId: "class-apprentice-soldier",
    metaTitle: "刀戰士｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "擅長用刀，可同時攻擊同一排敵人。於金銀城戰士公會加入。基礎技能：衝擊、連擊、盾技、刀技。二轉為刀狂。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "戰士系常見以敏捷、力量、體質為主。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-axe",
    slug: "axe-warrior",
    name: "斧戰士",
    aliases: ["斧戰"],
    branch: "warrior",
    tier: 1,
    parentClassId: "class-apprentice-soldier",
    metaTitle: "斧戰士｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "擅長用斧，擁有破壞敵人護甲的斧類招式。於金銀城戰士公會加入。基礎技能：衝擊、連擊、盾技、斧技。二轉為狂戰士。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "戰士系常見以敏捷、力量、體質為主。",
      note: NOTE,
    },
    relatedSkillIds: ["skill-beast-king-slash"],
    relatedGuideIds: ["guide-berserker-build", "guide-class-overview"],
  }),
  cls({
    id: "class-grand-sword",
    slug: "grand-swordsman",
    name: "大劍師",
    aliases: ["大劍"],
    branch: "warrior",
    tier: 2,
    parentClassId: "class-sword",
    metaTitle: "大劍師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "劍戰士二轉。保持劍戰士特色，定位為單一目標物理攻擊最強的角色。需 60 級以上至戰士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-blade-fury",
    slug: "blade-fury",
    name: "刀狂",
    aliases: ["刀狂戰士"],
    branch: "warrior",
    tier: 2,
    parentClassId: "class-blade",
    metaTitle: "刀狂｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "刀戰士二轉。大範圍物理攻擊更強化，續戰力相對下降，一對多效率提升。需 60 級以上至戰士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-berserker",
    slug: "berserker",
    name: "狂戰士",
    aliases: ["斧戰二轉", "狂戰", "斧戰士二轉"],
    branch: "warrior",
    tier: 2,
    parentClassId: "class-axe",
    metaTitle: "狂戰士｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "斧戰士二轉。加強斧系技能的命中與威力，部分技能特殊效果可達百分之百成功率。需 60 級以上至戰士公會轉職。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "常見配點方向以力量、敏捷、體質為主。",
      note: "舊版整理，現版本是否仍為最優解尚待玩家確認。",
    },
    equipmentGuide: {
      status: "unavailable",
      note: "目前尚無經確認的王國復甦版裝備方向整理。",
    },
    petGuide: {
      status: "uncertain",
      note: "物理系常見討論為金力、光力等方向，幻獸圖鑑尚在建設。",
    },
    relatedSkillIds: ["skill-beast-king-slash"],
    relatedGuideIds: ["guide-berserker-build", "guide-class-overview"],
  }),
  cls({
    id: "class-fighter",
    slug: "martial-artist",
    name: "武鬥家",
    aliases: ["武鬥", "拳師"],
    branch: "traveler",
    tier: 1,
    parentClassId: "class-apprentice-traveler",
    metaTitle: "武鬥家｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "放棄武器與厚重防具，以拳對敵、速度飛快。於彩虹城旅人公會加入。基礎技能：迅捷、閃躲、拳技、氣功、鬥志。不能使用鎧甲、盾牌、書、刀、劍、斧。二轉為格鬥師。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-beast-tamer",
    slug: "beast-tamer",
    name: "幻獸師",
    aliases: ["獸師"],
    branch: "traveler",
    tier: 1,
    parentClassId: "class-apprentice-traveler",
    metaTitle: "幻獸師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "以收集與培養幻獸為核心，與寵物並肩作戰。於彩虹城旅人公會加入。基礎技能：迅捷、閃躲、馴獸、幻獸知識。二轉為魔獸使。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-merchant",
    slug: "merchant",
    name: "商人",
    aliases: ["商"],
    branch: "traveler",
    tier: 1,
    parentClassId: "class-apprentice-traveler",
    metaTitle: "商人｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "擅長交易與蒐集財寶，戰鬥較弱、搜刮較強。於彩虹城旅人公會加入。基礎技能：迅捷、閃躲、交易、收集。二轉為大老闆。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview", "guide-work-basics"],
  }),
  cls({
    id: "class-martial-master",
    slug: "brawler",
    name: "格鬥師",
    aliases: ["格鬥"],
    branch: "traveler",
    tier: 2,
    parentClassId: "class-fighter",
    metaTitle: "格鬥師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "武鬥家二轉。強調攻擊精確、減少亂數影響的肉搏角色。需 60 級以上至旅人公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-beast-lord",
    slug: "beast-lord",
    name: "魔獸使",
    aliases: ["獸王"],
    branch: "traveler",
    tier: 2,
    parentClassId: "class-beast-tamer",
    metaTitle: "魔獸使｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "幻獸師二轉。輔助全隊幻獸（獸化增強）、提升捕捉機率，定位為隊伍幻獸戰力與進階幻獸獵人。需 60 級以上至旅人公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-boss",
    slug: "tycoon",
    name: "大老闆",
    aliases: ["大老板", "老闆"],
    branch: "traveler",
    tier: 2,
    parentClassId: "class-merchant",
    metaTitle: "大老闆｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "商人二轉。戰鬥中可額外增加隊伍收入，強調打寶與賺錢。轉生後金錢攻擊等部分技能會保留。需 60 級以上至旅人公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview", "guide-work-basics"],
  }),
  cls({
    id: "class-priest",
    slug: "cleric",
    name: "僧侶",
    aliases: ["補師"],
    branch: "cleric",
    tier: 1,
    parentClassId: "class-apprentice-cleric",
    metaTitle: "僧侶｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "法術以牽制與輔助為主，攻擊魔法較弱。於青鳥城修士公會加入。基礎技能：魔杖、祈禱、神之守護。二轉為祭司。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "修士系常見以敏捷、智慧為主，可輔體質。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-mage",
    slug: "mage",
    name: "法師",
    aliases: ["元素法"],
    branch: "cleric",
    tier: 1,
    parentClassId: "class-apprentice-cleric",
    metaTitle: "法師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "專長五行元素攻擊法術。於青鳥城修士公會加入。基礎技能：魔杖、祈禱、元素控制。二轉為巫師。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "修士系常見以敏捷、智慧為主，可輔體質。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-light",
    slug: "light-acolyte",
    name: "光之信徒",
    aliases: ["光之使者", "光使", "光法"],
    branch: "cleric",
    tier: 1,
    parentClassId: "class-apprentice-cleric",
    metaTitle: "光之信徒｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "光神信徒，法術多為增益、輔助與復活。於青鳥城修士公會加入。基礎技能：魔杖、祈禱、光系魔法。二轉為光術師。玩家也常稱光之使者。",
      note: NOTE,
    },
    attributeGuide: {
      status: "uncertain",
      value: "常見配點以敏捷、智慧為主，輔以體質。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-dark",
    slug: "dark-acolyte",
    name: "闇之信徒",
    aliases: ["暗之信徒", "闇使", "暗法"],
    branch: "cleric",
    tier: 1,
    parentClassId: "class-apprentice-cleric",
    metaTitle: "闇之信徒｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "闇神信徒，法術多為特殊攻擊。於青鳥城修士公會加入。基礎技能：魔杖、祈禱、闇系魔法。二轉為闇術師。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-high-priest",
    slug: "high-priest",
    name: "祭司",
    aliases: ["祭師"],
    branch: "cleric",
    tier: 2,
    parentClassId: "class-priest",
    metaTitle: "祭司｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "僧侶二轉。提升全體屬性、攻擊、防禦等，縮短戰鬥時間、強化隊伍續戰。需 60 級以上至修士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-wizard",
    slug: "wizard",
    name: "巫師",
    aliases: ["巫師二轉"],
    branch: "cleric",
    tier: 2,
    parentClassId: "class-mage",
    metaTitle: "巫師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "法師二轉。專精各屬性攻擊法術，並能強化信仰影響。需 60 級以上至修士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-light-mage",
    slug: "light-mage",
    name: "光術師",
    aliases: ["光使二轉"],
    branch: "cleric",
    tier: 2,
    parentClassId: "class-light",
    metaTitle: "光術師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "光之信徒二轉。補血、復活等輔助更強，組隊效益高。需 60 級以上至修士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
  cls({
    id: "class-dark-mage",
    slug: "dark-mage",
    name: "闇術師",
    aliases: ["闇使二轉", "暗術師"],
    branch: "cleric",
    tier: 2,
    parentClassId: "class-dark",
    metaTitle: "闇術師｜職業攻略－童協會",
    description: {
      status: "uncertain",
      value:
        "闇之信徒二轉。以弱化敵人為主、闇系攻擊為輔。需 60 級以上至修士公會轉職。",
      note: NOTE,
    },
    relatedGuideIds: ["guide-class-overview"],
  }),
];

export function getClassBySlug(slug: string) {
  const key = decodeURIComponent(slug);
  return classes.find(
    (c) => c.slug === slug || c.slug === key || c.name === key || c.aliases?.includes(key),
  );
}

export function getClassById(id: string) {
  return classes.find((c) => c.id === id);
}
