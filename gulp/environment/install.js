var gulp = require('gulp');
var install = require('gulp-install');

var _install = gulp.task('_install', function () {
    return gulp
        .src(['package.json', 'bower.json'])
        .pipe(install());
});

module.exports = _install;