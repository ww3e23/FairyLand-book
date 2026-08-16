"use client";

import { useEffect, useRef, useState } from "react";
import { PetImageCropper } from "@/components/pages/PetImageCropper";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";
import { blobFromDataUrl, submitPetImage } from "@/lib/submitPetImage";
import { withBasePath } from "@/lib/paths";

function previewKey(slug: string) {
  return `pet-photo-preview:${slug}`;
}

export function PetPhotoSlot({
  petName,
  petSlug,
  image,
  imageKind,
  size = "md",
}: {
  petName: string;
  petSlug: string;
  image?: string;
  imageKind?: "site-redraw" | "player";
  size?: "sm" | "md";
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");
  const enabled = PLAYER_PET_IMAGE_SUBMISSIONS;
  const live = image ? withBasePath(image) : null;
  const shown = live ?? localPreview;
  const box =
    size === "sm"
      ? "h-28 w-28 sm:h-32 sm:w-32"
      : "aspect-square w-full max-w-sm";

  useEffect(() => {
    if (live) return;
    try {
      const saved = localStorage.getItem(previewKey(petSlug));
      if (saved) setLocalPreview(saved);
    } catch {
      /* ignore */
    }
  }, [live, petSlug]);

  function pick() {
    if (!enabled) return;
    inputRef.current?.click();
  }

  function onFile(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) return;
    setSent(false);
    setSendError("");
    setCropSrc(URL.createObjectURL(file));
  }

  async function sendToReview() {
    const file =
      pendingFile ??
      (localPreview?.startsWith("data:") ? blobFromDataUrl(localPreview) : null);
    if (!file) {
      setSendError("請先選一張圖");
      return;
    }
    setSending(true);
    setSendError("");
    try {
      await submitPetImage({ petName, petSlug, file });
      setSent(true);
    } catch (e) {
      setSendError(e instanceof Error ? e.message : "投稿失敗，請稍後再試");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="shrink-0">
      <button
        type="button"
        onClick={pick}
        disabled={!enabled && !shown}
        className={`${box} overflow-hidden rounded-xl border border-dashed border-coffee/25 bg-[#efe4cf] ${
          enabled ? "cursor-pointer hover:border-coffee/50" : "cursor-default"
        }`}
        aria-label={enabled ? `選擇${petName}外觀圖` : `${petName}外觀`}
      >
        {shown ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shown} alt={petName} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center text-[11px] leading-snug text-coffee/45">
            <span className="text-lg" aria-hidden>
              +
            </span>
            {enabled ? "點這裡選圖" : "尚無外觀圖"}
          </span>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          onFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      {enabled && (pendingFile || localPreview) && !live && !sent && (
        <button
          type="button"
          disabled={sending}
          onClick={(e) => {
            e.stopPropagation();
            void sendToReview();
          }}
          className="mt-2 w-full rounded-lg bg-coffee px-2 py-1.5 text-[11px] font-medium text-warm-white disabled:opacity-50"
        >
          {sending ? "送出中…" : "確認投稿"}
        </button>
      )}
      {enabled && sent && !live && (
        <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-coffee/55">
          已送到。約幾分鐘會出現在圖鑑，不用等審核。
        </p>
      )}
      {enabled && sendError ? (
        <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-wine">
          {sendError}
        </p>
      ) : null}
      {enabled && (pendingFile || localPreview) && !live && !sent && !sendError && (
        <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-coffee/55">
          已裁成相框比例。按確認投稿即可，不用註冊。
        </p>
      )}
      {cropSrc && (
        <PetImageCropper
          src={cropSrc}
          onCancel={() => {
            URL.revokeObjectURL(cropSrc);
            setCropSrc(null);
          }}
          onConfirm={(file, previewUrl) => {
            URL.revokeObjectURL(cropSrc);
            setCropSrc(null);
            setPendingFile(file);
            setLocalPreview(previewUrl);
            const reader = new FileReader();
            reader.onload = () => {
              try {
                if (typeof reader.result === "string") {
                  localStorage.setItem(previewKey(petSlug), reader.result);
                }
              } catch {
                /* quota */
              }
            };
            reader.readAsDataURL(file);
          }}
        />
      )}
      {live && imageKind === "player" && (
        <p className="mt-1 text-[11px] text-coffee/50">玩家提供</p>
      )}
    </div>
  );
}
