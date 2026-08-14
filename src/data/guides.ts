import type { GuideEntity, UpdateEntry } from "@/lib/types";
import { SOURCES } from "./sources";

export const guides: GuideEntity[] = [
  {
    id: "guide-returning-2026",
    slug: "returning-2026",
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
3. **選擇職業方向** — 可參考 [職業一覽](/guides/class-overview/) 與 [職業攻略](/classes/)
4. **洗點與轉生** — 見 [洗點道具](/guides/stat-reset/)、[轉生入門](/guides/rebirth/)
5. **工作賺錢** — 見 [基礎工作](/guides/work-basics/)

---

## 常用查詢

- 技能：[獸王劈](/skills/beast-king-slash/)
- 職業：[狂戰士](/classes/berserker/)、[光之信徒](/classes/light-acolyte/)
- 洗點：[屬性調整藥丸](/items/all-stat-pill/)
- 工作：[基礎工作整理](/guides/work-basics/)

---

## 需要幫助？

每個資料頁底部都有「這項資料有問題？」回報功能。你的實測與修正，是童協會能持續準確的關鍵。`,
    linkedEntityIds: [
      { type: "skill", id: "skill-beast-king-slash", label: "獸王劈" },
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "class", id: "class-light", label: "光之信徒" },
    ],
  },
  {
    id: "guide-berserker-build",
    slug: "berserker-build",
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

- [獸王劈](/skills/beast-king-slash/) — 狂戰士代表性技能，學習條件與效果尚待王國復甦版確認
- 職業頁：[狂戰士](/classes/berserker/)、[斧戰士](/classes/axe-warrior/)

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
    slug: "stat-reset",
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
| 薯條／屬調 | [屬性調整藥丸](/items/all-stat-pill/) |
| 調劑 | 六種 [力量調整藥劑](/items/str-vial/) 等（一次 -3） |
| 調水 | 六種 [力量調整藥水](/items/str-potion/) 等（一次 -5） |

---

## 調整系（可重新配點）

| 道具 | 扣點方式 | 常見限制 |
|---|---|---|
| [屬性調整藥丸](/items/all-stat-pill/) | 六大屬性各 -1 | 任一屬低於等級 1/2 則不能用 |
| [調整藥丸](/items/random-stat-pill/) | 隨機一屬 -1 | 低於等級 1/2 者不被抽中 |
| [單屬調整藥丸](/items/single-stat-pill/) | 指定一屬 -1 | 該屬低於等級 2/3 則不能用 |
| [力量調整藥丸](/items/str-pill/) 等六種 | 指定該屬 -1 | 該屬低於等級 2/3，或等級低於 10 |
| [力量調整藥劑](/items/str-vial/) 等六種 | 指定該屬 -3 | 該屬低於 10 不能用 |
| [力量調整藥水](/items/str-potion/) 等六種 | 指定該屬 -5 | 該屬低於 10 不能用 |

六大屬性：力量、體質、敏捷、智慧、魅力、幸運。

**單屬調整藥丸**出現在玩家提供的資料表；舊官方則列出六種具名藥丸（力量／體質／敏捷／智慧／幸運／魅力調整藥丸）。機制都是「指定一屬 -1 再自由配點」，現版本是否為同一道具的不同名稱，尚待確認。

舊官方與巴哈百科還寫：**角色等級低於 10 級不能使用**屬調／調整藥丸。玩家資料表沒有這條，現版本請以遊戲內為準。

---

## 搗蛋系（不能自由配點）

| 道具 | 效果 |
|---|---|
| [屬性搗蛋藥丸](/items/all-prank-pill/) | 六屬各 -1，再**自動隨機**配點 |
| [搗蛋藥丸](/items/random-prank-pill/) | 隨機 -1，再隨機 +1 到另一屬 |
| [力量搗蛋藥丸](/items/str-prank/) 等六種 | 從其他屬隨機 -1，**固定加到指定屬** |

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

道具分頁見 [裝備道具](/items/)。與轉生搭配見 [轉生入門](/guides/rebirth/)。`,
    linkedEntityIds: [
      { type: "item", id: "item-all-stat-pill", label: "屬性調整藥丸" },
      { type: "item", id: "item-random-stat-pill", label: "調整藥丸" },
      { type: "item", id: "item-single-stat-pill", label: "單屬調整藥丸" },
      { type: "item", id: "item-all-prank-pill", label: "屬性搗蛋藥丸" },
      { type: "item", id: "item-random-prank-pill", label: "搗蛋藥丸" },
      { type: "item", id: "item-str-potion", label: "力量調整藥水" },
    ],
  },
  {
    id: "guide-newbie",
    slug: "newbie",
    name: "新手入門：從平民到一轉",
    aliases: ["新手", "新手村", "入門"],
    guideType: "newbie",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.oldOfficialGuide, SOURCES.bahamutWiki],
    metaTitle: "新手入門｜童協會",
    metaDescription: "童話 Online 新手從平民、見習職業到一轉公會的流程整理。",
    summary: "角色一開始是平民。先找見習指導員，10 級再去三大城公會選正式職業。",
    content: `## 你現在是平民

新角色沒有職業。要先在新手村（吉恩村、綠夫村、伊利村）市鎮中心門口找**見習指導員**，加入見習職業，才會有基本戰鬥技能。

不滿意可以回去放棄再選，但該見習技能等級會歸零。

---

## 三大見習

| 見習 | 之後可轉 | 公會城市 |
|---|---|---|
| [見習士兵](/classes/apprentice-soldier/) | 劍／刀／斧戰士 | 金銀城戰士公會 |
| [見習旅人](/classes/apprentice-traveler/) | 武鬥家、幻獸師、商人 | 彩虹城旅人公會 |
| [見習修士](/classes/apprentice-cleric/) | 僧侶、法師、光之信徒、闇之信徒 | 青鳥城修士公會 |

完整樹狀圖見 [職業一覽](/guides/class-overview/)。

---

## 10 級：一轉（不能反悔）

升級到 **10 級以上**，到對應公會選正式職業。官方說明：**選了就不能改**，只能一路走下去（或之後用轉生重練，見 [轉生入門](/guides/rebirth/)）。

選職業前先想好武器與防具限制，別把錢花在不能穿的裝備上。

---

## 同時可以做的事

- 學一種基礎工作（採集、農事、狩獵、釣魚、伐木、挖礦）→ [基礎工作](/guides/work-basics/)
- 配點不滿意先別亂洗，等 10 級再看 [洗點道具](/guides/stat-reset/)

資料整理自[舊官方職業指南](http://fairyland.lager.com.tw/01guidebook/12_job.html)與[巴哈職業分析](https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90)。`,
    linkedEntityIds: [
      { type: "class", id: "class-apprentice-soldier", label: "見習士兵" },
      { type: "class", id: "class-apprentice-traveler", label: "見習旅人" },
      { type: "class", id: "class-apprentice-cleric", label: "見習修士" },
      { type: "guide", id: "guide-class-overview", label: "職業一覽" },
    ],
  },
  {
    id: "guide-class-overview",
    slug: "class-overview",
    name: "職業一覽：見習、一轉、二轉",
    aliases: ["職業樹", "轉職", "二轉"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    metaTitle: "職業一覽｜童協會",
    metaDescription: "童話 Online 戰士、旅人、修士系見習／一轉／二轉職業對照。",
    summary: "平民 → 見習 → 10 級一轉 → 60 級二轉。三大系完整對照表。",
    content: `## 轉職門檻

- **見習**：新手村見習指導員
- **一轉**：10 級，三大城職業公會（選了不能改）
- **二轉**：60 級，同系公會，可換二轉造型與進階技能

來源：[巴哈職業分析](https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90)、[官方遊戲指南](http://fairyland.lager.com.tw/01guidebook/12_job.html)

---

## 戰士系（金銀城）

| 見習 | 一轉 | 二轉 | 一句話 |
|---|---|---|---|
| [見習士兵](/classes/apprentice-soldier/) | [劍戰士](/classes/sword-warrior/) | [大劍師](/classes/grand-swordsman/) | 單目標物理 |
| 同上 | [刀戰士](/classes/blade-warrior/) | [刀狂](/classes/blade-fury/) | 一排／範圍物攻 |
| 同上 | [斧戰士](/classes/axe-warrior/) | [狂戰士](/classes/berserker/) | 破甲、斧技強化 |

---

## 旅人系（彩虹城）

| 見習 | 一轉 | 二轉 | 一句話 |
|---|---|---|---|
| [見習旅人](/classes/apprentice-traveler/) | [武鬥家](/classes/martial-artist/) | [格鬥師](/classes/brawler/) | 拳、高速 |
| 同上 | [幻獸師](/classes/beast-tamer/) | [魔獸使](/classes/beast-lord/) | 寵物、捕捉 |
| 同上 | [商人](/classes/merchant/) | [大老闆](/classes/tycoon/) | 賺錢、打寶 |

---

## 修士系（青鳥城）

| 見習 | 一轉 | 二轉 | 一句話 |
|---|---|---|---|
| [見習修士](/classes/apprentice-cleric/) | [僧侶](/classes/cleric/) | [祭司](/classes/high-priest/) | 輔助、增益 |
| 同上 | [法師](/classes/mage/) | [巫師](/classes/wizard/) | 元素攻擊 |
| 同上 | [光之信徒](/classes/light-acolyte/) | [光術師](/classes/light-mage/) | 補血、復活 |
| 同上 | [闇之信徒](/classes/dark-acolyte/) | [闇術師](/classes/dark-mage/) | 弱化、闇攻 |

光之信徒玩家也常叫「光之使者」。

各職業介紹頁已建立，可從表內點進去。`,
    linkedEntityIds: [
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "class", id: "class-light", label: "光之信徒" },
    ],
  },
  {
    id: "guide-rebirth",
    slug: "rebirth",
    name: "轉生入門",
    aliases: ["轉生", "轉生神殿", "再造"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.bahamutWiki, SOURCES.bahamutForum, SOURCES.bahamutRebirthPts],
    metaTitle: "轉生入門｜童協會",
    metaDescription: "童話 Online 轉生地點、門檻、保留與消失項目、轉生後洗點。",
    summary: "第一次轉生常見門檻為 101 級與奉獻可因。等級回到 1，技能與部分能力會留下。",
    content: `## 轉生在做什麼

轉生把**等級拉回 1**，但留下技能與一部分能力，讓角色在更好的底子上重練。配點洗壞了、或想拉高上限的人會走這條。

地點：糖果山轉生神殿（巴哈百科：半山腰，找大祭司相關 NPC）。請以遊戲內為準。

來源：[巴哈儀式轉生](https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E5%84%80%E5%BC%8F%E8%BD%89%E7%94%9F)、[精華區轉生系統](https://forum.gamer.com.tw/G2.php?bsn=4211&sn=844)

---

## 門檻（舊資料，請再確認）

| 項目 | 常見說法 |
|---|---|
| 第一次 | 等級 101，奉獻 100 萬可因 |
| 之後每次 | 等級門檻 +5，奉獻再多 300 萬 |
| 間隔 | 兩次轉生之間需等待現實天數（精華區寫 30 天；百科另有 60 天說法，**來源有差異**） |

---

## 轉生前

- 脫光裝備
- 未分配的能力點（含藥丸洗出來的點）要先點完

---

## 會變／會沒／會留

**會變**：等級變 1、職業回到一轉（不是平民）、外型、生命法力、使用中的幻獸狀態。

**會消失**：大部分二轉技能；二轉任務取得的法術。大老闆金錢攻擊、裝扮類技能例外會留。

**會留下**：ID 暱稱、聲望與信仰、種族性別、人際、頭銜、圖鑑、銀行與家族倉庫、**一轉戰鬥技能與法術**、**工作技能**、寵物。

等級越高再轉，轉生後底子通常越好（舊公式頁有計算，現版本分母是否仍為 1000／1500 有差異，本站不直接當公式用）。

---

## 轉生後洗點

很多人練到 10～11 等再用薯條（[屬性調整藥丸](/items/all-stat-pill/)），接著用調水。詳見 [洗點道具](/guides/stat-reset/)。`,
    linkedEntityIds: [
      { type: "item", id: "item-all-stat-pill", label: "屬性調整藥丸" },
      { type: "guide", id: "guide-stat-reset", label: "洗點道具" },
    ],
  },
  {
    id: "guide-work-basics",
    slug: "work-basics",
    name: "基礎工作：採集到挖礦",
    aliases: ["工作", "挖礦", "生產", "賺錢"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-14",
    sources: [SOURCES.bahamutWiki, SOURCES.oldOfficialGuide],
    metaTitle: "基礎工作｜童協會",
    metaDescription: "童話 Online 六大基礎工作學習地點與限制整理。",
    summary: "採集、農事、狩獵、釣魚、伐木、挖礦。新手村就能學，是賺錢與製造的起點。",
    content: `## 六大基礎工作

只要有工具就能做，最適合新手。學會後升到 2 級回去找老師回報，舊資料有 100 可因獎勵。

[官方工作指南](http://fairyland.lager.com.tw/01guidebook/08_work.html)、[巴哈基礎工作](https://wiki2.gamer.com.tw/wiki.php?n=4707%3A%E5%9F%BA%E7%A4%8E%E5%B7%A5%E4%BD%9C)

| 工作 | 吉恩村 | 綠夫村 | 伊利村 | 地點 |
|---|---|---|---|---|
| 伐木 | 木工店老闆 | 阿丁特 | — | 木工店 |
| 狩獵 | 肉品店老闆 | 杰德 | 馬特 | 肉品店 |
| 挖礦 | — | — | 楠吉 | 打鐵舖 |
| 採集 | 阿米 | 珍妮 | — | 農家 |
| 釣魚 | 魚貨店老闆 | 德斯 | — | 魚貨店 |
| 農事 | 阿農 | 理察 | — | 農家 |

進階製造（武器防具、藥劑等）要另學，一開始只能選有限種；更高槽位需要聲望（舊資料：第四種 2501、第五種 5001、第六種 15001）。

每個角色通常只能加入**一個**工作技能公會。挖礦公會舊資料在金銀城打鐵舖。

產地與等級對照很長，以巴哈「基礎工作」頁為準；本站後續會拆成地圖頁。商人／大老闆較吃打寶與交易，見 [商人](/classes/merchant/)、[大老闆](/classes/tycoon/)。`,
    linkedEntityIds: [
      { type: "class", id: "class-merchant", label: "商人" },
      { type: "class", id: "class-boss", label: "大老闆" },
    ],
  },
];

export const updates: UpdateEntry[] = [
  {
    id: "update-6",
    entityType: "guide",
    entityId: "guide-class-overview",
    entityName: "職業一覽",
    changeSummary: "補齊見習／一轉／二轉職業頁，並改用英文網址避免 404",
    publishedAt: "2026-08-14",
  },
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
  const key = decodeURIComponent(slug);
  return guides.find(
    (g) => g.slug === slug || g.slug === key || g.name === key || g.aliases?.includes(key),
  );
}

export function getGuideById(id: string) {
  return guides.find((g) => g.id === id);
}

export function getFeaturedGuide() {
  return guides.find((g) => g.isFeatured);
}
