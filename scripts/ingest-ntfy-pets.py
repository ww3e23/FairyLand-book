from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INBOX = ROOT / "public" / "art" / "pets" / "_inbox"
TOPIC = os.environ.get("PET_SUBMIT_NTFY_TOPIC", "fairyland-xh28-pet-drop")
REPO = os.environ.get("GITHUB_REPOSITORY", "ww3e23/FairyLand-book")
MARKER = "來源：童協會投稿頁"
MAX_NEW = 8


def get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "FairyLand-book-bot"})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read()


def field(text: str, label: str) -> str:
    m = re.search(rf"{label}：([^|\n]+)", text)
    return (m.group(1).strip() if m else "") or "（未填）"


def existing_issue_text() -> str:
    raw = subprocess.check_output(
        [
            "gh",
            "api",
            f"repos/{REPO}/issues?state=all&per_page=100&sort=created&direction=desc",
        ],
        text=True,
        encoding="utf-8",
    )
    issues = json.loads(raw)
    return "\n".join(
        f"{i.get('title') or ''}\n{i.get('body') or ''}" for i in issues
    )


def download() -> int:
    raw = get(f"https://ntfy.sh/{TOPIC}/json?poll=1&since=12h")
    lines = [ln for ln in raw.decode("utf-8", "replace").splitlines() if ln.strip()]
    known = existing_issue_text()
    INBOX.mkdir(parents=True, exist_ok=True)
    saved = 0

    for line in reversed(lines):
        if saved >= MAX_NEW:
            break
        try:
            msg = json.loads(line)
        except json.JSONDecodeError:
            continue
        if msg.get("event") != "message":
            continue
        ntfy_id = str(msg.get("id") or "")
        dest = INBOX / f"{ntfy_id}.jpg"
        if not ntfy_id or f"ntfy:{ntfy_id}" in known or dest.exists():
            continue
        text = f"{msg.get('title') or ''}\n{msg.get('message') or ''}"
        if MARKER not in text:
            continue
        att = msg.get("attachment") or {}
        url = att.get("url")
        if not url:
            continue
        dest.write_bytes(get(url))
        meta = {
            "id": ntfy_id,
            "title": msg.get("title") or "",
            "message": msg.get("message") or "",
        }
        (INBOX / f"{ntfy_id}.json").write_text(
            json.dumps(meta, ensure_ascii=False),
            encoding="utf-8",
        )
        saved += 1
        print("SAVED", ntfy_id)
    print("DOWNLOAD_DONE", saved)
    return 0


def create_issues() -> int:
    known = existing_issue_text()
    made = 0
    for meta_path in sorted(INBOX.glob("*.json")):
        if made >= MAX_NEW:
            break
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
        ntfy_id = str(meta.get("id") or meta_path.stem)
        if f"ntfy:{ntfy_id}" in known:
            continue
        jpg = INBOX / f"{ntfy_id}.jpg"
        if not jpg.exists():
            continue
        text = f"{meta.get('title') or ''}\n{meta.get('message') or ''}"
        pet_name = field(text, "名稱")
        if pet_name == "（未填）":
            pet_name = (
                re.sub(r"^\[幻獸圖\]\s*", "", meta.get("title") or "").strip()
                or "未命名"
            )
        slug = field(text, "編號")
        slug_line = f"{pet_name}（{slug}）" if slug != "（未填）" else pet_name
        image_md = (
            f"https://raw.githubusercontent.com/{REPO}/main/public/art/pets/_inbox/{ntfy_id}.jpg"
        )
        body = "\n".join(
            [
                f"<!-- ntfy:{ntfy_id} -->",
                "## 幻獸",
                slug_line,
                "",
                "## 投稿暱稱（可標在圖鑑）",
                field(text, "暱稱"),
                "",
                "## 說明",
                field(text, "說明"),
                "",
                "## 圖片",
                f"![pet]({image_md})",
                "",
                "---",
                MARKER,
            ]
        )
        title = (meta.get("title") or f"[幻獸圖] {pet_name}").strip()
        subprocess.check_call(
            ["gh", "issue", "create", "--title", title, "--body", body],
            cwd=ROOT,
        )
        known += f"\nntfy:{ntfy_id}\n"
        made += 1
        print("CREATED", ntfy_id, title)
    print("ISSUES_DONE", made)
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["download", "issues"])
    args = parser.parse_args()
    if args.mode == "download":
        return download()
    return create_issues()


if __name__ == "__main__":
    sys.exit(main())
