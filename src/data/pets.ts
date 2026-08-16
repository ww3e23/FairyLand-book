import type { DataField, PetElement, PetEntity } from "@/lib/types";
import { SOURCES } from "./sources";

export const PET_ELEMENT_LABEL: Record<PetElement, string> = {
  metal: "金",
  wood: "木",
  water: "水",
  fire: "火",
  earth: "土",
  light: "光",
  dark: "闇",
};

export const PET_ELEMENT_ORDER: PetElement[] = [
  "metal",
  "wood",
  "water",
  "fire",
  "earth",
  "light",
  "dark",
];

const SRC = [SOURCES.bahamutGoldPets, SOURCES.baojia, SOURCES.bahamutPetLazy];

const STAT_UNSURE: DataField = {
  status: "uncertain",
  note: "舊玩家表尚未與現服交叉確認，暫不填數字，請以遊戲內為準。",
};

function pet(
  partial: Omit<
    PetEntity,
    "trustStatus" | "applicableVersion" | "indexedAt" | "sources" | "element"
  > &
    Partial<Pick<PetEntity, "trustStatus" | "sources">> & { element?: PetElement },
): PetEntity {
  return {
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    sources: SRC,
    element: "metal",
    ...partial,
  };
}

export const pets: PetEntity[] = [
  pet({
    id: "pet-wo-juan-chong",
    slug: "wo-juan-chong",
    name: "窩捲蟲",
    aliases: ["高捲蟲", "捲蟲"],
    metaTitle: "窩捲蟲｜金系幻獸－童協會",
    metaDescription:
      "金系新手圖常見小蟲：出現地、偏向性、可學技能與本站重繪外觀。",
    image: "/art/pets/wo-juan-chong.jpg",
    bias: { value: "體質", status: "uncertain" },
    spawnLevel: { value: "1～3", status: "uncertain" },
    spawnMaps: {
      value: "市鎮地下室、吉恩村、綠夫村、伊利村",
      status: "uncertain",
    },
    skillSlots: {
      value: "2 或 3",
      status: "conflict",
      note: "玩家截圖寫 2 格，百科寫 3 格。進遊戲看實際欄位。",
    },
    hp: { value: "約 56", status: "uncertain", note: "野生個體參考值。" },
    str: { value: "4", status: "uncertain" },
    sta: { value: "5", status: "uncertain" },
    agi: { value: "4", status: "uncertain" },
    int: { value: "4", status: "uncertain" },
    luk: { value: "5", status: "uncertain" },
    cha: { value: "4", status: "uncertain" },
    drops: {
      value:
        "窩捲蟲卡、窩捲蟲娃娃、新手屠刀、修行袍、煤、青銅礦、娃娃盒",
      status: "uncertain",
    },
    learnableSkills: {
      value: "恢復、豬頭、裝死、賜福、轉換、金系法術",
      status: "uncertain",
      note: "有的玩家表另列魔刃術。能學不等於野生自帶。",
    },
    note: {
      value:
        "剛出村最容易碰到的金系之一。轉換、恢復對新手好用，打怪輸出很快會不夠。後期當鎧寵，體質成長也常被艾波這類比下去，當過渡即可。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-qian-shu",
    slug: "jin-qian-shu",
    name: "金錢鼠",
    aliases: ["金鼠"],
    metaTitle: "金錢鼠｜金系幻獸－童協會",
    metaDescription: "北綠野金系智偏小老鼠：地點、技能與參考六維。",
    image: "/art/pets/jin-qian-shu.jpg",
    bias: { value: "智慧", status: "uncertain" },
    spawnLevel: { value: "4～5", status: "uncertain" },
    spawnMaps: { value: "北綠野", status: "uncertain" },
    skillSlots: { value: "3", status: "uncertain" },
    hp: { value: "約 59", status: "uncertain", note: "野生個體參考值。" },
    str: { value: "6", status: "uncertain" },
    sta: { value: "6", status: "uncertain" },
    agi: { value: "8", status: "uncertain" },
    int: { value: "7", status: "uncertain" },
    luk: { value: "7", status: "uncertain" },
    cha: { value: "6", status: "uncertain" },
    drops: {
      value: "金錢鼠卡、金錢鼠娃娃、藤棍、木盾、蘋果、桃子、雜七集卡冊",
      status: "uncertain",
    },
    learnableSkills: {
      value: "連擊、裝死、轉換、吸血、亡命一擊、金系法術",
      status: "uncertain",
    },
    note: {
      value:
        "比窩捲蟲晚一點出現，技能比較像打手（連擊、吸血、亡命）。當新手過渡可以，不要當終盤主力期待。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-ke-zhu",
    slug: "jin-ke-zhu",
    name: "金殼蛛",
    aliases: ["金蛛"],
    metaTitle: "金殼蛛｜金系幻獸－童協會",
    metaDescription: "北綠野／飛魚角金系體質偏蜘蛛。",
    image: "/art/pets/jin-ke-zhu.jpg",
    bias: { value: "體質", status: "uncertain" },
    spawnLevel: { value: "6～7、6～12", status: "uncertain" },
    spawnMaps: { value: "北綠野、飛魚角", status: "uncertain" },
    skillSlots: { value: "3", status: "uncertain" },
    hp: STAT_UNSURE,
    str: STAT_UNSURE,
    sta: STAT_UNSURE,
    agi: STAT_UNSURE,
    int: STAT_UNSURE,
    luk: STAT_UNSURE,
    cha: STAT_UNSURE,
    drops: {
      value: "金殼蛛卡、金殼蛛娃娃、重藤棍、小圓帽、雜魚、青銅礦、大南瓜",
      status: "uncertain",
    },
    learnableSkills: {
      value: "連擊、裝死、威脅、轉換、吸血、亡命一擊",
      status: "uncertain",
    },
    note: {
      value:
        "綠野附近常見的體質偏蜘蛛。打手技能有，但只有三格，後期通常會換成欄位或成長更完整的物理寵。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-ai-bo",
    slug: "jin-ai-bo",
    name: "金艾波",
    aliases: ["艾波", "派艾波"],
    metaTitle: "金艾波｜金系幻獸－童協會",
    metaDescription: "金銀城外金系體質偏艾波。",
    image: "/art/pets/jin-ai-bo.jpg",
    bias: { value: "體質", status: "uncertain" },
    spawnLevel: { value: "10～12", status: "uncertain" },
    spawnMaps: { value: "金銀城外", status: "uncertain" },
    skillSlots: { value: "3", status: "uncertain" },
    hp: STAT_UNSURE,
    str: STAT_UNSURE,
    sta: STAT_UNSURE,
    agi: STAT_UNSURE,
    int: STAT_UNSURE,
    luk: STAT_UNSURE,
    cha: STAT_UNSURE,
    drops: {
      value: "金艾波卡、金艾波娃娃、木斧、皮甲、竹子、桃子、薄荷",
      status: "uncertain",
    },
    learnableSkills: {
      value: "恢復、豬頭、裝死、賜福、轉換、犧牲",
      status: "uncertain",
    },
    note: {
      value:
        "技能偏輔助（恢復、轉換、賜福）。玩家討論鎧寵體質時常常拿它當對照，本站還沒獨立量過成長曲線，合寵前請自己進遊戲比。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-shu-slime",
    slug: "jin-shu-slime",
    name: "金屬史來姆",
    aliases: ["金史來姆", "金史萊姆"],
    metaTitle: "金屬史來姆｜金系幻獸－童協會",
    metaDescription: "中等圖金系體質偏史來姆，技能欄較少。",
    image: "/art/pets/jin-shu-slime.jpg",
    bias: { value: "體質", status: "uncertain" },
    spawnLevel: { value: "16～18", status: "uncertain" },
    spawnMaps: {
      value: "史來姆迷宮 B2、鼠洞 B2、矮人山",
      status: "uncertain",
    },
    skillSlots: { value: "2", status: "uncertain" },
    hp: STAT_UNSURE,
    str: STAT_UNSURE,
    sta: STAT_UNSURE,
    agi: STAT_UNSURE,
    int: STAT_UNSURE,
    luk: STAT_UNSURE,
    cha: STAT_UNSURE,
    drops: {
      value:
        "金屬史來姆卡、金屬史來姆娃娃、長刀、金麻衣、青銅礦、白楊木、金剛砂",
      status: "uncertain",
    },
    learnableSkills: {
      value: "恢復、豬頭、裝死、賜福、金系法術",
      status: "uncertain",
    },
    note: {
      value:
        "中等圖常見。能學金法，但技能欄只有兩格，合寵或自練都要先決定留哪兩招。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-shi",
    slug: "jin-shi",
    name: "金獅",
    aliases: ["金獅子"],
    metaTitle: "金獅｜金系幻獸－童協會",
    metaDescription: "秘密平原金系力量偏獅子。",
    image: "/art/pets/jin-shi.jpg",
    bias: { value: "力量", status: "uncertain" },
    spawnLevel: { value: "24～25", status: "uncertain" },
    spawnMaps: { value: "秘密平原", status: "uncertain" },
    skillSlots: { value: "3", status: "uncertain" },
    hp: {
      value: "約 292",
      status: "uncertain",
      note: "舊玩家表數字，現服請再對。",
    },
    str: { value: "41", status: "uncertain" },
    sta: { value: "36", status: "uncertain" },
    agi: { value: "33", status: "uncertain" },
    int: { value: "28", status: "uncertain" },
    luk: { value: "28", status: "uncertain" },
    cha: { value: "33", status: "uncertain" },
    drops: {
      value: "金獅卡、金獅娃娃、輕戰斧、鹿皮鞋、鯉魚、金剛砂、羌子肉",
      status: "uncertain",
    },
    learnableSkills: {
      value: "強化、恢復、連擊、裝死、威脅、推車",
      status: "uncertain",
    },
    note: {
      value:
        "力量偏、技能偏物理（強化、連擊、威脅、推車）。六維來自舊玩家表，只當參考，抓到再自己記一筆。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-q",
    slug: "jin-q",
    name: "金Q獸",
    aliases: ["金Q", "Q獸"],
    metaTitle: "金Q獸｜金系幻獸－童協會",
    metaDescription: "秘密古墓金系幸運偏 Q 獸。",
    image: "/art/pets/jin-q.jpg",
    bias: { value: "幸運", status: "uncertain" },
    spawnLevel: { value: "26～32、31～38", status: "uncertain" },
    spawnMaps: { value: "秘密古墓 B2、秘密古墓 B3", status: "uncertain" },
    skillSlots: { value: "4", status: "uncertain" },
    hp: STAT_UNSURE,
    str: STAT_UNSURE,
    sta: STAT_UNSURE,
    agi: STAT_UNSURE,
    int: STAT_UNSURE,
    luk: STAT_UNSURE,
    cha: STAT_UNSURE,
    drops: {
      value: "金Q獸卡、金Q獸娃娃、鑲銀長劍、銀盔、牛皮、娃娃盒",
      status: "uncertain",
    },
    learnableSkills: {
      value: "連擊、豬頭、賜福、吸血、犧牲、金系法術",
      status: "uncertain",
    },
    note: {
      value:
        "古墓帶、幸運偏、四格技能，金法與犧牲／吸血都在清單上。幸運偏的野生寵比較少，當素材或外觀前先確認你要的成長是不是幸。",
      status: "uncertain",
    },
  }),
  pet({
    id: "pet-jin-hai-ma",
    slug: "jin-hai-ma",
    name: "金海馬",
    aliases: ["海馬"],
    metaTitle: "金海馬｜金系幻獸－童協會",
    metaDescription: "史蓋窩克海金系敏捷偏海馬。",
    image: "/art/pets/jin-hai-ma.jpg",
    bias: { value: "敏捷", status: "uncertain" },
    spawnLevel: { value: "21～25", status: "uncertain" },
    spawnMaps: { value: "史蓋窩克海", status: "uncertain" },
    skillSlots: { value: "3", status: "uncertain" },
    hp: STAT_UNSURE,
    str: STAT_UNSURE,
    sta: STAT_UNSURE,
    agi: STAT_UNSURE,
    int: STAT_UNSURE,
    luk: STAT_UNSURE,
    cha: STAT_UNSURE,
    drops: {
      value: "金海馬卡、金海馬娃娃、銅板斧、銅手套、鳳梨、優格、雜八集卡冊",
      status: "uncertain",
    },
    learnableSkills: {
      value: "強化、連擊、威脅、轉換、吸血、金系法術",
      status: "uncertain",
    },
    note: {
      value:
        "海上圖的敏捷偏金系。練敏或合敏成長時會被提到；技能欄三格，金法與連擊／吸血要自己取捨。",
      status: "uncertain",
    },
  }),
];

export function getPetBySlug(slug: string) {
  return pets.find((p) => p.slug === slug);
}

export function getPetById(id: string) {
  return pets.find((p) => p.id === id);
}

export function getPetsByElement(element: PetElement | "all") {
  if (element === "all") return pets;
  return pets.filter((p) => p.element === element);
}
