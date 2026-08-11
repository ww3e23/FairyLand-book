import type { GuideEntity, UpdateEntry } from "@/lib/types";
import { SOURCES } from "./sources";

export const guides: GuideEntity[] = [
  {
    id: "guide-returning-2026",
    slug: "2026回锅玩家完整指南",
    name: "2026 回锅玩家完整指南",
    aliases: ["回锅指南", "回锅懒人包"],
    guideType: "returning",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    isFeatured: true,
    sources: [SOURCES.official, SOURCES.bahamutForum],
    metaTitle: "2026 回锅玩家完整指南－童協會",
    metaDescription:
      "童话 Online 王国复苏回锅玩家指南，了解版本差异、入门方向与常用资料查询方式。",
    summary:
      "帮助回锅与新手快速了解王国复苏版本差异、常用系统与查询资料的起点。",
    content: `## 欢迎回到童话世界

《童话：王国复苏》自 2019 年重启以来，已陆续开放多个资料片。截至 **竹取物语**（2025/10），游戏内容与早年免费版或旧攻略网站上的资讯可能已有差异。

本指南不试图一次讲完所有内容，而是帮你建立**查资料的习惯**——遇到具体问题，优先来童協會搜索。

---

## 版本先搞懂

| 你看到的资料来源 | 可能的问题 |
|---|---|
| 败家一族 | 资料丰富但多为旧版，部分已被玩家指出错误 |
| 巴哈姆特 Wiki | 结构化较好，但更新频率低，版本标注不足 |
| 巴哈姆特讨论板 | 近期验证资讯多，但分散在各帖 |
| 官方公告 | 最可靠，但偏活动与改版，缺少完整数据库 |

**建议**：涉及数值、技能效果、掉落等，务必确认是否适用于「王国复苏 · 竹取物语」。

---

## 回锅第一步

1. **确认客户端版本** — 前往 [官方官网](https://nfl.lager.com.tw/index/index) 下载最新主程式
2. **了解目前资料片** — 近期为「竹取物语」，含竹月岛、月光石装备强化、幻兽元素神启书等新系统
3. **选择职业方向** — 可参考童協會 [职业攻略](/classes)
4. **幻兽系统** — 物理系常见讨论为金力、光力方向（详见讨论板，尚待完整整理）

---

## 常用查询

- 搜技能：例如 [兽王劈](/skills/兽王劈)
- 搜职业：例如 [狂战士](/classes/狂战士)、[光之使者](/classes/光之使者)
- 搜工作：挖矿、生产相关（后续扩充）

---

## 需要帮助？

每个资料页底部都有「这项资料有问题？」回报功能。你的实测与修正，是童協會能持续准确的关键。`,
    linkedEntityIds: [
      { type: "skill", id: "skill-beast-king-slash", label: "兽王劈" },
      { type: "class", id: "class-berserker", label: "狂战士" },
      { type: "class", id: "class-light-messenger", label: "光之使者" },
    ],
  },
  {
    id: "guide-berserker-build",
    slug: "狂战士养成攻略",
    name: "狂战士养成攻略（2026 版）",
    aliases: ["斧战养成", "狂战攻略"],
    guideType: "class",
    trustStatus: "pending",
    applicableVersion: "kingdom_revival",
    indexedAt: "2026-08-11",
    sources: [SOURCES.bahamutForum, SOURCES.baojia],
    metaTitle: "狂战士养成攻略（2026 版）－童協會",
    metaDescription: "童话 Online 狂战士养成方向、技能与相关资源整理。",
    summary: "整理狂战士养成相关的已知资讯与待确认项目，并链接至技能兽王劈。",
    content: `## 狂战士养成概览

狂战士为战士系二转职业，由斧战士转职。本攻略目前以**资料整理与连结**为主，而非提供未经验证的数值。

### 相关技能

- [兽王劈](/skills/兽王劈) — 狂战士代表性技能，学习条件与效果尚待王国复苏版确认

### 配点方向

常见说法以力量、敏捷、体质为主，但**是否为现版本最优解尚待确认**。请参考：

- [巴哈姆特职业分析](https://wiki2.gamer.com.tw/wiki.php?f=M&n=4707%3A%E8%81%B7%E6%A5%AD%E5%88%86%E6%9E%90)
- 巴哈姆特精华区斧战士／狂战士相关讨论

### 待补充

- 现版本装备方向
- 幻兽搭配建议（力宠方向）
- 练功地图推荐

若你有王国复苏版的实测心得，欢迎回报。`,
    linkedEntityIds: [
      { type: "class", id: "class-berserker", label: "狂战士" },
      { type: "skill", id: "skill-beast-king-slash", label: "兽王劈" },
    ],
  },
];

export const updates: UpdateEntry[] = [
  {
    id: "update-1",
    entityType: "skill",
    entityId: "skill-beast-king-slash",
    entityName: "兽王劈",
    changeSummary: "建立技能资料页，标注来源与待确认项目",
    publishedAt: "2026-08-11",
  },
  {
    id: "update-2",
    entityType: "guide",
    entityId: "guide-returning-2026",
    entityName: "2026 回锅玩家完整指南",
    changeSummary: "新增回锅指南文章",
    publishedAt: "2026-08-11",
  },
  {
    id: "update-3",
    entityType: "guide",
    entityId: "guide-berserker-build",
    entityName: "狂战士养成攻略",
    changeSummary: "新增狂战士养成攻略框架",
    publishedAt: "2026-08-09",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getFeaturedGuide() {
  return guides.find((g) => g.isFeatured);
}
