var gulp = require('gulp'),
    del = require('del');

var _clean = gulp.task('_clean', function () {
    return del.sync(['./dist/**']);
});

module.exports = _clean;