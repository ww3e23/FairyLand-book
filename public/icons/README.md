# 自訂圖示

把 PNG 或 SVG 放到這個資料夾，檔名請對應圖示鍵（例如 `shield.png`）。

然後在 `src/data/iconOverrides.ts` 加上：

```ts
export const ICON_OVERRIDES = {
  shield: "/icons/shield.png",
};
```

可在網站 `/admin/icons` 查看全部鍵名與預覽。
