import { Sidebar, MobileHeader, MobileNav } from "@/components/layout/Sidebar";
import { ContextPanel } from "@/components/layout/ContextPanel";

export function AppShell({
  children,
  showContext = true,
}: {
  children: React.ReactNode;
  showContext?: boolean;
}) {
  return (
    <div className="paper-bg min-h-dvh">
      <MobileHeader />
      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar />
        <main className="min-h-dvh flex-1 px-4 pb-24 pt-4 md:px-6 lg:pb-8 lg:pt-6">
          <div className="flex gap-6">
            <div className="min-w-0 flex-1">{children}</div>
            {showContext && <ContextPanel />}
          </div>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
