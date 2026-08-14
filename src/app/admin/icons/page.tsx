"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { AppIcon, ICON_NAMES } from "@/components/ui/Icon";
import { ICON_OVERRIDES } from "@/data/iconOverrides";

export default function IconAdminPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="圖示一覽"
        subtitle="首頁與側欄用的圖示已放進網站，不需要再上傳。"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {ICON_NAMES.map((name) => {
          const overridden = Boolean(ICON_OVERRIDES[name]);
          return (
            <div key={name} className="glass-card rounded-xl p-4">
              <div className="mb-3 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-cream/80">
                <AppIcon name={name} className="h-16 w-16" />
              </div>
              <p className="font-mono text-xs font-semibold text-coffee">{name}</p>
              <p className="mt-0.5 text-[10px] text-coffee/50">
                {overridden ? "已套用繪製圖示" : "線稿備用"}
              </p>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
