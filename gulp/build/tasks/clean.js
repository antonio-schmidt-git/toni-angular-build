var del = require('del');

function _clean(gulp, config) {
    var distAllFiles = config.distPath + '/**';

    return gulp.task('_clean', function () {
        return del.sync([distAllFiles]);
    });
}

module.exports = _clean;