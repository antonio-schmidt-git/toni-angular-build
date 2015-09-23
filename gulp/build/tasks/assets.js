var fontsPipe = require('../pipes/assets/fontsPipe');
var imagesPipe = require('../pipes/assets/imagesPipe');
var faviconPipe = require('../pipes/assets/faviconPipe');

function _assets(gulp, config, plugins) {

    gulp.task('_fonts', function(){
        return fontsPipe(gulp, config, plugins);
    });

    gulp.task('_images', function(){
        return imagesPipe(gulp, config, plugins);
    });

    gulp.task('_favicon', function(){
        return faviconPipe(gulp, config);
    });

    return gulp.task('_assets', ['_fonts', '_images', '_favicon']);
}

module.exports = _assets;