import { GITHUB_REPO } from "@/data/features";

export const PET_ISSUE_PREFIX = "[幻獸圖]";
export const LABEL_APPROVED = "pet-approved";
export const LABEL_REJECTED = "pet-rejected";
const TOKEN_KEY = "fl-admin-gh-token";

export type GhIssue = {
  number: number;
  title: string;
  body: string | null;
  state: "open" | "closed";
  html_url: string;
  created_at: string;
  user?: { login: string };
  labels: { name: string }[];
  pull_request?: unknown;
};

export type PetSubmission = {
  number: number;
  title: string;
  petName: string;
  slug?: string;
  credit: string;
  notes: string;
  images: string[];
  state: "open" | "closed";
  labels: string[];
  createdAt: string;
  author: string;
  htmlUrl: string;
  status: "pending" | "approved" | "rejected";
};

export function getAdminToken() {
  try {
    return localStorage.getItem(TOKEN_KEY) ?? "";
  } catch {
    return "";
  }
}

export function setAdminToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token.trim());
}

export function apiUrl(path: string) {
  return `https://api.github.com/repos/${GITHUB_REPO}${path}`;
}

function extractImages(text: string) {
  const found = new Set<string>();
  for (const m of text.matchAll(/!\[[^\]]*\]\((https:[^)\s]+)\)/g)) {
    found.add(m[1]);
  }
  for (const m of text.matchAll(
    /https:\/\/(?:github\.com\/user-attachments\/assets\/[A-Za-z0-9-]+|user-images\.githubusercontent\.com\/[^\s)"']+)/g,
  )) {
    found.add(m[0]);
  }
  return [...found];
}

function field(body: string, heading: string) {
  const re = new RegExp(`## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n## |\\n---|$)`);
  const m = body.match(re);
  return m?.[1]?.trim() ?? "";
}

export function parseIssue(issue: GhIssue, commentBodies: string[] = []): PetSubmission {
  const body = issue.body ?? "";
  const allText = [issue.title, body, ...commentBodies].join("\n");
  const slug = allText.match(/（([a-z0-9-]+)）/)?.[1];
  const labels = issue.labels.map((l) => l.name);
  let status: PetSubmission["status"] = "pending";
  if (labels.includes(LABEL_APPROVED)) status = "approved";
  else if (labels.includes(LABEL_REJECTED) || issue.state === "closed")
    status = "rejected";

  const petName =
    issue.title.replace(PET_ISSUE_PREFIX, "").trim() ||
    field(body, "幻獸").split("（")[0].trim() ||
    "未命名";

  return {
    number: issue.number,
    title: issue.title,
    petName,
    slug,
    credit: field(body, "投稿暱稱（可標在圖鑑）"),
    notes: field(body, "說明"),
    images: extractImages(allText),
    state: issue.state,
    labels,
    createdAt: issue.created_at,
    author: issue.user?.login ?? "未知",
    htmlUrl: issue.html_url,
    status,
  };
}

export async function fetchPetIssues(): Promise<PetSubmission[]> {
  const res = await fetch(
    `${apiUrl("/issues")}?state=all&per_page=100&sort=created&direction=desc`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  const issues = (await res.json()) as GhIssue[];
  const petIssues = issues.filter(
    (i) => !i.pull_request && i.title.startsWith(PET_ISSUE_PREFIX),
  );

  const withComments = await Promise.all(
    petIssues.map(async (issue) => {
      const cr = await fetch(apiUrl(`/issues/${issue.number}/comments`), {
        headers: { Accept: "application/vnd.github+json" },
      });
      const comments = cr.ok
        ? ((await cr.json()) as { body?: string }[])
        : [];
      return parseIssue(
        issue,
        comments.map((c) => c.body ?? ""),
      );
    }),
  );
  return withComments;
}

async function gh(method: string, path: string, body?: unknown) {
  const token = getAdminToken();
  if (!token) throw new Error("NO_TOKEN");
  const res = await fetch(apiUrl(path), {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `GitHub ${res.status}`);
  }
}

export async function approveSubmission(number: number) {
  await gh("POST", `/issues/${number}/labels`, { labels: [LABEL_APPROVED] });
}

export async function rejectSubmission(number: number) {
  await gh("POST", `/issues/${number}/labels`, { labels: [LABEL_REJECTED] });
  await gh("PATCH", `/issues/${number}`, { state: "closed" });
}
