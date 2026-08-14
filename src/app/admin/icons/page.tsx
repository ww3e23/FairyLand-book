"use client";

import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";
import { AppIcon, ICON_NAMES } from "@/components/ui/Icon";
import { ICON_OVERRIDES } from "@/data/iconOverrides";

export default function IconAdminPage() {
  return (
    <AppShell showContext={false}>
      <PageHeader
        title="圖示管理"
        subtitle="目前使用內建線稿。若要換成自己的圖，把檔案放到 public/icons/ 並填覆寫表。"
      />

      <div className="glass-card-strong mb-6 space-y-2 rounded-xl p-5 text-sm text-coffee/80">
        <p className="font-medium text-coffee">上傳方式（靜態網站）</p>
        <ol className="list-inside list-decimal space-y-1 text-xs leading-relaxed">
          <li>
            把 PNG 或 SVG 放到專案的 <code className="text-brown">public/icons/</code>
            ，檔名對應下方鍵名，例如 <code className="text-brown">shield.png</code>
          </li>
          <li>
            編輯 <code className="text-brown">src/data/iconOverrides.ts</code>：
          </li>
        </ol>
        <pre className="overflow-x-auto rounded-lg bg-coffee/8 p-3 text-[11px] text-coffee">
{`export const ICON_OVERRIDES = {
  shield: "/icons/shield.png",
};`}
        </pre>
        <p className="text-xs text-coffee/55">
          GitHub Pages 是靜態站，瀏覽器無法把圖直接存進倉庫；改檔後 push 就會自動部署。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {ICON_NAMES.map((name) => {
          const overridden = Boolean(ICON_OVERRIDES[name]);
          return (
            <div key={name} className="glass-card rounded-xl p-4">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-coffee/8 text-coffee">
                <AppIcon name={name} className="h-6 w-6" />
              </div>
              <p className="font-mono text-xs font-semibold text-coffee">{name}</p>
              <p className="mt-0.5 text-[10px] text-coffee/50">
                {overridden ? "使用自訂圖" : "內建線稿"}
              </p>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
