from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

try:
    from pypinyin import lazy_pinyin
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypinyin"])
    from pypinyin import lazy_pinyin

ROOT = Path(r"G:\我的雲端硬碟\APP\fairyland-book")
TOOLS = Path(r"C:\Users\ww3e2\.cursor\projects\g-APP-fairyland-book\agent-tools")
RARE_PATH = ROOT / "scripts" / "rare-wiki.txt"
OUT = ROOT / "src" / "data" / "pets.ts"

FILES = {
    "metal": TOOLS / "ce623a2c-6012-4edc-9bf3-dff5e69e1e56.txt",
    "wood": TOOLS / "8117e272-5b53-46f5-974b-15d47c41573f.txt",
    "water": TOOLS / "7e9510f7-7fda-4314-8d42-a9326c70a1d0.txt",
    "fire": TOOLS / "ce0960f1-64c3-4a28-be63-d23488078b9e.txt",
    "earth": TOOLS / "479a1b8b-9cac-40fe-8b31-e014a1ad6d79.txt",
    "light": TOOLS / "0a32ef4d-0765-4238-9b91-a80bc9105f94.txt",
    "dark": TOOLS / "517e7bb9-3d96-4039-8af3-da53e533bf12.txt",
}

STOP = ("#####", "攻略選單", "目前沒有資料連到")
LEVEL_RE = re.compile(
    r"^\|\s*(?:\|\s*)?出現等級\s*\|\s*([^|]+?)\s*\|\s*偏向性\s*\|\s*([^|]+?)\s*\|\s*技能數量\s*\|\s*([^|]+?)\s*\|",
)
MAP_LINE_RE = re.compile(r"^\|\s*(?:\|\s*)?出現地點\s*\|\s*([^|]+?)\s*\|")
SKILL_LINE_RE = re.compile(r"^\|\s*(?:\|\s*)?可學技能\s*\|\s*([^|]+?)\s*\|")
DROP_RE = re.compile(r"^\|\s*([^|]+?)\s*\|\s*掉寶資料\s*\|\s*([^|]*)\|?")


def parse_file(element: str, path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    pets: list[dict] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if any(line.startswith(s) for s in STOP) or line.startswith("#####"):
            break
        m = LEVEL_RE.match(line)
        if not m:
            i += 1
            continue
        level, bias, slots = (x.strip() for x in m.groups())
        maps = skills = name = drops = ""
        j = i + 1
        while j < len(lines):
            nxt = lines[j]
            if nxt.startswith("| ---"):
                j += 1
                continue
            if LEVEL_RE.match(nxt) or any(nxt.startswith(s) for s in STOP) or nxt.startswith("#####"):
                break
            mm = MAP_LINE_RE.match(nxt)
            sm = SKILL_LINE_RE.match(nxt)
            dm = DROP_RE.match(nxt)
            if mm:
                maps = mm.group(1).strip()
            elif sm:
                skills = sm.group(1).strip()
            elif dm and dm.group(1) not in ("出現等級", "出現地點", "可學技能", ""):
                name = dm.group(1).strip()
                drops = dm.group(2).strip().rstrip("|").strip()
                j += 1
                break
            j += 1
        if name:
            pets.append(
                {
                    "element": element,
                    "name": name,
                    "spawnLevel": level.replace("~", "～"),
                    "bias": bias,
                    "skillSlots": slots,
                    "spawnMaps": maps,
                    "learnableSkills": skills,
                    "drops": drops,
                }
            )
        i = j
    return pets

EL_ZH = {
    "metal": "金",
    "wood": "木",
    "water": "水",
    "fire": "火",
    "earth": "土",
    "light": "光",
    "dark": "闇",
}
ZH_EL = {v: k for k, v in EL_ZH.items()}

RARE_LEVEL_RE = re.compile(
    r"出現等級\s*\|\s*([^|]+?)\s*\|\s*偏向性\s*\|\s*([^|]+?)\s*\|\s*技能數量\s*\|\s*([^|]+?)\s*\|\s*屬性\s*\|\s*([^|]+?)\s*\|",
)
MAP_RE = re.compile(r"出現地點\s*\|\s*([^|]+?)\s*\|")
SKILL_RE = re.compile(r"可學技能\s*\|\s*([^|]+?)\s*\|")
DROP_RE = re.compile(r"^\|\s*([^|]+?)\s*\|\s*掉寶資料\s*\|\s*([^|]*)\|?")

NOTE = "整理自巴哈百科野生出現表（標註來自敗家一族、Yuki），現服請以遊戲內為準。六維未交叉確認故不填。"
RARE_NOTE = "百科列為稀有幻獸：隨機遇怪、不能用黑暗儀式招換。資料來源同上，現服請以遊戲內為準。"

OVERRIDES = {
    ("metal", "窩捲蟲"): {
        "aliases": ["高捲蟲", "捲蟲"],
        "skillSlots": "2 或 3",
        "skillSlotsStatus": "conflict",
        "skillSlotsNote": "玩家截圖寫 2 格，百科寫 3 格。進遊戲看實際欄位。",
        "hp": "約 56",
        "str": "4",
        "sta": "5",
        "agi": "4",
        "int": "4",
        "luk": "5",
        "cha": "4",
        "note": "剛出村最容易碰到的金系之一。轉換、恢復對新手好用，打怪輸出很快會不夠。後期當鎧寵，體質成長也常被艾波這類比下去，當過渡即可。",
    },
    ("metal", "金錢鼠"): {
        "aliases": ["金鼠"],
        "hp": "約 59",
        "str": "6",
        "sta": "6",
        "agi": "8",
        "int": "7",
        "luk": "7",
        "cha": "6",
        "note": "比窩捲蟲晚一點出現，技能比較像打手（連擊、吸血、亡命）。當新手過渡可以，不要當終盤主力期待。",
    },
    ("metal", "金殼蛛"): {
        "aliases": ["金蛛"],
        "note": "綠野附近常見的體質偏蜘蛛。打手技能有，但只有三格，後期通常會換成欄位或成長更完整的物理寵。",
    },
    ("metal", "金艾波"): {
        "aliases": ["艾波", "派艾波"],
        "note": "技能偏輔助（恢復、轉換、賜福）。玩家討論鎧寵體質時常常拿它當對照，本站還沒獨立量過成長曲線，合寵前請自己進遊戲比。",
    },
    ("metal", "金屬史來姆"): {
        "aliases": ["金史來姆", "金史萊姆"],
        "note": "中等圖常見。能學金法，但技能欄只有兩格，合寵或自練都要先決定留哪兩招。",
    },
    ("metal", "金獅"): {
        "aliases": ["金獅子"],
        "hp": "約 292",
        "str": "41",
        "sta": "36",
        "agi": "33",
        "int": "28",
        "luk": "28",
        "cha": "33",
        "note": "力量偏、技能偏物理（強化、連擊、威脅、推車）。六維來自舊玩家表，只當參考，抓到再自己記一筆。",
    },
    ("metal", "金Q獸"): {
        "aliases": ["金Q", "Q獸"],
        "note": "古墓帶、幸運偏、四格技能，金法與犧牲／吸血都在清單上。幸運偏的野生寵比較少，當素材或外觀前先確認你要的成長是不是幸。",
    },
    ("metal", "金海馬"): {
        "aliases": ["海馬"],
        "note": "海上圖的敏捷偏金系。練敏或合敏成長時會被提到；技能欄三格，金法與連擊／吸血要自己取捨。",
    },
}


def parse_rare(path: Path) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()
    pets: list[dict] = []
    i = 0
    while i < len(lines):
        m = RARE_LEVEL_RE.search(lines[i])
        if not m:
            i += 1
            continue
        level, bias, slots, attr = (x.strip() for x in m.groups())
        maps = skills = name = drops = ""
        j = i + 1
        while j < len(lines):
            nxt = lines[j]
            if nxt.startswith("| ---"):
                j += 1
                continue
            if RARE_LEVEL_RE.search(nxt):
                break
            mm = MAP_RE.search(nxt)
            sm = SKILL_RE.search(nxt)
            dm = DROP_RE.match(nxt)
            if mm:
                maps = mm.group(1).strip()
            elif sm:
                skills = sm.group(1).strip()
            elif dm and dm.group(1) not in ("出現等級", "出現地點", "可學技能", ""):
                name = dm.group(1).strip()
                drops = dm.group(2).strip().rstrip("|").strip()
                j += 1
                break
            j += 1
        el = ZH_EL.get(attr)
        if name and el:
            pets.append(
                {
                    "element": el,
                    "rare": True,
                    "name": name,
                    "spawnLevel": level.replace("~", "～"),
                    "bias": bias,
                    "skillSlots": slots,
                    "spawnMaps": maps,
                    "learnableSkills": skills,
                    "drops": drops,
                }
            )
        i = j
    return pets


def slugify(name: str) -> str:
    parts = []
    for ch in name:
        if re.match(r"[A-Za-z0-9]", ch):
            parts.append(ch.lower())
        elif re.match(r"[\u4e00-\u9fff]", ch):
            parts.extend(lazy_pinyin(ch))
        elif ch in "-_":
            parts.append("-")
    slug = re.sub(r"-+", "-", "-".join(parts)).strip("-")
    return slug or "pet"


def ts(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_row(p: dict, slug: str) -> str:
    ov = OVERRIDES.get((p["element"], p["name"]), {})
    aliases = ov.get("aliases")
    extra = []
    if aliases:
        extra.append(f"    aliases: {json.dumps(aliases, ensure_ascii=False)},")
    if p.get("rare"):
        extra.append("    rare: true,")
    slots = ov.get("skillSlots", p["skillSlots"])
    slots_status = ov.get("skillSlotsStatus", "uncertain")
    slots_note = ov.get("skillSlotsNote")
    slot_obj = f'{{ value: {ts(slots)}, status: "{slots_status}"'
    if slots_note:
        slot_obj += f", note: {ts(slots_note)}"
    slot_obj += " }"
    note = ov.get("note", RARE_NOTE if p.get("rare") else NOTE)
    stats = []
    for key in ("hp", "str", "sta", "agi", "int", "luk", "cha"):
        if ov.get(key):
            extra_note = ' note: "野生個體參考值。"' if key == "hp" and p["name"] != "金獅" else ""
            if key == "hp" and p["name"] == "金獅":
                extra_note = ' note: "舊玩家表數字，現服請再對。"'
            stats.append(f'    {key}: {{ value: {ts(ov[key])}, status: "uncertain",{extra_note} }},')
        else:
            stats.append(f"    {key}: STAT_UNSURE,")
    extras = "\n".join(extra)
    if extras:
        extras += "\n"
    return f"""  w({{
    element: "{p["element"]}",
    slug: "{slug}",
    name: {ts(p["name"])},
{extras}    bias: {ts(p["bias"])},
    spawnLevel: {ts(p["spawnLevel"])},
    spawnMaps: {ts(p["spawnMaps"])},
    skillSlots: {slot_obj},
    learnableSkills: {ts(p["learnableSkills"])},
    drops: {ts(p["drops"])},
    note: {ts(note)},
{chr(10).join(stats)}
  }}),
"""


HEADER = '''import type { DataField, PetElement, PetEntity } from "@/lib/types";
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

const SRC = [
  SOURCES.bahamutGoldPets,
  SOURCES.bahamutWoodPets,
  SOURCES.bahamutWaterPets,
  SOURCES.bahamutFirePets,
  SOURCES.bahamutEarthPets,
  SOURCES.bahamutLightPets,
  SOURCES.bahamutDarkPets,
  SOURCES.bahamutRarePets,
  SOURCES.baojia,
];

const STAT_UNSURE: DataField = {
  status: "uncertain",
  note: "舊玩家表尚未與現服交叉確認，暫不填數字，請以遊戲內為準。",
};

const U = "uncertain" as const;

function pet(
  partial: Omit<
    PetEntity,
    "trustStatus" | "applicableVersion" | "indexedAt" | "sources"
  > &
    Partial<Pick<PetEntity, "trustStatus" | "sources">>,
): PetEntity {
  return {
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    sources: SRC,
    ...partial,
  };
}

function w(row: {
  element: PetElement;
  slug: string;
  name: string;
  aliases?: string[];
  rare?: boolean;
  bias: string;
  spawnLevel: string;
  spawnMaps: string;
  skillSlots: DataField;
  learnableSkills: string;
  drops: string;
  note: string;
  hp?: DataField;
  str?: DataField;
  sta?: DataField;
  agi?: DataField;
  int?: DataField;
  luk?: DataField;
  cha?: DataField;
}): PetEntity {
  const label = PET_ELEMENT_LABEL[row.element];
  return pet({
    id: `pet-${row.slug}`,
    slug: row.slug,
    name: row.name,
    aliases: row.aliases,
    rare: row.rare,
    element: row.element,
    metaTitle: `${row.name}｜${label}系幻獸－童協會`,
    metaDescription: `${label}系${row.name}：出現地、偏向性與可學技能。`,
    bias: { value: row.bias, status: U },
    spawnLevel: { value: row.spawnLevel, status: U },
    spawnMaps: { value: row.spawnMaps, status: U },
    skillSlots: row.skillSlots,
    hp: row.hp ?? STAT_UNSURE,
    str: row.str ?? STAT_UNSURE,
    sta: row.sta ?? STAT_UNSURE,
    agi: row.agi ?? STAT_UNSURE,
    int: row.int ?? STAT_UNSURE,
    luk: row.luk ?? STAT_UNSURE,
    cha: row.cha ?? STAT_UNSURE,
    drops: { value: row.drops || undefined, status: U },
    learnableSkills: { value: row.learnableSkills, status: U },
    note: { value: row.note, status: U },
  });
}

export const pets: PetEntity[] = [
'''

FOOTER = '''
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
'''


def main() -> None:
    all_pets: list[dict] = []
    for el, path in FILES.items():
        chunk = parse_file(el, path)
        print(el, len(chunk), flush=True)
        all_pets.extend(chunk)
    rare = parse_rare(RARE_PATH)
    print("rare", len(rare), flush=True)
    all_pets.extend(rare)

    used: dict[str, int] = {}
    rows = []
    for p in all_pets:
        base = slugify(p["name"])
        if p.get("rare"):
            base = f"{base}-rare"
        slug = base
        n = used.get(slug, 0)
        if n:
            slug = f"{base}-{p['element']}"
        used[slug] = used.get(slug, 0) + 1
        # if still collides
        if used[slug] > 1:
            slug = f"{slug}-{used[slug]}"
        rows.append(emit_row(p, slug))

    OUT.write_text(HEADER + "".join(rows) + FOOTER, encoding="utf-8")
    print("wrote", OUT, "count", len(all_pets))


if __name__ == "__main__":
    main()
