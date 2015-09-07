var requireDir = require('require-dir'),
    lazyPipe = require('lazypipe'),
    htmlPipes = requireDir('./');

function _viewPipe(gulp, config, plugins) {
    var useRef = plugins.useref,
        assets = useRef.assets(),
        htmlFilter = plugins.filter('**/*.html', {restore: true}),
        jsFilter = plugins.filter('**/*.js', {restore: true}),
        cssFilter = plugins.filter('**/*.css', {restore: true});

    return gulp
        .src(config.viewFiles)

        // include and concatenate assets with gulp-useref
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useRef())

        // process html
        .pipe(htmlFilter)
        .pipe(htmlPipes.templatePipe(gulp, config, plugins)())
        .pipe(plugins.if(config.optimize, htmlPipes.htmlOptimizationPipe(plugins)()))
        .pipe(htmlFilter.restore)

        // process css
        .pipe(cssFilter)
        .pipe(cssFilter.restore)

        // process js
        .pipe(jsFilter)
        .pipe(jsFilter.restore)

        .pipe(gulp.dest(config.distPath));
}

module.exports = _viewPipe;