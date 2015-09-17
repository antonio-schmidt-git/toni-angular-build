var jsQualityPipe = require('../pipes/jsQualityPipe'),
    scssQualityPipe = require('../pipes/scssQualityPipe');

function _check(gulp, config, plugins) {
    gulp.task('_checkJs', function () {
        return gulp.src(config.jsSourceFiles)
            .pipe(jsQualityPipe(config, plugins)());
    });

    gulp.task('_checkScss', function () {
        return gulp.src(config.scssSourceFiles)
            .pipe(scssQualityPipe(config, plugins)());
    });

    return gulp.task('_check', ['_checkJs', '_checkScss']);
}

module.exports = _check;