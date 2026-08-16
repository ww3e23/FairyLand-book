import { PetReviewBoard } from "@/components/pages/PetReviewBoard";

export const metadata = {
  title: "審核",
  robots: { index: false, follow: false },
};

export default function BoardPage() {
  return <PetReviewBoard />;
}
