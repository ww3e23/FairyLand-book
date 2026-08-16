"use client";

import { useRef, useState } from "react";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";
import { buildPetImageIssue } from "@/lib/petImageSubmit";
import { withBasePath } from "@/lib/paths";

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
  const [preview, setPreview] = useState<string | null>(null);
  const [picked, setPicked] = useState(false);
  const enabled = PLAYER_PET_IMAGE_SUBMISSIONS;
  const shown = preview ?? (image ? withBasePath(image) : null);
  const box =
    size === "sm"
      ? "h-28 w-28 sm:h-32 sm:w-32"
      : "aspect-square w-full max-w-sm";

  function pick() {
    if (!enabled) return;
    inputRef.current?.click();
  }

  function onFile(file: File | undefined) {
    if (!file || !file.type.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
    setPicked(true);
    const issue = buildPetImageIssue({
      petName,
      petSlug,
      notes: `檔名：${file.name}`,
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
        aria-label={enabled ? `上傳${petName}外觀圖` : `${petName}外觀`}
      >
        {shown ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={shown}
            alt={petName}
            className="h-full w-full object-contain"
          />
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 text-center text-[11px] leading-snug text-coffee/45">
            <span className="text-lg" aria-hidden>
              +
            </span>
            {enabled ? "點這裡上傳外觀圖" : "尚無外觀圖"}
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
      {picked && (
        <p className="mt-1 max-w-[12rem] text-[11px] leading-snug text-coffee/55">
          已打開投稿頁。把剛選的圖拖進去按 Submit，審核後才會出現在圖鑑。
        </p>
      )}
      {shown && imageKind === "player" && !preview && (
        <p className="mt-1 text-[11px] text-coffee/50">玩家提供</p>
      )}
    </div>
  );
}
