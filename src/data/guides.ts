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
];

export const updates: UpdateEntry[] = [
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
