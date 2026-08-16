from __future__ import annotations

import json
import os
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PETS_TS = ROOT / "src" / "data" / "pets.ts"
ART = ROOT / "public" / "art" / "pets"

SLUG_RE = re.compile(r"（([a-z0-9-]+)）")
IMG_RE = re.compile(
    r"https://(?:github\.com/user-attachments/assets/[A-Za-z0-9-]+|user-images\.githubusercontent\.com/[^\s)]+|raw\.githubusercontent\.com/[^\s)]+)"
)


def collect_text(issue: dict, comments: list[dict]) -> str:
    parts = [issue.get("title") or "", issue.get("body") or ""]
    for c in comments:
        parts.append(c.get("body") or "")
    return "\n".join(parts)


def main() -> int:
    issue = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    comments = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8")) if len(sys.argv) > 2 else []
    text = collect_text(issue, comments)
    slug_m = SLUG_RE.search(text)
    if not slug_m:
        print("NO_SLUG")
        return 2
    slug = slug_m.group(1)
    urls = IMG_RE.findall(text)
    if not urls:
        print("NO_IMAGE")
        return 3
    url = urls[-1]
    ART.mkdir(parents=True, exist_ok=True)
    dest = ART / f"{slug}.jpg"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "FairyLand-book-bot",
            "Authorization": f"Bearer {os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN') or ''}",
            "Accept": "application/octet-stream",
        },
    )
    data = urllib.request.urlopen(req, timeout=60).read()
    try:
        from PIL import Image
        import io

        im = Image.open(io.BytesIO(data)).convert("RGB")
        w, h = im.size
        if w > 900:
            im = im.resize((900, int(h * 900 / w)))
        im.save(dest, "JPEG", quality=84, optimize=True)
    except Exception:
        dest.write_bytes(data)
    src = PETS_TS.read_text(encoding="utf-8")
    if f'slug: "{slug}"' not in src:
        print("UNKNOWN_SLUG", slug)
        return 4
    image_line = f'    image: "/art/pets/{slug}.jpg",'
    kind_line = '    imageKind: "player",'
    if image_line in src:
        print("UPDATED_FILE", dest)
        return 0
    src = src.replace(
        f'    slug: "{slug}",\n',
        f'    slug: "{slug}",\n{image_line}\n{kind_line}\n',
        1,
    )
    PETS_TS.write_text(src, encoding="utf-8")
    print("PATCHED", slug)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
