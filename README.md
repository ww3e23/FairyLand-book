# 童協會｜童话 Online 攻略数据库

> 台服 · 王国复苏 · 竹取物语

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 部署（Vercel）

1. 将 repo 推送到 GitHub
2. 在 [Vercel](https://vercel.com) Import 项目
3. Framework Preset 选 **Next.js**，直接 Deploy

环境变量（可选）：

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 正式域名，用于 SEO canonical |

## 后台管理（Directus）

V1 资料暂存在 `src/data/`（TypeScript），方便快速迭代。

后续接 Directus + PostgreSQL：

```bash
docker compose up -d
```

- Directus：http://localhost:8055
- 默认帐号见 `docker-compose.yml`（部署前请修改密码）

Schema 定义见 `src/db/schema.ts`。

## 项目结构

```
src/
  app/          # Next.js 页面
  components/   # UI 组件
  data/         # V1 种子资料（JSON/TS）
  db/           # Drizzle Schema（预备接 DB）
  lib/          # 类型与工具
```

## 资料原则

- 不自行编造游戏事实
- 不确定的字段：说明原因 + 提供参考链接
- 真的没资料：显示「目前无资料，待好心人士提供」
- 每条资料标注版本与可信度

## V1 范围

- ✅ 首页 + 搜索
- ✅ 5 职业 + 兽王劈标杆页 + 回锅指南
- ✅ 可信度 / 来源系统
- ✅ 三栏 Desktop + Mobile 底栏
- 🚧 幻兽 / 装备 / 工作 / 地图（占位）
- 🚧 Directus / Meilisearch 接入（下一阶段）
