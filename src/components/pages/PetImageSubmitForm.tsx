"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { pets } from "@/data/pets";
import { PET_SUBMIT_OTHER, petSubmitOptions } from "@/lib/petImageSubmit";
import { submitPetImage } from "@/lib/submitPetImage";

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
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function selectedName() {
    if (slug === PET_SUBMIT_OTHER) {
      return otherName.trim() || "未命名幻獸";
    }
    return options.find((o) => o.slug === slug)?.name ?? slug;
  }

  async function onSubmit() {
    if (!file) {
      setError("請先選一張圖");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await submitPetImage({
        petName: selectedName(),
        petSlug: slug === PET_SUBMIT_OTHER ? undefined : slug,
        credit,
        notes,
        file,
      });
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "投稿失敗，請稍後再試");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="glass-card-strong rounded-xl p-6 text-center">
        <p className="text-sm font-medium text-coffee">已收到，謝謝</p>
        <p className="mt-2 text-sm text-coffee/65">
          不用註冊。站長過目後才會出現在圖鑑，不會立刻上線。
        </p>
      </div>
    );
  }

  return (
    <form
      className="glass-card-strong space-y-4 rounded-xl p-6"
      onSubmit={(e) => {
        e.preventDefault();
        void onSubmit();
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
          圖片
        </label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-coffee/10 file:px-3 file:py-1 file:text-coffee"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-coffee">
          投稿暱稱（選填，可標在圖鑑）
        </label>
        <input
          value={credit}
          onChange={(e) => setCredit(e.target.value)}
          placeholder="遊戲 ID 或暱稱"
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
          placeholder="例如：野生個體、哪個地圖拍的"
          className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
        />
      </div>

      {error ? <p className="text-sm text-wine">{error}</p> : null}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-xl bg-coffee py-3 text-sm font-medium text-warm-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {busy ? "送出中…" : "送出投稿"}
      </button>

      <p className="text-center text-[11px] text-coffee/45">
        不用註冊任何帳號。圖片不會立刻上線，站長過目後才會換上圖鑑。
      </p>
    </form>
  );
}
