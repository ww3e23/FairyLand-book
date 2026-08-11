import Link from "next/link";
import type { EntityType } from "@/lib/types";
import { getEntityHref } from "@/lib/entities";

export function EntityLink({
  type,
  id,
  label,
}: {
  type: EntityType;
  id: string;
  label: string;
}) {
  const href = getEntityHref(type, id);
  if (!href) {
    return (
      <span className="glass-card rounded-lg px-3 py-2 text-sm text-coffee/50">
        {label}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="glass-card rounded-lg px-3 py-2 text-sm text-coffee hover:shadow-sm"
    >
      {label}
    </Link>
  );
}
