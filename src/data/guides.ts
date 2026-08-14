import type { GuideEntity, UpdateEntry } from "@/lib/types";
import { SOURCES } from "./sources";

export const guides: GuideEntity[] = [
  {
    id: "guide-returning-2026",
    slug: "2026回鍋玩家完整指南",
    name: "2026 回鍋玩家完整指南",
    aliases: ["回鍋指南", "回鍋懶人包"],
    guideType: "returning",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    isFeatured: true,
    sources: [SOURCES.official, SOURCES.bahamutForum],
    metaTitle: "2026 回鍋玩家完整指南－童協會",
    metaDescription:
      "童話 Online 王國復甦回鍋玩家指南，了解版本差異、入門方向與常用資料查詢方式。",
    summary:
      "幫助回鍋與新手快速了解王國復甦版本差異、常用系統與查詢資料的起點。",
    content: `## 歡迎回到童話世界

《童話：王國復甦》自 2019 年重啟以來，已陸續開放多個資料片。截至 **竹取物語**（2025/10），遊戲內容與早年免費版或舊攻略網站上的資訊可能已有差異。

本指南不試圖一次講完所有內容，而是幫你建立**查資料的習慣**——遇到具體問題，優先來童協會搜尋。

---

## 版本先搞懂

| 你看到的資料來源 | 可能的問題 |
|---|---|
| 敗家一族 | 資料豐富但多為舊版，部分已被玩家指出錯誤 |
| 巴哈姆特 Wiki | 結構化較好，但更新頻率低，版本標註不足 |
| 巴哈姆特討論板 | 近期驗證資訊多，但分散在各帖 |
| 官方公告 | 最可靠，但偏活動與改版，缺少完整資料庫 |

**建議**：涉及數值、技能效果、掉落等，務必確認是否適用於「王國復甦 · 竹取物語」。

---

## 回鍋第一步

1. **確認客戶端版本** — 前往 [官方官網](https://nfl.lager.com.tw/index/index) 下載最新主程式
2. **了解目前資料片** — 近期為「竹取物語」，含竹月島、月光石裝備強化、幻獸元素神啟書等新系統
3. **選擇職業方向** — 可參考童協會 [職業攻略](/classes)
4. **幻獸系統** — 物理系常見討論為金力、光力方向（詳見討論板，尚待完整整理）

---

## 常用查詢

- 搜技能：例如 [獸王劈](/skills/獸王劈)
- 搜職業：例如 [狂戰士](/classes/狂戰士)、[光之使者](/classes/光之使者)
- 搜洗點：例如 [屬性調整藥丸](/items/屬性調整藥丸)、[調整屬性與洗點道具](/guides/調整屬性與洗點道具)
- 搜工作：挖礦、生產相關（後續擴充）

---

## 需要幫助？

每個資料頁底部都有「這項資料有問題？」回報功能。你的實測與修正，是童協會能持續準確的關鍵。`,
    linkedEntityIds: [
      { type: "skill", id: "skill-beast-king-slash", label: "獸王劈" },
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "class", id: "class-light-messenger", label: "光之使者" },
    ],
  },
  {
    id: "guide-berserker-build",
    slug: "狂戰士養成攻略",
    name: "狂戰士養成攻略（2026 版）",
    aliases: ["斧戰養成", "狂戰攻略"],
    guideType: "class",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutForum, SOURCES.baojia],
    metaTitle: "狂戰士養成攻略（2026 版）－童協會",
    metaDescription: "童話 Online 狂戰士養成方向、技能與相關資源整理。",
    summary: "整理狂戰士養成相關的已知資訊與待確認項目，並連結至技能獸王劈。",
    content: `## 狂戰士養成概覽

狂戰士為戰士系二轉職業，由斧戰士轉職。本攻略目前以**資料整理與連結**為主，而非提供未經驗證的數值。

### 相關技能

- [獸王劈](/skills/獸王劈) — 狂戰士代表性技能，學習條件與效果尚待王國復甦版確認

### 配點方向

常見說法以力量、敏捷、體質為主，但**是否為現版本最優解尚待確認**。請參考：

- [巴哈姆特職業分析](https://wiki2.gamer.com.tw/wiki.php?f=M&n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90)
- 巴哈姆特精華區斧戰士／狂戰士相關討論

### 待補充

- 現版本裝備方向
- 幻獸搭配建議（力寵方向）
- 練功地圖推薦

若你有王國復甦版的實測心得，歡迎回報。`,
    linkedEntityIds: [
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "skill", id: "skill-beast-king-slash", label: "獸王劈" },
    ],
  },
  {
    id: "guide-stat-reset",
    slug: "調整屬性與洗點道具",
    name: "調整屬性與洗點道具整理",
    aliases: ["洗點", "薯條", "屬調", "調水", "搗蛋藥丸"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [
      SOURCES.playerItemTable,
      SOURCES.officialScrolls,
      SOURCES.bahamutSpecialItems,
      SOURCES.bahamutRebirthPts,
    ],
    metaTitle: "調整屬性與洗點道具整理－童協會",
    metaDescription:
      "童話 Online 屬性調整藥丸、單屬藥丸、調水、調劑、搗蛋藥丸差異與使用限制整理。",
    summary:
      "整理調整系／搗蛋系丸子與調水、調劑的差異、限制與玩家俗稱，並標註舊資料與資料表不一致之處。",
    content: `## 先分清楚：自由配點 vs 隨機轉移

調整屬性相關道具大致分兩類：

1. **調整系**：把點數扣下來，讓你**自己再加回去**（洗點）。
2. **搗蛋系**：把點數從某一屬**自動轉到**另一屬，**不能自選**加點位置。

以下效果與限制整理自玩家提供之遊戲資料表、[舊官方參考捲軸](http://fairyland.lager.com.tw/01guidebook/31_things.html)、[巴哈百科特殊道具](https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E7%89%B9%E6%AE%8A%E9%81%93%E5%85%B7)。王國復甦是否完全相同，尚待遊戲內確認。

---

## 玩家俗稱

| 俗稱 | 通常是指 |
|---|---|
| 薯條／屬調 | [屬性調整藥丸](/items/屬性調整藥丸) |
| 調劑 | 六種 [力量調整藥劑](/items/力量調整藥劑) 等（一次 -3） |
| 調水 | 六種 [力量調整藥水](/items/力量調整藥水) 等（一次 -5） |

---

## 調整系（可重新配點）

| 道具 | 扣點方式 | 常見限制 |
|---|---|---|
| [屬性調整藥丸](/items/屬性調整藥丸) | 六大屬性各 -1 | 任一屬低於等級 1/2 則不能用 |
| [調整藥丸](/items/調整藥丸) | 隨機一屬 -1 | 低於等級 1/2 者不被抽中 |
| [單屬調整藥丸](/items/單屬調整藥丸) | 指定一屬 -1 | 該屬低於等級 2/3 則不能用 |
| [力量調整藥丸](/items/力量調整藥丸) 等六種 | 指定該屬 -1 | 該屬低於等級 2/3，或等級低於 10 |
| [力量調整藥劑](/items/力量調整藥劑) 等六種 | 指定該屬 -3 | 該屬低於 10 不能用 |
| [力量調整藥水](/items/力量調整藥水) 等六種 | 指定該屬 -5 | 該屬低於 10 不能用 |

六大屬性：力量、體質、敏捷、智慧、魅力、幸運。

**單屬調整藥丸**出現在玩家提供的資料表；舊官方則列出六種具名藥丸（力量／體質／敏捷／智慧／幸運／魅力調整藥丸）。機制都是「指定一屬 -1 再自由配點」，現版本是否為同一道具的不同名稱，尚待確認。

舊官方與巴哈百科還寫：**角色等級低於 10 級不能使用**屬調／調整藥丸。玩家資料表沒有這條，現版本請以遊戲內為準。

---

## 搗蛋系（不能自由配點）

| 道具 | 效果 |
|---|---|
| [屬性搗蛋藥丸](/items/屬性搗蛋藥丸) | 六屬各 -1，再**自動隨機**配點 |
| [搗蛋藥丸](/items/搗蛋藥丸) | 隨機 -1，再隨機 +1 到另一屬 |
| [力量搗蛋藥丸](/items/力量搗蛋藥丸) 等六種 | 從其他屬隨機 -1，**固定加到指定屬** |

搗蛋另有上限：目標屬性高於（角色等級×3＋轉生次數×12）時，不會被加點（指定搗蛋則直接無法使用）。

---

## 轉生後常見用法（玩家討論，非正式公式）

[巴哈討論](https://forum.gamer.com.tw/C.php?bsn=4211&snA=9805) 提到：

- 屬調要 **10 等以後**才能用，且六屬都要達到等級的一半。
- 轉生後很多人會在 10～11 等開始用薯條洗點。
- 市面較常見的是**調水**（-5），不是調劑（-3）。
- 調水使用時該屬不能低於 10；若剛好 10 點再 -5，可洗到 **5**。

這是舊討論的實務心得，數值門檻請再對現行版本確認。

---

## 完整列表

道具分頁見 [裝備道具](/items)。`,
    linkedEntityIds: [
      { type: "item", id: "item-all-stat-pill", label: "屬性調整藥丸" },
      { type: "item", id: "item-random-stat-pill", label: "調整藥丸" },
      { type: "item", id: "item-single-stat-pill", label: "單屬調整藥丸" },
      { type: "item", id: "item-all-prank-pill", label: "屬性搗蛋藥丸" },
      { type: "item", id: "item-random-prank-pill", label: "搗蛋藥丸" },
      { type: "item", id: "item-str-potion", label: "力量調整藥水" },
    ],
  },
];

export const updates: UpdateEntry[] = [
  {
    id: "update-5",
    entityType: "guide",
    entityId: "guide-stat-reset",
    entityName: "調整屬性與洗點道具整理",
    changeSummary: "收錄調整系、搗蛋系、調水／調劑與來源差異說明",
    publishedAt: "2026-08-14",
  },
  {
    id: "update-4",
    entityType: "item",
    entityId: "item-single-stat-pill",
    entityName: "單屬調整藥丸",
    changeSummary: "新增三種調整藥丸效果與最低限制說明",
    publishedAt: "2026-08-14",
  },
  {
    id: "update-1",
    entityType: "skill",
    entityId: "skill-beast-king-slash",
    entityName: "獸王劈",
    changeSummary: "建立技能資料頁，標註來源與待確認項目",
    publishedAt: "2026-08-11",
  },
  {
    id: "update-2",
    entityType: "guide",
    entityId: "guide-returning-2026",
    entityName: "2026 回鍋玩家完整指南",
    changeSummary: "新增回鍋指南文章",
    publishedAt: "2026-08-11",
  },
  {
    id: "update-3",
    entityType: "guide",
    entityId: "guide-berserker-build",
    entityName: "狂戰士養成攻略",
    changeSummary: "新增狂戰士養成攻略框架",
    publishedAt: "2026-08-09",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuideById(id: string) {
  return guides.find((g) => g.id === id);
}

export function getFeaturedGuide() {
  return guides.find((g) => g.isFeatured);
}
