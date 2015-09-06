var del = require('del');

function _clean(gulp) {
    return gulp.task('_clean', function () {
        return del.sync(['./dist/**']);
    });
}

module.exports = _clean;