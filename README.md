# 童協會｜童話 Online 攻略資料庫

> 台服 · 王國復甦 · 竹取物語

## 線上地址

**https://ww3e23.github.io/FairyLand-book/**

Push 到 `main` 即自動部署（GitHub Actions → GitHub Pages）。

## 本地開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 部署（Vercel）

1. 將 repo 推送到 GitHub
2. 在 [Vercel](https://vercel.com) Import 專案
3. Framework Preset 選 **Next.js**，直接 Deploy

環境變數（可選）：

| 變數 | 說明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 正式域名，用於 SEO canonical |

## 後台管理（Directus）

V1 資料暫存在 `src/data/`（TypeScript），方便快速迭代。

後續接 Directus + PostgreSQL：

```bash
docker compose up -d
```

- Directus：http://localhost:8055
- 預設帳號見 `docker-compose.yml`（部署前請修改密碼）

Schema 定義見 `src/db/schema.ts`。

## 專案結構

```
src/
  app/          # Next.js 頁面
  components/   # UI 元件
  data/         # V1 種子資料（JSON/TS）
  db/           # Drizzle Schema（預備接 DB）
  lib/          # 類型與工具
```

## 資料原則

- 不自行編造遊戲事實
- 不確定的欄位：說明原因 + 提供參考連結
- 真的沒資料：顯示「目前無資料，待好心人士提供」
- 每條資料標註版本與可信度

## V1 範圍

- ✅ 首頁 + 搜尋
- ✅ 5 職業 + 獸王劈標竿頁 + 回鍋指南
- ✅ 可信度 / 來源系統
- ✅ 三欄 Desktop + Mobile 底欄
- 🚧 幻獸 / 裝備 / 工作 / 地圖（占位）
- 🚧 Directus / Meilisearch 接入（下一階段）
