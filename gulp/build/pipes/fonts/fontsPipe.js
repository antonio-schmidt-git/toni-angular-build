function _fontsPipe(gulp, config, plugins) {
    return gulp.src(config.fontSourceFiles)
        .pipe(plugins.flatten())
        .pipe(gulp.dest(config.fontsFolder));
}

module.exports = _fontsPipe;