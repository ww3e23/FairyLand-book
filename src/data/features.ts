/**
 * 站內功能開關。改這一個檔、push 就會生效。
 *
 * 跟 Cursor 說其中一句即可：
 * - 「關掉玩家傳圖」→ 把 PLAYER_PET_IMAGE_SUBMISSIONS 改成 false
 * - 「打開玩家傳圖」→ 改成 true
 *
 * 關掉後：圖鑑上的投稿按鈕與 /pets/submit 入口會消失（頁面改顯示暫停）。
 * 已經上站的玩家圖不會自動撤掉，要撤再另外說。
 */
export const PLAYER_PET_IMAGE_SUBMISSIONS = true;

export const GITHUB_REPO = "ww3e23/FairyLand-book";
