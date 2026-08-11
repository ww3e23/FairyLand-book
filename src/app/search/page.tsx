import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-coffee/60">加载搜索…</div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
