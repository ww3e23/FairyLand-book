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
      SOURCES.officialSuperBlessing,
      SOURCES.officialBerserkerSkill,
      SOURCES.bahamutForum,
      SOURCES.bahamutReturningLazy,
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
3. 想正常打怪賺錢、做工作：先搞懂 [童話祝福卡](https://nfl.lager.com.tw/index/index_news?id=3)（一般月卡）與 [超級祝福卡](https://nfl.lager.com.tw/index/index_news?id=777)
4. 職業別急著抄舊攻略——斧戰／狂戰變很強，商人也能當打手，不是只有做買賣
5. 新內容優先看竹月島、月球、輝夜姬宮殿，不是再去翻敗家一族

下面分題講。**職業熱度是玩家討論觀察，不是官方排行**；數值請以遊戲內為準。

---

## 目前熱門職業：為什麼熱、跟過去差在哪

舊印象常是：中後期 **刀狂、大老闆、魔獸使** 清場，法系在威／鬼地圖很強，斧戰相對冷門。王國復甦之後，官方把狂戰核心技改成全體，討論也跟著轉向。

| 現在常被提到 | 為什麼熱 | 跟過去最大的不同 | 適合誰 |
|---|---|---|---|
| [狂戰士](/classes/berserker/) | 輸出上限被玩家喊最高；清怪方式變了 | 舊 [獸王劈](/skills/beast-king-slash/) 是單體。官方已改成 **獸王九擊**：全體、仍無視物防／抗性，但會自殘（現公告為 MAX HP 30%）、每次吃「獸王替身娃娃」（吉恩雜貨 2500 可因）。商城 **獸王手套** 可免自殘，但是消耗品、很容易用完 | 想打、願意養耗材 |
| [大老闆](/classes/tycoon/)／[商人](/classes/merchant/) | 錢攻、掛圖仍強；很多人也練來當**打手** | 不是「一定要做買賣的職業」。交易只是其中一條路，戰鬥向商人／老闆很常見 | 想輸出、或之後才碰交易都可 |
| [光術師](/classes/light-mage/)／[祭司](/classes/high-priest/)／[闇術師](/classes/dark-mage/) | 光使、祭司是輔助頂流；暗使常被拿來練功招怪 | 人少時會補、會暗更吃香 | 想被需要、想跟家族一起玩 |
| [格鬥師](/classes/brawler/) | 傷害高，討論裡常當補刀 | 不是新職業，但回鍋文常跟狂戰、刀狂一起點名 | 喜歡近戰、補刀 |
| [巫師](/classes/wizard/) | 元素控場還在，但練起來貴 | 舊攻略常把法師線排很前；現在比較常先問狂戰／老闆 | 喜歡法術、接受慢熱 |
| [刀狂](/classes/blade-fury/) | 還能打，但不再是唯一答案 | 以前一排／範圍物攻是中後期門面；狂戰改全體無視防之後，相對優勢沒那麼獨占 | 舊刀迷、想走熟悉手感 |

人少的服，你玩得開心、家族帶得動，比抄「最強職業」重要。

完整樹：[職業一覽](/guides/class-overview/)。新手流程：[從平民到一轉](/guides/newbie/)。

---

## 現在進去怎麼順利賺錢

王國復甦跟舊免費版差最大的，往往不是技能表，而是 **錢從哪來**。

官方祝福卡機制寫得很明白：沒卡時，**戰鬥後拿可因、工作系統**會被卡住（這兩項是回鍋最容易「怎麼打怪沒錢」的原因）。有卡才比較像以前那樣打怪有可因、能做採集礦釣。

實務上常見的賺錢路徑：

1. **先把祝福卡開起來** — 沒卡就幾乎沒戰鬥可因、不能工作。可因拿來修裝、補給、學工作就好，不必一開始狂洗點
2. **一張祝福卡養一個主角** — 打怪有可因 + 工作產物。工作細節見 [基礎工作](/guides/work-basics/)
3. **工作還是有人買** — 產物長一樣。重點是：**等級練高成本很高**；太低等的，自己用不到、別人也不一定收。挖礦那邊玩家常提到金剛砂還有人收，行情會變，問家族最準。細節見 [基礎工作](/guides/work-basics/)
4. **商人／大老闆** — 可以當打手，不是一定要做買賣。見 [商人](/classes/merchant/)、[大老闆](/classes/tycoon/)
5. **日常魔幣** — 吉恩村酒館旁找戰鬥達人（官方：20 級以上、每日 2 次）。一般祝福卡每次額外 **5 魔幣**（一天 10）。開了超級祝福卡會變成每次 **10 魔幣**（一天 20）。任務可能是打指定等級怪，或指定地圖（玩家提過害怕峽谷、鳳梨山這類）。活動可能再加倍
6. **其他進帳** — 活動碎片、求婚戒台、玩具、融寵用的卡娃，有人會刷來賣。物價問當下頻道，不要背死舊數字

沒卡也能登入晃、解部分內容、社交；只是「靠打怪與工作養活自己」會很彆扭。這是設計，不是你記錯。

---

## 目前生態跟氣氛

坦白講：這是 **懷舊服 + 小眾服**。

- 人數遠少於當年尖峰，城鎮不會再像西門町。玩家討論裡人多的分流常提到 1、5、9、10，人多的點多在巴格達、金銀城、吉恩村，會變
- 還在玩的人，很多是「回來找回憶」、家族熟人、或慢慢養一隻寵
- 巴哈哈啦板還活著，但精華很多是舊文；新資訊以 [官方公告](https://nfl.lager.com.tw/index/index) 和近期討論為準
- 物價、誰在收什麼工作產物，問家族或板上一句，比看十年前攻略準
- 官方活動頁有時會送祝福卡或小編禮，回鍋先逛一下活動專區，別只會自己買

氣氛上：少了大型戰場熱度，多了「認得人、慢慢養」。回鍋若預期「滿服練功搶怪」，會失望；若預期「晚上掛一下、周末跟熟人晃新圖」，比較對盤。

---

## 課金：祝福卡、超級祝福卡、魔幣怎麼花

遊戲本體免費。玩家說的月卡，對應官方兩張卡：

**童話祝福卡**（一般月卡）— [官方公告](https://nfl.lager.com.tw/index/index_news?id=3)

- 常態優惠約 **150 點／30 天**（另有 1 日卡 12 點；原價 350，折扣期限未定）
- **綁角色不是綁帳號**：第二隻角色要再買一張；刪角色卡會沒
- 可疊加天數；離線也在倒數
- 用遊戲點數跟奇幻魔女買，**不能用魔幣買**
- 沒這張：**戰鬥可因、工作系統**開不了
- 每日戰鬥任務額外魔幣（每次 5）

**童話超級祝福卡** — [官方公告](https://nfl.lager.com.tw/index/index_news?id=777)

- 優惠約 **120 點／30 天**（原價 300）
- **一定要先開著一般祝福卡**才能買；開通期間一次一張、**不能疊天數**
- 同樣綁角色
- 人物／技能經驗 +20%、戰鬥可因再 +10%
- 戰鬥任務魔幣變兩倍（每次 10）
- 戰鬥掉落有 50% 機率多一倍其中一樣
- 工作成功率 +10%、工作經驗 +20%、每成功十件多一件
- 工作可刷祝福碎片兌換；週六可找彩虹城超級祝福卡使者 (222,697) 領獎勵
- 角色名會變紫色、名稱前有勳章

一般回鍋：**先買一般祝福卡讓角色能正常玩**。會天天打、天天工作，再考慮加超級卡。

### 魔幣建議怎麼花

戰鬥任務存下來的魔幣，比較實在的用法：

1. **優先存獸王手套** — 狂戰常用、是會一直被消耗的消耗品，玩家估算一張手套大概值 **三千多萬可因**。求穩定、不想看人品，很多人都存這個
2. **調整藥水禮包** — 也有不少人推，洗點快；但看人品，不一定比手套穩
3. 其餘禮包、抽箱看個人，不列成「回鍋必買」

### 只買一般祝福卡時

1. 先給**主角色**買
2. 可因拿去修裝、補給、把工作練到「別人會收／自己用得到」的等級
3. 魔幣照上面存，手套或調水禮包二選一（或先手套）

月光石強化可以玩，失敗會把強化等級歸零。想課深再碰，回鍋第一週不必硬衝。

來源：官方祝福卡、超級祝福卡公告。玩家整理見 [回鍋系統文](https://forum.gamer.com.tw/C.php?bsn=4211&snA=11421)（本站只取概念，不照抄）。

---

## 50 等之後為什麼大家都在結婚

這版本 **50 等以後升級要回自己的職業公會**。練功點又遠，沒有婚傳會一直跑路。

實務上很多人用**兩個視窗、兩個帳號**互婚，戒指鑲好才能傳。流程、材料、注意事項見 [結婚與婚傳](/guides/marriage/)。一律在 **2 分流**處理，別跑錯分流空等 NPC。

---

## 升等先點智、藥不要疊著吃

這版本技能很吃魔力，玩家常見作法是**升級點數先丟智慧**，裝備可以智體混搭。藥效同類只吃最高的那瓶，疊一堆不會全開。

什麼時候吃藥、何時再洗成打手配點，見 [升等配點與藥品](/guides/stat-buffs/)。

---

## 幻獸先選金力、光力還是火智

物理寵現在討論最多的是金力、光力：克到木系圖用金、克到闇圖（黑吉那帶）用光。法系練技常看到火智。融合、營養劑、神啟技能見 [幻獸選擇與融合](/guides/pet-fusion/)。

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
4. **認得幾個會上線的人** — 人少，家族跟熟人比追職業表重要
5. **舊網站當故事書** — 敗家、舊百科可以查名詞，不能當現價、現倍率
6. **課金設上限** — 祝福卡／超級卡先算好；魔幣優先手套或調水禮包
7. **允許很廢** — 掛工作、晃竹月島、養寵，本來就是這遊戲還在的理由

洗點、轉生仍是後期才需要：[洗點道具](/guides/stat-reset/)、[轉生入門](/guides/rebirth/)。

---

## 下載與回報

主程式：[官方官網](https://nfl.lager.com.tw/index/index)

這篇整理自官方竹取、祝福卡、超級祝福卡、技能公告，以及玩家實務。**歡迎用頁面底部回報修正**。`,
    linkedEntityIds: [
      { type: "skill", id: "skill-beast-king-slash", label: "獸王九擊" },
      { type: "class", id: "class-berserker", label: "狂戰士" },
      { type: "class", id: "class-boss", label: "大老闆" },
      { type: "class", id: "class-merchant", label: "商人" },
      { type: "class", id: "class-light-mage", label: "光術師" },
      { type: "class", id: "class-dark-mage", label: "闇術師" },
      { type: "guide", id: "guide-marriage", label: "結婚與婚傳" },
      { type: "guide", id: "guide-pet-fusion", label: "幻獸選擇與融合" },
      { type: "guide", id: "guide-stat-buffs", label: "升等配點與藥品" },
    ],
  },
  {
    id: "guide-marriage",
    slug: "marriage",
    name: "結婚與婚傳",
    aliases: ["結婚", "婚傳", "求婚", "甜蜜天空"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    coverImage: "/art/guide-marriage.jpg",
    sources: [SOURCES.bahamutReturningLazy],
    metaTitle: "結婚與婚傳｜童協會",
    metaDescription: "童話 Online 王國復甦結婚流程整理：為什麼要婚傳、2 分流、材料與常見踩坑。",
    summary:
      "50 等後升級要回公會，練功點又遠。兩個帳號互婚、戒指鑲好，才能互相傳送。",
    content: `## 為什麼回鍋文都在逼你結婚

不是要你談戀愛。這版本 **角色 50 等之後，升級要回自己的職業公會**。練功地圖又遠，沒有「點戒指傳過去」會把時間耗在路上。

常見作法：開兩個遊戲視窗、兩個帳號，自己跟自己結（或跟固定隊友結）。整理自玩家回鍋文，細節以遊戲內 NPC 為準。

---

## 先準備什麼

玩家整理的清單大致是：

- 求婚用的戒台
- 鑽石
- 玉髓兩顆（**兩隻角色都要鑲**）
- 一筆可因（討論裡常見數字是五十多萬，以 NPC 報價為準）

兩隻人都要買結婚戒指。只買一邊、只鑲一邊，傳不了。

---

## 在哪裡辦

玩家說 **只在 2 分流有效**。別的分流點 NPC 可能沒反應。

吉恩村左邊一間小房子，進去用傳送石到「甜蜜天空」。後面都在這張圖跟天使 NPC 走：做求婚戒、輸入對方角色名、拿婚約石、跟婚禮天使約時間、進教堂、做結婚戒、鑲玉髓。

約好的時間只有約 **一小時內**要登入 2 分流把婚禮跑完。錯過可能要等很久，或拿戒台重來。設鬧鐘。

求婚千萬別把自己的名字填進去。

---

## 做完之後

兩隻角色都鑲好，對戒指按右鍵就能傳。之後練功、回公會升級才比較不像跑馬拉松。

流程逐步畫面以遊戲內為準。玩家原文：[回鍋系統整理](https://forum.gamer.com.tw/C.php?bsn=4211&snA=11421)（本站改寫過，不是逐字搬）。`,
    linkedEntityIds: [
      { type: "guide", id: "guide-returning-2026", label: "回鍋指南" },
      { type: "guide", id: "guide-stat-buffs", label: "升等配點與藥品" },
    ],
  },
  {
    id: "guide-stat-buffs",
    slug: "stat-buffs",
    name: "升等配點與藥品",
    aliases: ["點智", "大環單", "海洋的恩惠", "配點"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    coverImage: "/art/guide-potions.jpg",
    sources: [SOURCES.bahamutReturningLazy],
    metaTitle: "升等配點與藥品｜童協會",
    metaDescription: "童話 Online 王國復甦升等點智、智體混裝與藥品只取最高值的玩家作法。",
    summary:
      "這版本技能很吃魔。很多人升級先點智慧；藥同類只吃最高的那瓶。真的要當打手再洗點。",
    content: `## 為什麼現在升等都在點智

玩家討論的重點很單純：這版本各職業**施法很耗魔**。升級把點數丟智慧，魔力比較夠用，比較不會一直站著喝。

這是「練等、練技能階段」的省事法，不是說每個職業畢業都全智。等角色穩了、要當打手，再用 [洗點道具](/guides/stat-reset/) 調成你要的力敏體。

裝備常見混法：體裝、智裝各幾件，再配藥。買不起就先把技能練起來，錢再補裝。

---

## 藥不要疊一排

玩家實測：**同類加成只算最高的那瓶**，不是全部加總。吃一瓶對的就好。

討論裡常出現的短效藥（約 10 分鐘）包括：加體的大環單、加智加力的海洋的恩惠、加智的魔女口糧、以及智幸類火鍋／四物飲。數字以遊戲內說明為準。

精煉裝小小一截，有時能頂一兩件白裝的感覺，沒錢先藥、有錢再換裝。

---

## 什麼時候吃

- **1～50 等**：練功時就吃，時間到補一杯。
- **50 等之後**：經驗條滿了，**回公會按升級前再吃**就好，不用整場掛著（路上有 [婚傳](/guides/marriage/) 會輕鬆很多）。

來源概念來自 [玩家回鍋整理](https://forum.gamer.com.tw/C.php?bsn=4211&snA=11421) 與討論回覆。`,
    linkedEntityIds: [
      { type: "guide", id: "guide-stat-reset", label: "洗點道具" },
      { type: "guide", id: "guide-marriage", label: "結婚與婚傳" },
    ],
  },
  {
    id: "guide-pet-fusion",
    slug: "pet-fusion",
    name: "幻獸選擇與融合",
    aliases: ["金力", "光力", "火智", "融寵", "幻獸營養劑"],
    guideType: "system",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    coverImage: "/art/guide-pets.jpg",
    figures: [
      {
        src: "/art/guide-work.jpg",
        caption: "幻獸是夥伴，不是只看排行。先搞懂克制再決定金力或光力。",
      },
    ],
    sources: [SOURCES.bahamutPetLazy, SOURCES.officialKaguya],
    metaTitle: "幻獸選擇與融合｜童協會",
    metaDescription: "童話 Online 金力、光力、火智為何熱門，以及融合、神啟技能的入門整理。",
    summary:
      "物理寵現在多談金力、光力；法系練技常見火智。克制對了，推圖門檻會低一截。",
    content: `## 先搞克制，再決定養什麼

玩家整理的屬性圈是：**金剋木、木剋土、土剋水、水剋火、火剋金**；光跟闇互相剋。

物理輸出現在討論最多的兩條：

- **金力**：後面幾張練功圖血最多的怪偏木（玩家舉威彩、鬼三），金打木有額外傷害。龍三偏土，金的優勢會小一點。
- **光力**：有人從龍三附近改去黑吉一路練到高等。那邊怪偏闇（連看起來像綠的也算），光打闇比較痛。

另外還有人用 **金智敏** 補命中、**火智** 拿來練斧技／精算／拳這類很吃技能等的線。

法系在條件接近時，討論裡巫師的流爆常被排在前面，因為還能靠火神、冰龍那些去疊；所以火智比較常出現。這是趨勢，不是保證你養別的不能玩。

野生抓到的寵，成長大致是：金偏力體、木偏體、土偏體幸、水偏敏、火偏力、光較平均、闇偏智。要「光的外觀＋力的成長」這類組合，才需要融合。

---

## 融合在做什麼

在幻獸店找融合 NPC（玩家常去巴格達找米娜）。概念是：一隻當外觀／屬性、一隻當你要繼承的成長，加上營養劑或更高等的融合道具，機率不是 100%。

卡、娃娃要跟**那隻母系寵**對得上，不能隨便拿同系別的卡充數。

更高階的生命核心、宇宙奧秘、星域之謎、黑洞奇點，是之後要雙成長或塞神啟石才會碰到。神啟全體技本身也可以只靠 [竹取的元素神啟書](/guides/returning-2026/) 學（80 等、可能失敗）。

---

## 寵技為什麼突然有人在用

有人用寵技少操作、少帶祭司。效果通常沒有真人祭司滿，但掛圖輕鬆。討論裡常點名：神刃術、拉拉舞、神木之怒、冰雹彈、三連擊。80 等那兩招神木／冰雹是神啟書學的，不是合出來就會。

雙成長（例如智敏、體敏）要靠營養劑那套配方去改，細節以遊戲內與專文為準。

魔獸使想抓寵，有玩家覺得練一隻偏魅的專門丟球就好，戰力寵另說。

鼓勵自己合看看，比只買現成有趣。玩家原文：[幻獸懶人包](https://forum.gamer.com.tw/C.php?bsn=4211&snA=11473)（本站改寫）。

野生外觀與地點見 [幻獸圖鑑](/pets/)（目前先收錄金系，插畫為本站重繪）。`,
    linkedEntityIds: [
      { type: "guide", id: "guide-returning-2026", label: "回鍋指南" },
      { type: "class", id: "class-beast-tamer", label: "幻獸師" },
      { type: "pet", id: "pet-wo-juan-chong", label: "窩捲蟲" },
    ],
  },
  {
    id: "guide-light-mage-skills",
    slug: "light-mage-skills",
    name: "光術師二轉技能任務",
    aliases: ["天使召喚", "光之六芒星", "光術師任務"],
    guideType: "class",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-16",
    coverImage: "/art/guide-classes.jpg",
    sources: [SOURCES.bahamutLightSkills],
    metaTitle: "光術師二轉技能任務｜童協會",
    metaDescription: "光術師天使召喚、光之六芒星任務流程整理。來源為舊精華區，現版本請再確認。",
    summary:
      "光系魔法 60 後，可去光神殿接復活技任務。流程來自舊週刊／精華區，怪的等級與數量可能已變。",
    content: `## 先講清楚

這篇是 **舊精華區流程的改寫**，原始轉自香港童話週刊，再由玩家補過。王國復甦的怪等、數量、NPC 對話**可能不一樣**，請以遊戲內為準。光術師介紹見 [光術師](/classes/light-mage/)。

兩招都要 **光系魔法 60**，接點都在光神殿。

---

## 天使召喚（單體復活）

舊資料：耗魔偏高，單體拉人，血量回復大約一千這個量級。

流程概念：

1. 西綠野光神殿找「光之聖者」
2. 青鳥城找卡路爾
3. 被指到某一城的修理店找席娜絲修衣服（哪一城是隨機）
4. 交材料（舊文寫絲綢、白金塊、蠶絲；數量以 NPC 為準）
5. 回卡路爾
6. 需要跟大劍師、巫師組隊去北綠野打褐獅王。舊文寫五隻、約 60 等，**玩家補充：不一定是這個組合**
7. 打完回卡路爾
8. **晚上**再回光之聖者學技能

---

## 光之六芒星（全體復活）

舊資料：更耗魔，全體拉人，回復大約七成血。

流程概念：

1. 光神殿找「光之智者」
2. 月光村臨時住所找布達米。他要的白寶石原石**不是固定二十顆**，NPC 還要你就繼續給
3. 另一間臨時住所找卡及
4. 依序跑哈啾島、鬱金香島、聽說島、玫瑰島打「光之碎玉」
5. 四塊拿回去神殿學

舊補充：碎玉那段要**一個人解**；最後一個建議用光系寵打。

來源：[巴哈精華區](https://forum.gamer.com.tw/G2.php?bsn=4211&sn=2039)。你若在現版本走出不一樣的數量或地點，請用頁面底部回報。`,
    linkedEntityIds: [
      { type: "class", id: "class-light-mage", label: "光術師" },
      { type: "guide", id: "guide-class-overview", label: "職業一覽" },
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
    id: "update-12",
    entityType: "pet",
    entityId: "pet-wo-juan-chong",
    entityName: "幻獸圖鑑全系收錄",
    changeSummary:
      "依百科補上七系野生出現表與稀有幻獸；本站插畫先拿掉，改等玩家提供",
    publishedAt: "2026-08-16",
  },
  {
    id: "update-11",
    entityType: "pet",
    entityId: "pet-wo-juan-chong",
    entityName: "玩家提供幻獸圖",
    changeSummary: "測試開放玩家投稿幻獸外觀圖（審核後才上站，可隨時關閉）",
    publishedAt: "2026-08-16",
  },
  {
    id: "update-10",
    entityType: "pet",
    entityId: "pet-wo-juan-chong",
    entityName: "金系幻獸圖鑑",
    changeSummary:
      "幻獸圖鑑上線：先收錄金系 8 隻，本站重繪插畫，數值標為待確認",
    publishedAt: "2026-08-16",
  },
  {
    id: "update-9",
    entityType: "guide",
    entityId: "guide-marriage",
    entityName: "結婚、幻獸、配點、光術師任務",
    changeSummary:
      "參考玩家文補上婚傳、升等點智、金力光力與光術師技能任務（改寫、非照抄）",
    publishedAt: "2026-08-16",
  },
  {
    id: "update-8",
    entityType: "guide",
    entityId: "guide-returning-2026",
    entityName: "2026 回鍋玩家完整指南",
    changeSummary:
      "改寫回鍋指南：拿掉代練與錯誤商城建議，補上超級祝福卡與魔幣用法",
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
