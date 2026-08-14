import { getGuideBySlug } from "@/data/guides";
import { GuideDetail } from "@/components/pages/GuideDetail";
import { ComingSoonPage } from "@/components/pages/ComingSoon";

export default function JobsPage() {
  const guide = getGuideBySlug("work-basics");
  if (!guide) {
    return (
      <ComingSoonPage title="工作技能" subtitle="完整工作資料庫建設中" />
    );
  }
  return <GuideDetail guide={guide} />;
}
