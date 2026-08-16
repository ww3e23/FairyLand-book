import { PET_SUBMIT_NTFY_TOPIC } from "@/data/features";

const MARKER = "來源：童協會投稿頁";

/** 圖鑑相框比例。裁切框必須跟這個一致。 */
export const PET_PHOTO_ASPECT = 1;
export const PET_PHOTO_OUTPUT_SIZE = 900;

export type SquareCrop = {
  x: number;
  y: number;
  size: number;
};

export async function cropToSquareFile(
  source: HTMLImageElement | ImageBitmap,
  crop: SquareCrop,
): Promise<File> {
  const canvas = document.createElement("canvas");
  canvas.width = PET_PHOTO_OUTPUT_SIZE;
  canvas.height = PET_PHOTO_OUTPUT_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("無法裁切圖片");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    source,
    crop.x,
    crop.y,
    crop.size,
    crop.size,
    0,
    0,
    PET_PHOTO_OUTPUT_SIZE,
    PET_PHOTO_OUTPUT_SIZE,
  );
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.9),
  );
  if (!blob) throw new Error("無法輸出裁切圖");
  return new File([blob], "pet.jpg", { type: "image/jpeg" });
}

export async function compressPetImage(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    const max = 1200;
    let width = bitmap.width;
    let height = bitmap.height;
    if (width > max) {
      height = Math.round((height * max) / width);
      width = max;
    }
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("無法處理圖片");
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.84),
    );
    if (!blob) throw new Error("無法壓縮圖片");
    if (blob.size > 1_800_000) {
      const smaller = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", 0.7),
      );
      if (smaller) return smaller;
    }
    return blob;
  } catch {
    if (file.size <= 1_800_000) return file;
    throw new Error("這張圖太大或格式無法處理，請改用遊戲截圖 JPG／PNG");
  }
}

export async function submitPetImage(input: {
  petName: string;
  petSlug?: string;
  credit?: string;
  notes?: string;
  file: File | Blob;
}) {
  const file =
    input.file instanceof File
      ? input.file
      : new File([input.file], "pet.jpg", {
          type: input.file.type || "image/jpeg",
        });
  const blob = await compressPetImage(file);

  const message = [
    MARKER,
    `名稱：${input.petName}`,
    input.petSlug ? `編號：${input.petSlug}` : "",
    `暱稱：${input.credit?.trim() || "（未填）"}`,
    `說明：${input.notes?.trim() || "（未填）"}`,
  ]
    .filter(Boolean)
    .join(" | ");

  const res = await fetch(`https://ntfy.sh/${PET_SUBMIT_NTFY_TOPIC}`, {
    method: "POST",
    headers: {
      Title: encodeURIComponent(`[幻獸圖] ${input.petName}`.slice(0, 80)),
      Filename: "pet.jpg",
      Message: encodeURIComponent(message),
      Tags: "camera,xh28",
    },
    body: blob,
  });
  if (!res.ok) {
    throw new Error("投稿沒送出去，請稍後再試一次");
  }
}

export function blobFromDataUrl(dataUrl: string): Blob | null {
  const m = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!m) return null;
  const binary = atob(m[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: m[1] || "image/jpeg" });
}
