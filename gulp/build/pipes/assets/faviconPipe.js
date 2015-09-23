function _faviconPipe(gulp, config) {
    return gulp.src(config.faviconPath)
        .pipe(gulp.dest(config.distPath));
}

module.exports = _faviconPipe;