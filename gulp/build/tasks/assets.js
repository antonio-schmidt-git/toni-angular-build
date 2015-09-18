var fontsPipe = require('../pipes/fonts/fontsPipe');

function _assets(gulp, config, plugins) {

    gulp.task('_fonts', function(){
        return fontsPipe(gulp, config, plugins);
    });

    return gulp.task('_assets', ['_fonts']);
}

module.exports = _assets;