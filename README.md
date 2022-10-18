# npm-scripts-imagemin
画像圧縮用のnpm-scriptsです。  
初回実行時は `npm i` でパッケージをインストールしてください。

## コマンド
- `npm run img`  
画像圧縮が走ります。
- `npm run img:watch`  
画像フォルダーを監視し、変更されると画像圧縮が走ります。

## 対象ファイル
画像圧縮処理の対象と出力後のパスは `imagemin.mjs` で指定しています。  
png/jpg/gif/svgに対応しています。  

監視対象の画像フォルダーは `package.json` の `scripts` 内 `img:watch` に指定しています。