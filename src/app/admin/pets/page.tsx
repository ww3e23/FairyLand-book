import { notFound } from "next/navigation";
import { PetReviewClient } from "./PetReviewClient";

export const metadata = {
  title: "幻獸圖片審核",
  robots: { index: false, follow: false },
};

export default function PetReviewPage() {
  if (process.env.GITHUB_PAGES === "true") {
    notFound();
  }
  return <PetReviewClient />;
}
