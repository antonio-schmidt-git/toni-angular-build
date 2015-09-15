var jsQualityPipe = require('../../build/pipes/js/jsQualityPipe');

function _check(gulp, config, plugins) {
    var qualityPipe = jsQualityPipe(config, plugins);

    return gulp.task('_check', function () {
        return gulp.src(config.jsSourceFiles)
            .pipe(qualityPipe());
    });
}

module.exports = _check;