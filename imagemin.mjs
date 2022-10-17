import imagemin from 'imagemin-keep-folder'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import gifsicle from 'imagemin-gifsicle'
import svgo from 'imagemin-svgo'

(async () => {
  try {
    const files = await imagemin(['_resource/assets/img/**/*.{jpg,jpeg,png,svg,gif}'], {
        destination: 'build/images',
        plugins: [
          pngquant({
            quality: [.65, .8],
            speed: 1
          }),
          mozjpeg({
            quality: 80
          }),
          gifsicle(),
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
        replaceOutputDir: output => {
          return output.replace(/_resource\/assets\/img\//, './html/assets/img/')
        }
    });
    console.log(files);
  }
  catch(error) {
    return console.error('imagemin: ', error);
  }
})();
