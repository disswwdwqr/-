# 小北 Netlify 網站

## 用 GitHub 部署

1. 在 GitHub 建立一個新 repository。
2. 將本資料夾的內容上傳到 repository，保留 `netlify.toml` 和 `site/` 資料夾。
3. 在 Netlify 選 **Add new project → Import an existing project → GitHub**，授權後選取該 repository。
4. Build command 留空，Publish directory 設為 `site`（`netlify.toml` 已設定）。
5. 按 Deploy。之後 push 到 GitHub 的更新會觸發 Netlify 重新部署。

首頁先顯示入口頁；選「商品地圖」進入 21 區地圖。若直接開地圖，可在 Netlify 網址後加 `#map`。

## 語音辨識

Netlify 版已包含語音輸入介面，但尚未連接雲端辨識 API；`site/voice-config.js` 的 API 網址目前是空白。地圖和商品搜尋可部署使用，語音辨識需另外部署 Python ASR 服務，再填入 API 網址並設定允許此 Netlify 網域的 CORS。請勿將 2.9 GB 模型或 `.voice-venv` 上傳到 GitHub／Netlify。
