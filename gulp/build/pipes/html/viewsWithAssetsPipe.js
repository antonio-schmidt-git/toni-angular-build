function _viewSourcePipe(gulp, config, plugins) {
    var useRef = plugins.useref,
        assets = useRef.assets(),
        filterComponents = !!config.componentsToBuild,
        componentSourceFilesRegexp = config.componentsSourceFilesRegexp(config.componentsToBuild),
        componentFilter = filterComponents === false ?
            plugins.filter('**/*', {restore:true}) :
            plugins.filter(function(file) {
                return componentSourceFilesRegexp.test(file.path);
            });

    // get all view files
    return gulp.src(config.viewFiles)
        // filter to components
        .pipe(componentFilter)
        // include and concatenate assets (js and css)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useRef());
}

module.exports = _viewSourcePipe;