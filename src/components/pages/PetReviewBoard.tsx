"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/ContextPanel";
import { BOARD_PASSWORD_SHA256 } from "@/data/features";
import { getPetBySlug, PET_ELEMENT_LABEL } from "@/data/pets";
import {
  approveSubmission,
  fetchPetIssues,
  getAdminToken,
  rejectSubmission,
  setAdminToken,
  type PetSubmission,
} from "@/lib/githubPetIssues";
import { withBasePath } from "@/lib/paths";

type Tab = "pending" | "approved" | "rejected";
const GATE_KEY = "fl-board-unlocked";

async function sha256Hex(text: string) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function PetReviewBoard() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [gateError, setGateError] = useState("");
  const [tab, setTab] = useState<Tab>("pending");
  const [items, setItems] = useState<PetSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [tokenOpen, setTokenOpen] = useState(false);
  const [busy, setBusy] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setItems(await fetchPetIssues());
    } catch (e) {
      setError(e instanceof Error ? e.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GATE_KEY) === "1") setUnlocked(true);
    } catch {
      /* ignore */
    }
    setToken(getAdminToken());
  }, []);

  useEffect(() => {
    if (unlocked) void load();
  }, [unlocked, load]);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    const hex = await sha256Hex(password.trim());
    if (hex !== BOARD_PASSWORD_SHA256) {
      setGateError("密碼不對");
      return;
    }
    try {
      sessionStorage.setItem(GATE_KEY, "1");
    } catch {
      /* ignore */
    }
    setGateError("");
    setUnlocked(true);
  }

  const grouped = useMemo(
    () => ({
      pending: items.filter((i) => i.status === "pending"),
      approved: items.filter((i) => i.status === "approved"),
      rejected: items.filter((i) => i.status === "rejected"),
    }),
    [items],
  );
  const list = grouped[tab];

  async function onApprove(item: PetSubmission) {
    setBusy(item.number);
    setError("");
    try {
      await approveSubmission(item.number);
      await load();
    } catch (e) {
      if (e instanceof Error && e.message === "NO_TOKEN") {
        window.open(item.htmlUrl, "_blank", "noopener,noreferrer");
        setError("已打開 GitHub。在該則 Issue 加上標籤 pet-approved 即會上圖鑑。");
      } else {
        setError(e instanceof Error ? e.message : "核准失敗");
      }
    } finally {
      setBusy(null);
    }
  }

  async function onReject(item: PetSubmission) {
    setBusy(item.number);
    setError("");
    try {
      await rejectSubmission(item.number);
      await load();
    } catch (e) {
      if (e instanceof Error && e.message === "NO_TOKEN") {
        window.open(item.htmlUrl, "_blank", "noopener,noreferrer");
        setError("已打開 GitHub。把 Issue 關掉即可視為退回。");
      } else {
        setError(e instanceof Error ? e.message : "退回失敗");
      }
    } finally {
      setBusy(null);
    }
  }

  if (!unlocked) {
    return (
      <div className="paper-bg flex min-h-dvh items-center justify-center px-4">
        <form
          onSubmit={(e) => void unlock(e)}
          className="glass-card-strong w-full max-w-sm rounded-2xl p-6"
        >
          <h1 className="text-lg font-bold text-coffee">審核入口</h1>
          <p className="mt-1 text-xs text-coffee/55">請輸入密碼</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mt-4 w-full rounded-lg border border-coffee/15 bg-warm-white px-3 py-2 text-sm"
          />
          {gateError && (
            <p className="mt-2 text-xs text-wine">{gateError}</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-coffee py-2.5 text-sm font-medium text-warm-white"
          >
            進入
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="paper-bg min-h-dvh px-4 py-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          title="幻獸圖片審核"
          subtitle="先看大圖，再按核准或退回。"
        />

        <div className="mb-5 rounded-xl border border-coffee/10 bg-cream/40 p-4">
          <button
            type="button"
            onClick={() => setTokenOpen((v) => !v)}
            className="text-sm font-medium text-coffee"
          >
            {token
              ? "已儲存一鍵核准金鑰"
              : "選填：GitHub Token（有的話核准不必再跳 GitHub）"}
          </button>
          {tokenOpen && (
            <div className="mt-3 space-y-2">
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="ghp_…"
                className="w-full rounded-lg border border-coffee/15 bg-warm-white px-3 py-2 text-sm"
              />
              <button
                type="button"
                onClick={() => {
                  setAdminToken(token);
                  setTokenOpen(false);
                }}
                className="rounded-lg bg-coffee px-3 py-1.5 text-xs text-warm-white"
              >
                儲存
              </button>
            </div>
          )}
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {(
            [
              ["pending", `待審核 ${grouped.pending.length}`],
              ["approved", `已核准 ${grouped.approved.length}`],
              ["rejected", `已退回 ${grouped.rejected.length}`],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`rounded-full px-3 py-1.5 text-xs ${
                tab === id ? "bg-coffee text-cream" : "bg-cream/80 text-coffee/70"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => void load()}
            className="rounded-full px-3 py-1.5 text-xs text-coffee/60 hover:bg-cream"
          >
            重新整理
          </button>
        </div>

        {error && (
          <p className="mb-4 rounded-lg bg-wine/10 px-3 py-2 text-sm text-wine">
            {error}
          </p>
        )}

        {loading ? (
          <p className="text-sm text-coffee/60">讀取投稿中…</p>
        ) : list.length === 0 ? (
          <div className="glass-card rounded-xl p-6 text-sm text-coffee/70">
            這一欄目前沒有資料。
          </div>
        ) : (
          <div className="space-y-8">
            {list.map((item) => (
              <ReviewCard
                key={item.number}
                item={item}
                busy={busy === item.number}
                onApprove={() => void onApprove(item)}
                onReject={() => void onReject(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ReviewCard({
  item,
  busy,
  onApprove,
  onReject,
}: {
  item: PetSubmission;
  busy: boolean;
  onApprove: () => void;
  onReject: () => void;
}) {
  const pet = item.slug ? getPetBySlug(item.slug) : undefined;
  const liveImage = pet?.image ? withBasePath(pet.image) : null;
  const when = new Date(item.createdAt).toLocaleString("zh-TW");

  return (
    <article className="glass-card-strong overflow-hidden rounded-2xl">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.9fr)]">
        <div className="bg-[#efe4cf] p-3 sm:p-5">
          {item.images.length === 0 ? (
            <p className="flex min-h-64 items-center justify-center text-sm text-coffee/50">
              這則投稿沒有偵測到圖片
            </p>
          ) : (
            <div className="space-y-3">
              {item.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${item.petName} 投稿圖`}
                  className="mx-auto max-h-[70vh] w-full rounded-xl object-contain"
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col p-5">
          <p className="text-[11px] tracking-wide text-coffee/40">
            #{item.number} · {when}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-coffee">{item.petName}</h2>
          {pet && (
            <p className="mt-1 text-sm text-coffee/60">
              {PET_ELEMENT_LABEL[pet.element]}系
              {pet.rare ? " · 稀有" : ""}
              {" · "}
              {pet.spawnMaps.value}
            </p>
          )}
          <p className="mt-2 text-sm text-coffee/70">
            投稿者：{item.author}
            {item.credit && item.credit !== "（未填）"
              ? ` · 暱稱 ${item.credit}`
              : ""}
          </p>
          {item.notes && item.notes !== "（未填）" && (
            <p className="mt-3 rounded-lg bg-cream/70 p-3 text-sm leading-relaxed text-coffee">
              {item.notes}
            </p>
          )}
          {liveImage && (
            <div className="mt-4">
              <p className="mb-1 text-[11px] text-coffee/45">圖鑑目前的圖</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={liveImage}
                alt=""
                className="h-24 w-24 rounded-lg border border-coffee/10 bg-[#efe4cf] object-contain"
              />
            </div>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {item.status === "pending" && (
              <>
                <button
                  type="button"
                  disabled={busy}
                  onClick={onApprove}
                  className="rounded-xl bg-forest px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                >
                  {busy ? "處理中…" : "核准上圖鑑"}
                </button>
                <button
                  type="button"
                  disabled={busy}
                  onClick={onReject}
                  className="rounded-xl bg-wine/90 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                >
                  退回
                </button>
              </>
            )}
            {item.status === "approved" && (
              <p className="text-sm text-forest">已核准，部署後會出現在圖鑑。</p>
            )}
            {item.status === "rejected" && (
              <p className="text-sm text-wine">已退回。</p>
            )}
            <Link
              href={pet ? `/pets/${pet.slug}/` : "/pets/"}
              className="rounded-xl px-3 py-2.5 text-sm text-coffee/70 underline"
            >
              看圖鑑頁
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
