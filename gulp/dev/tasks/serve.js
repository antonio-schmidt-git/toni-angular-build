function _serve(gulp, config, plugins) {
    return gulp.task('_serve', function () {
        gulp.src(config.distPath)
            .pipe(plugins.webserver({
                fallback: 'index.html',
                livereload: true,
                open: true
            }));
    });
}

module.exports = _serve;