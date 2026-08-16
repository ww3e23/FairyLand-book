# Parse Bahamut wiki dumps into pet records.
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\ww3e2\.cursor\projects\g-APP-fairyland-book\agent-tools")
OUT = Path(r"G:\我的雲端硬碟\APP\fairyland-book\scripts\wiki-pets.json")

FILES = {
    "metal": ROOT / "ce623a2c-6012-4edc-9bf3-dff5e69e1e56.txt",
    "wood": ROOT / "8117e272-5b53-46f5-974b-15d47c41573f.txt",
    "water": ROOT / "7e9510f7-7fda-4314-8d42-a9326c70a1d0.txt",
    "fire": ROOT / "ce0960f1-64c3-4a28-be63-d23488078b9e.txt",
    "earth": ROOT / "479a1b8b-9cac-40fe-8b31-e014a1ad6d79.txt",
    "light": ROOT / "0a32ef4d-0765-4238-9b91-a80bc9105f94.txt",
    "dark": ROOT / "517e7bb9-3d96-4039-8af3-da53e533bf12.txt",
}

STOP = ("#####", "攻略選單", "目前沒有資料連到")

LEVEL_RE = re.compile(
    r"^\|\s*(?:\|\s*)?出現等級\s*\|\s*([^|]+?)\s*\|\s*偏向性\s*\|\s*([^|]+?)\s*\|\s*技能數量\s*\|\s*([^|]+?)\s*\|",
)
MAP_RE = re.compile(r"^\|\s*(?:\|\s*)?出現地點\s*\|\s*([^|]+?)\s*\|")
SKILL_RE = re.compile(r"^\|\s*(?:\|\s*)?可學技能\s*\|\s*([^|]+?)\s*\|")
DROP_RE = re.compile(r"^\|\s*([^|]+?)\s*\|\s*掉寶資料\s*\|\s*([^|]*)\|?")


def cells(line: str) -> list[str]:
    return [c.strip() for c in line.strip().strip("|").split("|")]


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
            mm = MAP_RE.match(nxt)
            sm = SKILL_RE.match(nxt)
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


def main() -> None:
    all_pets: list[dict] = []
    for el, path in FILES.items():
        if not path.exists():
            print("MISSING", el, path)
            continue
        chunk = parse_file(el, path)
        print(f"{el}: {len(chunk)}")
        all_pets.extend(chunk)
    names = [p["name"] for p in all_pets]
    dup = sorted({n for n in names if names.count(n) > 1})
    print("total", len(all_pets), "dup names", dup)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(all_pets, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", OUT)


if __name__ == "__main__":
    main()
