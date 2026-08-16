from __future__ import annotations

import argparse
import io
import json
import os
import re
import sys
import urllib.request
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
PETS_TS = ROOT / "src" / "data" / "pets.ts"
ART = ROOT / "public" / "art" / "pets"
INBOX = ART / "_inbox"
PUBLISHED = INBOX / "published.json"
TOPIC = os.environ.get("PET_SUBMIT_NTFY_TOPIC", "fairyland-xh28-pet-drop")
MARKER = "來源：童協會投稿頁"
MAX_NEW = 12
SLUG_RE = re.compile(r"^[a-z0-9-]+$")


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "FairyLand-book-bot"})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read()


def decode_header(value: str) -> str:
    try:
        return unquote(value or "")
    except Exception:
        return value or ""


def field(text: str, label: str) -> str:
    m = re.search(rf"{label}：([^|\n]+)", text)
    return (m.group(1).strip() if m else "") or "（未填）"


def load_published() -> set[str]:
    if not PUBLISHED.exists():
        return set()
    try:
        data = json.loads(PUBLISHED.read_text(encoding="utf-8"))
        return set(data if isinstance(data, list) else [])
    except json.JSONDecodeError:
        return set()


def save_published(ids: set[str]) -> None:
    INBOX.mkdir(parents=True, exist_ok=True)
    PUBLISHED.write_text(
        json.dumps(sorted(ids), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def save_jpeg(data: bytes, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image

        im = Image.open(io.BytesIO(data)).convert("RGB")
        w, h = im.size
        if w > 900:
            im = im.resize((900, int(h * 900 / w)))
        im.save(dest, "JPEG", quality=84, optimize=True)
    except Exception:
        dest.write_bytes(data)


def patch_pets_ts(slug: str) -> bool:
    src = PETS_TS.read_text(encoding="utf-8")
    needle = f'    slug: "{slug}",\n'
    if needle not in src:
        print("UNKNOWN_SLUG", slug)
        return False
    image_line = f'    image: "/art/pets/{slug}.jpg",'
    kind_line = '    imageKind: "player",'
    if image_line in src:
        return True
    src = src.replace(needle, f"{needle}{image_line}\n{kind_line}\n", 1)
    PETS_TS.write_text(src, encoding="utf-8")
    print("PATCHED", slug)
    return True


def publish() -> int:
    raw = get(f"https://ntfy.sh/{TOPIC}/json?poll=1&since=12h")
    lines = [ln for ln in raw.decode("utf-8", "replace").splitlines() if ln.strip()]
    done = load_published()
    INBOX.mkdir(parents=True, exist_ok=True)
    made = 0

    for line in reversed(lines):
        if made >= MAX_NEW:
            break
        try:
            msg = json.loads(line)
        except json.JSONDecodeError:
            continue
        if msg.get("event") != "message":
            continue
        ntfy_id = str(msg.get("id") or "")
        if not ntfy_id or ntfy_id in done:
            continue
        title = decode_header(str(msg.get("title") or ""))
        message = decode_header(str(msg.get("message") or ""))
        text = f"{title}\n{message}"
        if MARKER not in text:
            continue
        slug = field(text, "編號")
        if slug == "（未填）" or not SLUG_RE.match(slug):
            print("SKIP_NO_SLUG", ntfy_id)
            done.add(ntfy_id)
            continue
        att = msg.get("attachment") or {}
        url = att.get("url")
        if not url:
            continue
        save_jpeg(get(url), ART / f"{slug}.jpg")
        if not patch_pets_ts(slug):
            continue
        done.add(ntfy_id)
        made += 1
        print("PUBLISHED", ntfy_id, slug)

    save_published(done)
    print("PUBLISH_DONE", made)
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["publish", "download", "issues"], nargs="?", default="publish")
    args = parser.parse_args()
    if args.mode in {"download", "issues"}:
        return publish()
    return publish()


if __name__ == "__main__":
    sys.exit(main())
