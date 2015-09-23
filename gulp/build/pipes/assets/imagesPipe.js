function _imagesPipe(gulp, config, plugins) {
    return gulp.src(config.imageSourceFiles)
        .pipe(plugins.flatten())
        .pipe(gulp.dest(config.imagesFolder));
}

module.exports = _imagesPipe;