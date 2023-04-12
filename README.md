# npm-scripts-imagemin
画像圧縮用のnpm-scriptsです。  
初回実行時は `npm i` でパッケージをインストールしてください。

## コマンド
- `npm run img`  
画像圧縮が走ります。
- `npm run img:watch`  
画像フォルダーを監視し、変更されると画像圧縮が走ります。
- `npm run webp`
png,jpgをwebpに変換します。

## 圧縮対象ファイル
png/jpg/gif/svgに対応しています。  
画像圧縮処理の対象と出力後のパスは `imagemin.mjs` で指定しています。  

監視対象の画像フォルダーは `package.json` の `scripts` 内 `img:watch` に指定しています。

初期設定では `_src/assets/img/` 内の `jpg,jpeg,png,svg,gif` が処理対象で、出力先は `./assets/img/` になっています。

## webp変換
png/jpgに対応しています。
画像圧縮処理の対象と出力後のパスは `convertWebp.mjs` で指定しています。  

初期設定では `./assets/img/` 内のpng,jpgが処理対象になっています。圧縮後の画像に変換処理をかける想定です。  
ファイル名重複対応をしていないのでご注意ください（pngとjpgで同じファイル名にしているとおかしくなると思われます）。