import { GITHUB_REPO } from "@/data/features";
import { pets } from "@/data/pets";

export function githubNewIssueUrl(title: string, body: string) {
  const base = `https://github.com/${GITHUB_REPO}/issues/new`;
  const params = new URLSearchParams({ title, body });
  return `${base}?${params.toString()}`;
}

export function buildPetImageIssue(input: {
  petName: string;
  petSlug?: string;
  credit?: string;
  notes?: string;
  imageUrl?: string;
}) {
  const title = `[幻獸圖] ${input.petName}`;
  const lines = [
    "## 幻獸",
    input.petSlug ? `${input.petName}（${input.petSlug}）` : input.petName,
    "",
    "## 投稿暱稱（可標在圖鑑）",
    input.credit?.trim() || "（未填）",
    "",
    "## 說明",
    input.notes?.trim() || "（未填）",
    "",
    "## 圖片",
    input.imageUrl?.trim()
      ? input.imageUrl.trim()
      : "請把檔案拖進這則 Issue，或貼上圖床連結。",
    "",
    "---",
    "規則：只要遊戲內截圖或自己畫的外觀圖。不要用其他攻略站／圖鑑站的圖。",
    "投稿即同意本站可壓縮、裁切後用於圖鑑，並可標註暱稱。審核後才會上線。",
  ];
  return { title, body: lines.join("\n"), url: githubNewIssueUrl(title, lines.join("\n")) };
}

export const PET_SUBMIT_OTHER = "other";

export function petSubmitOptions() {
  return [
    ...pets.map((p) => ({ slug: p.slug, name: p.name })),
    { slug: PET_SUBMIT_OTHER, name: "其他／尚未收錄的幻獸" },
  ];
}
