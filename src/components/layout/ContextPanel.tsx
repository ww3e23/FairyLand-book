import Link from "next/link";
import { QUICK_LINKS, HOT_SEARCHES } from "@/data/index";
import { VERSION_LABEL } from "@/data/version";

export function ContextPanel() {
  return (
    <aside className="hidden xl:block xl:w-64 shrink-0">
      <div className="sticky top-0 space-y-4 py-6 pr-6">
        <div className="glass-card rounded-xl p-4">
          <h3 className="mb-3 text-sm font-semibold text-coffee">快速链接</h3>
          <div className="grid grid-cols-2 gap-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="glass-overlay rounded-lg px-2.5 py-2 text-center text-xs text-coffee/80 transition-colors hover:bg-cream/80 hover:text-coffee"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-4">
          <h3 className="mb-2 text-sm font-semibold text-coffee">版本状态</h3>
          <p className="text-xs text-coffee/70">目前资料适用版本</p>
          <p className="mt-1 text-sm font-medium text-coffee">{VERSION_LABEL}</p>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
            🟢 最新
          </span>
          <p className="mt-2 text-[11px] text-coffee/50">最后更新：2026-08-11</p>
        </div>

        <div className="glass-card rounded-xl p-4">
          <h3 className="mb-3 text-sm font-semibold text-coffee">热门搜索</h3>
          <ol className="space-y-1.5">
            {HOT_SEARCHES.slice(0, 5).map((term, i) => (
              <li key={term}>
                <Link
                  href={`/search/?q=${encodeURIComponent(term)}`}
                  className="flex items-center gap-2 text-sm text-coffee/80 hover:text-coffee"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-coffee/8 text-[10px] font-bold text-coffee/60">
                    {i + 1}
                  </span>
                  {term}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </aside>
  );
}

export function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-coffee md:text-3xl">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-sm text-coffee/65">{subtitle}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function ReportSection() {
  return (
    <div className="glass-card mt-8 rounded-xl border border-brass/20 p-5">
      <h3 className="text-sm font-semibold text-coffee">这项资料有问题？</h3>
      <p className="mt-1 text-xs text-coffee/65">
        发现错误、版本更新或想补充资料？欢迎回报，我们会列入待审核。
      </p>
      <Link
        href="/report"
        className="mt-3 inline-flex items-center gap-1 rounded-lg bg-coffee px-4 py-2 text-xs font-medium text-warm-white transition-opacity hover:opacity-90"
      >
        提交回报
      </Link>
    </div>
  );
}
