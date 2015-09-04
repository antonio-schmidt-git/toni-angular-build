var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

var _install = gulp.task('_install', function () {
    return gulp
        .src(['package.json', 'bower.json'])
        .pipe(plugins.install());
});

module.exports = _install;