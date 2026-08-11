import type { FieldStatus, TrustStatus } from "@/lib/types";

const TRUST_CONFIG: Record<
  TrustStatus,
  { label: string; emoji: string; className: string }
> = {
  verified: {
    label: "现版本已确认",
    emoji: "🟢",
    className: "bg-forest/10 text-forest border-forest/20",
  },
  pending: {
    label: "尚待玩家确认",
    emoji: "🟡",
    className: "bg-brass/15 text-coffee border-brass/30",
  },
  outdated: {
    label: "旧版／可能已失效",
    emoji: "🔴",
    className: "bg-wine/10 text-wine border-wine/20",
  },
  conflict: {
    label: "来源存在差异",
    emoji: "⚠️",
    className: "bg-orange-brown/15 text-coffee border-orange-brown/30",
  },
};

export function TrustBadge({ status }: { status: TrustStatus }) {
  const config = TRUST_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.className}`}
    >
      <span aria-hidden>{config.emoji}</span>
      {config.label}
    </span>
  );
}

const FIELD_STATUS_LABEL: Record<FieldStatus, string> = {
  verified: "已确认",
  uncertain: "尚不确定",
  unavailable: "目前无资料",
  conflict: "来源有差异",
};

export function FieldStatusTag({ status }: { status: FieldStatus }) {
  const colors: Record<FieldStatus, string> = {
    verified: "text-forest bg-forest/10",
    uncertain: "text-coffee bg-brass/15",
    unavailable: "text-coffee/60 bg-cream/80",
    conflict: "text-wine bg-wine/10",
  };
  return (
    <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${colors[status]}`}>
      {FIELD_STATUS_LABEL[status]}
    </span>
  );
}
