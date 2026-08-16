import Link from "next/link";
import { PLAYER_PET_IMAGE_SUBMISSIONS } from "@/data/features";
import { pageHref } from "@/lib/paths";

export function PlayerPetImageCta({
  petSlug,
}: {
  petSlug?: string;
}) {
  if (!PLAYER_PET_IMAGE_SUBMISSIONS) return null;

  const href = petSlug
    ? `${pageHref("pets", "submit")}?pet=${encodeURIComponent(petSlug)}`
    : pageHref("pets", "submit");

  return (
    <p className="text-sm text-coffee/70">
      圖不像？可提供遊戲內截圖或自己畫的外觀，約幾分鐘會出現在圖鑑。禁止血腥、色情。
      {" "}
      <Link href={href} className="text-brown underline underline-offset-2">
        提供圖片
      </Link>
    </p>
  );
}
