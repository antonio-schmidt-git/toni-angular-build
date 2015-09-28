var fontsPipe = require('../pipes/assets/font-pipe');
var imagesPipe = require('../pipes/assets/image-pipe');
var faviconPipe = require('../pipes/assets/favicon-pipe');

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