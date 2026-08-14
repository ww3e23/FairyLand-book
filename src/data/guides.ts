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
    indexedAt: "2026-08-15",
    isFeatured: true,
    coverImage: "/art/guide-returning.jpg",
    figures: [
      {
        src: "/art/guide-returning-steps.jpg",
        caption: "回鍋先搞懂四件事：現在誰強、怎麼賺錢、祝福卡值不值、竹取新圖怎麼玩",
      },
    ],
    sources: [
      SOURCES.official,
      SOURCES.officialKaguya,
      SOURCES.officialBlessing,
      SOURCES.officialBerserkerSkill,
      SOURCES.bahamutForum,
      SOURCES.bahamutBlessing,
    ],
    metaTitle: "2026 回鍋玩家指南：職業、賺錢、祝福卡、竹取物語－童協會",
    metaDescription:
      "童話 Online 王國復甦回鍋指南：熱門職業為何改變、怎麼賺錢、生態氣氛、只買祝福卡怎麼玩、新幻獸與竹取地圖。",
    summary:
      "回鍋最想問的：現在熱門職業、怎麼賺錢、生態氣氛、只買祝福卡怎麼玩、新寵物與新地圖，以及怎樣才玩得久。",
    content: `## 先講結論（給趕時間的人）

這不是 2003～2016 那套童話了。**2019 王國復甦是新服**，舊帳號帶不過來。目前資料片是 **竹取物語**（2025/10）。

回鍋最實用的節奏：

1. 官網下載最新主程式：[童話：王國復甦](https://nfl.lager.com.tw/index/index)
2. **一個主角色**先玩順，不要一次開一堆分身
3. 想正常打怪賺錢、做工作：先搞懂 [童話祝福卡](https://nfl.lager.com.tw/index/index_news?id=3)（玩家口中的月卡）
4. 職業別急著抄舊攻略——斧戰／狂戰、商人／大老闆的定位都跟以前不一樣
5. 新內容優先看竹月島、月球、輝夜姬宮殿，不是再去翻敗家一族

下面分題講。**職業熱度是玩家討論與代練市場觀察，不是官方排行**；數值請以遊戲內為準。

---

## 目前熱門職業：為什麼熱、跟過去差在哪

舊印象常是：中後期 **刀狂、大老闆、魔獸使** 清場，法系在威／鬼地圖很強，斧戰相對冷門。王國復甦之後，官方把狂戰核心技改得很誇張，討論區與代練廣告也跟著轉向。

| 現在常被提到 | 為什麼熱 | 跟過去最大的不同 | 適合誰 |
|---|---|---|---|
| [狂戰士](/classes/berserker/) | 輸出上限被玩家喊最高；清怪方式變了 | 舊 [獸王劈](/skills/beast-king-slash/) 是單體。官方已改成 **獸王九擊**：全體、仍無視物防／抗性，但會自殘（現公告為 MAX HP 30%）、每次吃「獸王替身娃娃」（吉恩雜貨 2500 可因），另有商城 **獸王手套**（49 魔幣）可免自殘 | 想打、願意養耗材；要買手套就會碰到課金 |
| [大老闆](/classes/tycoon/) | 錢攻、掛圖、中後期地圖仍常被當成「養得起就強」 | 定位沒變：貴、吃本錢。代練價也常是最高檔之一 | 喜歡交易、有本錢、想用金錢技能輾地圖 |
| [光術師](/classes/light-mage/)／[闇術師](/classes/dark-mage/) | 組隊、輔助、暗法仍是很多人會養的「功能角」 | 光暗本來就不是純輸出路線；現在人少，會補、會暗的角色更稀缺 | 想被需要、想跟家族一起玩 |
| [巫師](/classes/wizard/) | 元素控場還在，但練起來貴 | 舊攻略常把法師線排很前；現在討論比較常先問狂戰／老闆有沒有本錢 | 喜歡法術、接受慢熱 |
| [刀狂](/classes/blade-fury/) | 還能打，但不再是「唯一答案」 | 以前一排／範圍物攻是中後期門面；狂戰改全體無視防之後，刀狂的相對優勢沒那麼獨占 | 舊刀迷、想走熟悉手感 |

**不建議回鍋第一天就聽代練廣告決定人生。** 人少的服，你玩得開心、家族帶得動，比抄「最強職業」重要。

完整樹：[職業一覽](/guides/class-overview/)。新手流程：[從平民到一轉](/guides/newbie/)。

---

## 現在進去怎麼順利賺錢

王國復甦跟舊免費版差最大的，往往不是技能表，而是 **錢從哪來**。

官方祝福卡機制寫得很明白：沒卡時，**戰鬥後拿可因、工作系統**會被卡住（這兩項是回鍋最容易「怎麼打怪沒錢」的原因）。有卡才比較像以前那樣打怪有可因、能做採集礦釣。

實務上常見的賺錢路徑：

1. **先能活** — 任務、活動、家族分物；不要一開始就砸調水、砸時裝
2. **一張祝福卡養一個主角** — 打怪有可因 + 工作產物。工作細節見 [基礎工作](/guides/work-basics/)
3. **工作別幻想暴利** — 巴哈討論過：物流、別人自己做、魔力回復產品賣相變差，掛工作不一定回得了卡錢。當「穩定小錢 + 自己用」比較健康
4. **商人／大老闆** — 仍是交易、打寶、錢滾錢路線，見 [商人](/classes/merchant/)、[大老闆](/classes/tycoon/)。沒本錢硬練戰鬥商人會很痛
5. **日常魔幣** — 祝福卡可在吉恩村找戰鬥達人做戰鬥任務（官方：20 級以上、每日 2 次，每次額外 5 魔幣，共 10；活動可能加倍）
6. **不要現金買賣角色／代儲** — 官方反覆提醒違法且容易被騙

沒卡也能登入晃、解部分內容、社交；只是「靠打怪與工作養活自己」會很彆扭。這是設計，不是你記錯。

---

## 目前生態跟氣氛

坦白講：這是 **懷舊服 + 小眾服**。

- 人數遠少於當年尖峰，城鎮不會再像西門町
- 還在玩的人，很多是「回來找回憶」、家族熟人、或慢慢養一隻寵
- 巴哈哈啦板還活著，但精華很多是舊文；新資訊以 [官方公告](https://nfl.lager.com.tw/index/index) 和近期討論為準
- 外面看得到代練、賣寵廣告——代表仍有人願意砸，不代表你必須跟
- 物價、服務、誰在賣什麼，問家族或板上一句，比看十年前攻略準

氣氛上：少了大型戰場熱度，多了「認得人、慢慢養」。回鍋若預期「滿服練功搶怪」，會失望；若預期「晚上掛一下、周末跟熟人晃新圖」，比較對盤。

---

## 課金 vs 只買月卡（祝福卡）

遊戲本體免費。玩家說的月卡，對應官方 **童話祝福卡**：

- 常態優惠約 **150 點／30 天**（官方曾寫 1 日卡 12 點；原價 350，折扣期限未定）
- **綁角色不是綁帳號**：第二隻角色要再買一張；刪角色卡會沒
- 離線也在倒數
- 用 **遊戲點數**買（奇幻魔女），**不能用魔幣買**
- 官方功能懶人包：解開戰鬥可因、工作系統；另有每日戰鬥任務魔幣福利

### 只買祝福卡（建議大多數回鍋這樣）

把 150 當成「讓這個角色能正常玩」的門票，不要當投資。

優先順序：

1. 只給**主角色**買，分身先不要
2. 用卡解鎖的可因去做任務、修裝、工作自用
3. 每日戰鬥任務把魔幣存著，需要再換 **宅配、銀行、消耗**，不要一有魔幣就抽箱
4. 狂戰想玩得順，再考慮獸王手套——那已經超出「只月卡」

### 願意再課一點

常見去處：宅配服務券、銀行／背包方便、職業關鍵裝（例如獸王手套）、活動箱。強化用的滿月石類是竹取新坑，容易越課越深。

### 大課

月光石強化到高、融合神啟寵、箱、多角色每隻都祝福卡。這條跟「回來找回憶」是兩種遊戲。先問自己每週能上幾小時，再決定要不要踩強化。

巴哈心得文也講過：有人當支持營運、有人算工作回本、有人覺得不划算。**沒有標準答案**，但回鍋第一個月用「一隻主＋一張卡」最不容易後悔。來源：[官方祝福卡](https://nfl.lager.com.tw/index/index_news?id=3)、[巴哈討論](https://forum.gamer.com.tw/C.php?bsn=4211&snA=10626)。

---

## 目前有什麼新的寵物（幻獸）

竹取物語不是只出一隻新寵，而是 **舊寵能學新的全體技**，另外有一隻活動向稀有寵。

**新技能（官方，幻獸 80 等，全體）：** 竹月島打怪有機會掉 **元素神啟書**，集滿 40 本去對應神殿學，成功率公告 **20%**，可能失敗。金／木／水／火／土／光／闇各一招（金棘爆、神木之怒、冰雹彈、赤焰衝、岩浪術、光神之雨、暗神裂空術）。也可用融合專用道具搭對應寶石，公告成功率 30%。

巴哈近期有玩家整理：物理系討論常提到 **金力、光力** 路線。這是玩家趨勢，不是保證畢業配方。

**輝夜姬（官方稀有幻獸）：** 智慧成長；技能欄 6；可學強化、恢復、連擊等一大串；**不可融合**。取得方式以當時活動／掉落為準，不要當成人人必抓。

竹月島、月球的特殊地圖幻獸：**不能捕捉、不能傳送**（官方備註）。去刷神啟書、月光石，不是去抓新圖的怪回家。

---

## 有什麼新功能、新地圖

資料片頁：[竹取物語](https://nfl.lager.com.tw/event/nfl_kaguya_hime/index)，公告：[更新說明](https://nfl.lager.com.tw/index/index_news?id=827)。

| 地圖 | 重點 |
|---|---|
| **竹月島** | 桃花村船夫 (16,69) 傳入。掉神啟書、營養劑、親親糖、娃娃／卡、任務道具 |
| **月球** | 刷 **月光石**（強化材料），另有甜心糖等 |
| **輝夜姬宮殿** | 帶夢幻裝備 + 月光石 + 可因強化；找對應輝夜姬 |

**裝備強化（新系統）：**

- 上限 **100** 級
- 有成功率；**失敗不會爆裝，但強化等級歸零**
- 可吃新月／眉月／弦月／盈月石加機率（可混用，每次最多 3 粒加機率道具）
- 分解夢幻裝、職業套出這些石頭
- 另有黃金／強化／細製滿月石：低強化段 100% 成功且失敗不掉級（各有等級上限）

這套是給願意養裝的人；回鍋第一週不必碰。先把祝福卡、職業、日常跑順。

王國復甦這幾年還疊過商城、祝福卡、置物櫃、背包銀行等——若你是從「完全免費版」回來，這些都算新生活系統，不是竹取才有。

---

## 回來要怎麼玩才玩得久

1. **一隻主就好** — 多開、每隻都買卡，最容易第二週累垮
2. **目標用「季節」不是用「畢業」** — 例如：這季學會一招神啟、強化到自己能接受的級數、把家族週常跑完
3. **強化當娛樂坑** — 失敗歸零，別用當日心情賭高段
4. **社交比 DPS 保值** — 人少，認得五個會上線的人，比追代練廣告的職業表重要
5. **舊網站當故事書** — 敗家、舊百科可以查名詞，不能當現價、現倍率
6. **課金設上限** — 月卡就月卡；想抽箱先睡一晚
7. **允許很廢** — 掛工作、晃竹月島、養寵，本來就是這遊戲還在的理由

洗點、轉生仍是後期才需要：[洗點道具](/guides/stat-reset/)、[轉生入門](/guides/rebirth/)。

---

## 下載與回報

主程式：[官方官網](https://nfl.lager.com.tw/index/index)

這篇整理自官方竹取／祝福卡／技能公告，以及巴哈板討論。代練市場熱度會變，**歡迎用頁面底部回報修正**。`,
    linkedEntityIds: [
      { type: "skill", id: "skill-beast-king-slash", label: "獸王九擊" },
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "class", id: "class-boss", label: "大老闆" },
      { type: "class", id: "class-merchant", label: "商人" },
      { type: "class", id: "class-light-mage", label: "光術師" },
      { type: "class", id: "class-dark-mage", label: "闇術師" },
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
    coverImage: "/art/guide-berserker.jpg",
    figures: [
      {
        src: "/art/guide-berserker-path.jpg",
        caption: "戰士系這條線：見習士兵 → 斧戰士 → 狂戰士",
      },
    ],
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
    coverImage: "/art/guide-potions.jpg",
    figures: [
      {
        src: "/art/guide-stat-types.jpg",
        caption: "左邊調整系：點數扣下來後自己加；右邊搗蛋系：系統自動亂轉，不能自選",
      },
    ],
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
    coverImage: "/art/guide-newbie.jpg",
    figures: [
      {
        src: "/art/guide-job-flow.jpg",
        caption: "平民 → 見習 → 一轉 → 二轉：先看圖再往下讀",
      },
      {
        src: "/art/guide-three-cities.jpg",
        caption: "金銀城戰士公會、彩虹城旅人公會、青鳥城修士公會",
      },
    ],
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
    coverImage: "/art/guide-classes.jpg",
    figures: [
      {
        src: "/art/guide-job-flow.jpg",
        caption: "轉職流程：平民 → 見習 → 10 級一轉 → 60 級二轉",
      },
      {
        src: "/art/guide-three-cities.jpg",
        caption: "戰士去金銀城、旅人去彩虹城、修士去青鳥城",
      },
    ],
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
    coverImage: "/art/guide-rebirth.jpg",
    figures: [
      {
        src: "/art/guide-rebirth-keep.jpg",
        caption: "轉生後：會留下的、會消失的、會改變的（等級回到 1）",
      },
    ],
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
    coverImage: "/art/guide-work.jpg",
    figures: [
      {
        src: "/art/guide-work-six.jpg",
        caption: "六大基礎工作：採集、農事、狩獵、釣魚、伐木、挖礦",
      },
    ],
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
    id: "update-8",
    entityType: "guide",
    entityId: "guide-returning-2026",
    entityName: "2026 回鍋玩家完整指南",
    changeSummary:
      "改寫為實務向：熱門職業、賺錢、生態、祝福卡、新幻獸與竹取地圖",
    publishedAt: "2026-08-15",
  },
  {
    id: "update-7",
    entityType: "guide",
    entityId: "guide-newbie",
    entityName: "攻略插圖",
    changeSummary: "各篇攻略補上封面與流程／對照示意圖，方便對照文字",
    publishedAt: "2026-08-14",
  },
  {
    id: "update-6",
    entityType: "guide",
    entityId: "guide-class-overview",
    entityName: "職業一覽",
    changeSummary: "補齊見習／一轉／二轉職業頁，並改用英文網址避免 404",
    publishedAt: "2026-08-14",
  },
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
