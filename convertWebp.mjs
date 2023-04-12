import imagemin from 'imagemin-keep-folder'
import imageminWebp from "imagemin-webp"

(async () => {
  try {
    console.time('convertWebp');

    // 処理対象の画像
    // await imagemin(['_src/assets/img/**/*.{jpg,jpeg,png}'], {
    await imagemin(['./assets/img/**/*.{jpg,jpeg,png}'], {
      plugins: [
        imageminWebp()
      ],
      // 出力先指定
      replaceOutputDir: output => {
        // return output.replace(/_src\/assets\/img\//, './assets/img/')
        return output.replace(/.\/assets\/img\//, './assets/img/')
      }
    });

    console.timeEnd('convertWebp');
  }
  catch(error) {
    return console.error('convertWebp: ', error);
  }
})();