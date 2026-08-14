import type { SourceRef } from "@/lib/types";

export const SOURCES = {
  official: {
    title: "童話：王國復甦官網",
    url: "https://nfl.lager.com.tw/index/index",
    reliability: 5 as const,
  },
  bahamutWiki: {
    title: "巴哈姆特童話攻略百科",
    url: "https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90",
    reliability: 3 as const,
  },
  bahamutForum: {
    title: "巴哈姆特童話 Online 哈啦板",
    url: "https://forum.gamer.com.tw/B.php?bsn=4211",
    reliability: 3 as const,
  },
  baojia: {
    title: "敗家一族童話資料網",
    url: "https://dsps.case.eorz.net/",
    reliability: 2 as const,
  },
  oldOfficialGuide: {
    title: "童話官方遊戲指南（舊版）",
    url: "http://fairyland.lager.com.tw/01guidebook/12_job.html",
    reliability: 2 as const,
  },
  playerItemTable: {
    title: "玩家提供之遊戲資料表（調整藥丸效果與最低限制）",
    url: "https://github.com/ww3e23/FairyLand-book",
    reliability: 4 as const,
  },
  officialScrolls: {
    title: "童話官方遊戲指南：參考捲軸（調整系／搗蛋系丸子）",
    url: "http://fairyland.lager.com.tw/01guidebook/31_things.html",
    reliability: 2 as const,
  },
  bahamutSpecialItems: {
    title: "巴哈姆特攻略百科：特殊道具（調整道具）",
    url: "https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E7%89%B9%E6%AE%8A%E9%81%93%E5%85%B7",
    reliability: 3 as const,
  },
  bahamutRebirthPts: {
    title: "巴哈姆特哈啦板：轉生後點數與屬調／調水用法",
    url: "https://forum.gamer.com.tw/C.php?bsn=4211&snA=9805",
    reliability: 3 as const,
  },
  officialKaguya: {
    title: "官方公告：竹取物語資料片（地圖、月光石強化、幻獸神啟）",
    url: "https://nfl.lager.com.tw/index/index_news?id=827",
    reliability: 5 as const,
  },
  officialBlessing: {
    title: "官方公告：童話祝福卡",
    url: "https://nfl.lager.com.tw/index/index_news?id=3",
    reliability: 5 as const,
  },
  officialBerserkerSkill: {
    title: "官方技能調整：獸王劈／獸王九擊",
    url: "https://nfl.lager.com.tw/index/index_news?id=82",
    reliability: 5 as const,
  },
  bahamutBlessing: {
    title: "巴哈哈啦板：想買祝福卡你要了解的事情",
    url: "https://forum.gamer.com.tw/C.php?bsn=4211&snA=10626",
    reliability: 3 as const,
  },
} satisfies Record<string, SourceRef>;
