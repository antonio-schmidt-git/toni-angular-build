function _buildPipe(gulp, config, plugins) {
    var htmlFilter = plugins.filter(config.htmlFiles, {restore: true}),
        jsFilter = plugins.filter(config.jsFiles, {restore: true}),
        cssFilter = plugins.filter(config.cssFiles, {restore: true}),
        viewsWithAssetsPipe = require('./html/views-with-assets-pipe')(gulp, config, plugins),
        htmlPipe = require('./html/html-pipe')(gulp, config, plugins),
        jsPipe = require('./js/js-pipe')(config, plugins),
        cssPipe = require('./css/css-pipe')(config, plugins);

    // start build from view files with their assets
    return viewsWithAssetsPipe

        // process html
        .pipe(htmlFilter)
        .pipe(htmlPipe())
        .pipe(htmlFilter.restore)

        // process css
        .pipe(cssFilter)
        .pipe(cssPipe())
        .pipe(cssFilter.restore)

        // process js
        .pipe(jsFilter)
        .pipe(jsPipe())
        .pipe(jsFilter.restore)

        .pipe(gulp.dest(config.distPath));
}

module.exports = _buildPipe;