"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  cropToSquareFile,
  type SquareCrop,
} from "@/lib/submitPetImage";

function largestCenteredSquare(width: number, height: number): SquareCrop {
  const size = Math.min(width, height);
  return {
    x: Math.round((width - size) / 2),
    y: Math.round((height - size) / 2),
    size,
  };
}

function clampCrop(crop: SquareCrop, width: number, height: number): SquareCrop {
  const size = Math.max(32, Math.min(crop.size, width, height));
  return {
    size,
    x: Math.min(Math.max(0, crop.x), Math.max(0, width - size)),
    y: Math.min(Math.max(0, crop.y), Math.max(0, height - size)),
  };
}

export function PetImageCropper({
  src,
  onCancel,
  onConfirm,
}: {
  src: string;
  onCancel: () => void;
  onConfirm: (file: File, previewUrl: string) => void;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<SquareCrop | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [overlay, setOverlay] = useState<{
    left: number;
    top: number;
    size: number;
  } | null>(null);
  const drag = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    origin: SquareCrop;
  } | null>(null);

  const layout = useCallback(() => {
    const img = imgRef.current;
    if (!img?.naturalWidth) return null;
    const box = img.getBoundingClientRect();
    const scale = Math.min(box.width / img.naturalWidth, box.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    return {
      scale,
      left: box.left + (box.width - w) / 2,
      top: box.top + (box.height - h) / 2,
      w,
      h,
      nw: img.naturalWidth,
      nh: img.naturalHeight,
    };
  }, []);

  function onImageReady() {
    const img = imgRef.current;
    if (!img) return;
    setCrop(largestCenteredSquare(img.naturalWidth, img.naturalHeight));
  }

  useLayoutEffect(() => {
    const img = imgRef.current;
    const stage = stageRef.current;
    if (!img || !stage || !crop) {
      setOverlay(null);
      return;
    }
    const view = layout();
    const stageBox = stage.getBoundingClientRect();
    if (!view) return;
    setOverlay({
      left: view.left - stageBox.left + crop.x * view.scale,
      top: view.top - stageBox.top + crop.y * view.scale,
      size: crop.size * view.scale,
    });
  }, [crop, layout]);

  useEffect(() => {
    const onResize = () => setCrop((c) => (c ? { ...c } : c));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [onCancel]);

  function onPointerDown(e: React.PointerEvent) {
    if (!crop) return;
    e.preventDefault();
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origin: crop,
    };
  }

  function onPointerMove(e: React.PointerEvent) {
    const d = drag.current;
    const view = layout();
    if (!d || d.pointerId !== e.pointerId || !view) return;
    const dx = (e.clientX - d.startX) / view.scale;
    const dy = (e.clientY - d.startY) / view.scale;
    setCrop(
      clampCrop(
        {
          ...d.origin,
          x: d.origin.x + dx,
          y: d.origin.y + dy,
        },
        view.nw,
        view.nh,
      ),
    );
  }

  function onPointerUp(e: React.PointerEvent) {
    if (drag.current?.pointerId === e.pointerId) drag.current = null;
  }

  function onSizeChange(nextSize: number) {
    const view = layout();
    if (!crop || !view) return;
    const cx = crop.x + crop.size / 2;
    const cy = crop.y + crop.size / 2;
    setCrop(
      clampCrop(
        {
          size: nextSize,
          x: cx - nextSize / 2,
          y: cy - nextSize / 2,
        },
        view.nw,
        view.nh,
      ),
    );
  }

  async function confirm() {
    const img = imgRef.current;
    if (!img || !crop) return;
    setBusy(true);
    setError("");
    try {
      const file = await cropToSquareFile(img, crop);
      const previewUrl = URL.createObjectURL(file);
      onConfirm(file, previewUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "裁切失敗");
    } finally {
      setBusy(false);
    }
  }

  const view = layout();

  const node = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-coffee-dark/70 px-3 py-6"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="裁切幻獸圖"
    >
      <div className="glass-card-strong flex max-h-[95dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl">
        <div className="px-4 pt-4">
          <p className="text-sm font-bold text-coffee">裁成圖鑑相框比例</p>
          <p className="mt-1 text-xs leading-relaxed text-coffee/60">
            拖動方框對準幻獸，拉桿可放大縮小。切出來的範圍會跟圖鑑的正方形相框一樣，不會留白邊。
          </p>
        </div>

        <div
          ref={stageRef}
          className="relative mx-4 mt-3 min-h-52 overflow-hidden rounded-xl bg-[#3a2f24]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={src}
            alt=""
            onLoad={onImageReady}
            className="mx-auto max-h-[58dvh] w-full object-contain"
            draggable={false}
          />
          {overlay && (
            <div
              className="absolute cursor-move touch-none rounded-xl border-2 border-warm-white shadow-[0_0_0_9999px_rgba(44,33,24,0.55)]"
              style={{
                left: overlay.left,
                top: overlay.top,
                width: overlay.size,
                height: overlay.size,
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />
          )}
        </div>

        {crop && view && (
          <label className="mt-3 block px-4 text-[11px] text-coffee/55">
            裁切範圍
            <input
              type="range"
              min={Math.round(Math.min(view.nw, view.nh) * 0.25)}
              max={Math.min(view.nw, view.nh)}
              value={crop.size}
              onChange={(e) => onSizeChange(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </label>
        )}

        {error ? <p className="px-4 pt-2 text-sm text-wine">{error}</p> : null}

        <div className="flex gap-2 p-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl border border-coffee/15 py-2.5 text-sm text-coffee/80"
          >
            取消
          </button>
          <button
            type="button"
            disabled={busy || !crop}
            onClick={() => void confirm()}
            className="flex-1 rounded-xl bg-coffee py-2.5 text-sm font-medium text-warm-white disabled:opacity-50"
          >
            {busy ? "處理中…" : "完成裁切"}
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(node, document.body);
}
