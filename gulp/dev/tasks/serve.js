function _serve(gulp, config, plugins) {
    return gulp.task('_serve', function () {
        gulp.src(config.distPath)
            .pipe(plugins.webserver({
                livereload: true,
                open: true
            }));
    });
}

module.exports = _serve;