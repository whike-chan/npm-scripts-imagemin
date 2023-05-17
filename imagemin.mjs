import imagemin from 'imagemin-keep-folder'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import gifsicle from 'imagemin-gifsicle'
import svgo from 'imagemin-svgo'

(async () => {
  try {
    console.time('imagemin');

    // 処理したい画像を渡す
    await imagemin(['_src/assets/img/**/*.{jpg,jpeg,png,svg,gif}'], {
      destination: 'build/images',
      plugins: [
        // png
        pngquant({
          quality: [.65, .8],
          speed: 1
        }),
        // jpg
        mozjpeg({
          quality: 80
        }),
        // gif
        gifsicle(),
        // svg
        svgo({
          plugins: [{
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                convertShapeToPath: false,
                collapseGroups: false,
                cleanupIDs: false
              }
            }
          }]
        })
      ],
      // 出力先指定
      // 処理対象の画像と同じ出力先の場合は不要
      replaceOutputDir: output => {
        return output.replace(/_src\/assets\/img\//, './assets/img/')
      }
    });
    console.timeEnd('imagemin');
  }
  catch(error) {
    return console.error('imagemin: ', error);
  }
})();
