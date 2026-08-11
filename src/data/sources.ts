import type { SourceRef } from "@/lib/types";

export const SOURCES = {
  official: {
    title: "童话：王国复苏官网",
    url: "https://nfl.lager.com.tw/index/index",
    reliability: 5 as const,
  },
  bahamutWiki: {
    title: "巴哈姆特童话攻略百科",
    url: "https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90",
    reliability: 3 as const,
  },
  bahamutForum: {
    title: "巴哈姆特童话 Online 哈啦板",
    url: "https://forum.gamer.com.tw/B.php?bsn=4211",
    reliability: 3 as const,
  },
  baojia: {
    title: "败家一族童话资料网",
    url: "https://dsps.case.eorz.net/",
    reliability: 2 as const,
  },
  oldOfficialGuide: {
    title: "童话官方游戏指南（旧版）",
    url: "http://fairyland.lager.com.tw/01guidebook/12_job.html",
    reliability: 2 as const,
  },
} satisfies Record<string, SourceRef>;
