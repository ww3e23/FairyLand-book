"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/ContextPanel";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // V1: 前端暂存，后续接 Directus / API
    setSubmitted(true);
  }

  return (
    <AppShell showContext={false}>
      <PageHeader
        title="情报回报"
        subtitle="发现资料错误、版本更新或想补充新资讯？"
      />

      {submitted ? (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-sm font-medium text-coffee">感谢你的回报！</p>
          <p className="mt-1 text-xs text-coffee/60">
            我们已收到（V1 阶段暂存于本地，后续将接入后台审核系统）。
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="glass-card-strong space-y-4 rounded-xl p-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              回报类型
            </label>
            <select
              name="type"
              required
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm text-coffee-dark focus:outline-none focus:ring-2 focus:ring-brass/40"
            >
              <option value="error">资料错误</option>
              <option value="outdated">版本已更新</option>
              <option value="incomplete">内容不足</option>
              <option value="new">提供新资料</option>
              <option value="other">其他</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              相关页面（选填）
            </label>
            <input
              type="text"
              name="page"
              placeholder="例如：/skills/兽王劈"
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              说明
            </label>
            <textarea
              name="content"
              required
              rows={4}
              placeholder="请描述问题或补充内容……"
              className="w-full rounded-lg border border-coffee/15 bg-warm-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brass/40"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-coffee">
              来源网址（选填）
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
            送出回报
          </button>

          <p className="text-center text-[11px] text-coffee/45">
            回报不会直接修改正式资料，会先进入待审核。
          </p>
        </form>
      )}
    </AppShell>
  );
}
