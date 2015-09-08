function _viewSourcePipe(gulp, config, plugins) {
    var useRef = plugins.useref,
        assets = useRef.assets();

    // get all view files
    return gulp.src(config.viewFiles)
        // include and concatenate assets (js and css)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useRef());
}

module.exports = _viewSourcePipe;