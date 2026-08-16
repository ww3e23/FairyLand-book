/**
 * 站內功能開關。改這一個檔、push 就會生效。
 *
 * 跟 Cursor 說其中一句即可：
 * - 「關掉玩家傳圖」→ 把 PLAYER_PET_IMAGE_SUBMISSIONS 改成 false
 * - 「打開玩家傳圖」→ 改成 true
 *
 * 關掉後：圖鑑上的投稿按鈕與 /pets/submit 入口會消失（頁面改顯示暫停）。
 * 已經上站的玩家圖不會自動撤掉，要撤再另外說。
 * 目前投稿會自動上圖鑑，不經審核。
 */
export const PLAYER_PET_IMAGE_SUBMISSIONS = true;

export const GITHUB_REPO = "ww3e23/FairyLand-book";

/** 玩家投稿匣。不要改成太好猜的字，改了要跟 ingest workflow 一起改。 */
export const PET_SUBMIT_NTFY_TOPIC = "fairyland-xh28-pet-drop";

/** 審核頁密碼的 SHA-256。要改密碼跟 Cursor 說即可。 */
export const BOARD_PASSWORD_SHA256 =
  "6394e2fbfe172f07c3ede78f859da1f6b8fb8bad92cd88be2f99a3b645a40969";
