"use client";

import { useEffect, useRef, useState } from "react";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";
import { buildPetImageIssue } from "@/lib/petImageSubmit";
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
  const [pendingFile, setPendingFile] = useState(false);
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
    const url = URL.createObjectURL(file);
    setLocalPreview(url);
    setPendingFile(true);
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
  }

  function sendToReview() {
    const issue = buildPetImageIssue({
      petName,
      petSlug,
      notes: "請把選好的圖拖進下面，再按 Submit / 提交新Issue。",
    });
    window.open(issue.url, "_blank", "noopener,noreferrer");
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
          <img src={shown} alt={petName} className="h-full w-full object-contain" />
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
      {enabled && pendingFile && !live && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            sendToReview();
          }}
          className="mt-2 w-full rounded-lg bg-coffee px-2 py-1.5 text-[11px] font-medium text-warm-white"
        >
          確認投稿
        </button>
      )}
      {enabled && pendingFile && !live && (
        <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-coffee/55">
          現在只在你電腦上看得到。按確認投稿，在 GitHub 把圖拖進去並提交後，幾分鐘才會出現在網站上。
        </p>
      )}
      {live && imageKind === "player" && (
        <p className="mt-1 text-[11px] text-coffee/50">玩家提供</p>
      )}
    </div>
  );
}
