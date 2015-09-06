function _install(gulp, plugins) {
    return gulp.task('_install', function () {
        return gulp
            .src(['package.json', 'bower.json'])
            .pipe(plugins.install());
    });
}

module.exports = _install;