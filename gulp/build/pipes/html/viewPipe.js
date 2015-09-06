var requireDir = require('require-dir'),
    lazyPipe = require('lazypipe'),
    htmlPipes = requireDir('./');

function _viewPipe(gulp, config, plugins) {
    var useRef = plugins.useref,
        assets = useRef.assets();

    return gulp
        .src(config.viewFiles)
        .pipe(htmlPipes.templatePipe(gulp, config, plugins)())
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useRef())
        .pipe(plugins.if(config.optimize, htmlPipes.htmlOptimizationPipe(plugins)()))
        .pipe(gulp.dest(config.distPath));
}

module.exports = _viewPipe;