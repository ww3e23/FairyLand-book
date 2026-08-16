"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { pets } from "@/data/pets";
import {
  PET_SUBMIT_OTHER,
  buildPetImageIssue,
  petSubmitOptions,
} from "@/lib/petImageSubmit";

export function PetImageSubmitForm() {
  const searchParams = useSearchParams();
  const options = useMemo(() => petSubmitOptions(), []);
  const preset = searchParams.get("pet") ?? "";
  const [slug, setSlug] = useState(
    options.some((o) => o.slug === preset) ? preset : pets[0]?.slug ?? PET_SUBMIT_OTHER,
  );
  const [otherName, setOtherName] = useState("");
  const [credit, setCredit] = useState("");
  const [notes, setNotes] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function selectedName() {
    if (slug === PET_SUBMIT_OTHER) {
      return otherName.trim() || "未命名幻獸";
    }
    return options.find((o) => o.slug === slug)?.name ?? slug;
  }

  function openIssue() {
    const issue = buildPetImageIssue({
      petName: selectedName(),
      petSlug: slug === PET_SUBMIT_OTHER ? undefined : slug,
      credit,
      notes,
      imageUrl,
    });
    window.open(issue.url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="glass-card-strong space-y-4 rounded-xl p-6"
      onSubmit={(e) => {
        e.preventDefault();
        openIssue();
      }}
    >
      <div>
        <label className="mb-1 block text-sm font-medium text-coffee">
          哪一隻幻獸
        </label>
        <select
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm text-coffee-dark focus:outline-none focus:ring-2 focus:ring-brass/40"
        >
          {options.map((o) => (
            <option key={o.slug} value={o.slug}>
              {o.name}
            </option>
          ))}
        </select>
      </div>

      {slug === PET_SUBMIT_OTHER && (
        <div>
          <label className="mb-1 block text-sm font-medium text-coffee">
            幻獸名稱
          </label>
          <input
            value={otherName}
            onChange={(e) => setOtherName(e.target.value)}
            required
            placeholder="例如：金度鳥"
            className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
          />
        </div>
      )}

      <div>
        <label className="mb-1 block text-sm font-medium text-coffee">
          投稿暱稱（選填，可標在圖鑑）
        </label>
        <input
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
          placeholder="例如：巴哈 ID"
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-coffee">
          說明（選填）
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="例如：野生個體、哪個地圖拍的、或外觀哪裡跟現在圖不一樣"
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-coffee">
          圖床連結（選填）
        </label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https:// 已上傳的圖"
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
        />
        <p className="mt-1 text-[11px] text-coffee/50">
          沒有連結也沒關係：下一頁可以把檔案直接拖進 GitHub Issue。
        </p>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-coffee py-3 text-sm font-medium text-warm-white transition-opacity hover:opacity-90"
      >
        前往投稿（GitHub，可拖圖片）
      </button>

      <p className="text-center text-[11px] text-coffee/45">
        需要免費 GitHub 帳號。圖片不會立刻上線，站長過目後才會換上圖鑑。
      </p>
    </form>
  );
}
