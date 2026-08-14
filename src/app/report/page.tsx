"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AppShell showContext={false}>
      <PageHeader
        title="情報回報"
        subtitle="發現資料錯誤、版本更新或想補充新資訊？"
      />

      {submitted ? (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm font-medium text-coffee">感謝你的回報！</p>
          <p className="mt-1 text-xs text-coffee/60">
            我們已收到（V1 階段暫存於本地，後續將接入後台審核系統）。
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card-strong space-y-4 rounded-xl p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              回報類型
            </label>
            <select
              name="type"
              required
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm text-coffee-dark focus:outline-none focus:ring-2 focus:ring-brass/40"
            >
              <option value="error">資料錯誤</option>
              <option value="outdated">版本已更新</option>
              <option value="incomplete">內容不足</option>
              <option value="new">提供新資料</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              相關頁面（選填）
            </label>
            <input
              type="text"
              name="page"
              placeholder="例如：/skills/beast-king-slash/"
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              說明
            </label>
            <textarea
              name="content"
              required
              rows={4}
              placeholder="請描述問題或補充內容……"
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              來源網址（選填）
            </label>
            <input
              type="url"
              name="source"
              placeholder="https://"
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-coffee py-3 text-sm font-medium text-warm-white transition-opacity hover:opacity-90"
          >
            送出回報
          </button>

          <p className="text-center text-[11px] text-coffee/45">
            回報不會直接修改正式資料，會先進入待審核。
          </p>
        </form>
      )}
    </AppShell>
  );
}
