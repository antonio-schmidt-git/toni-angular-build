var requireDir = require('require-dir'),
    htmlPipes = requireDir('./html'),
    jsPipes = requireDir('./js');

function _buildPipe(gulp, config, plugins) {
    var htmlFilter = plugins.filter(config.htmlFiles, {restore: true}),
        jsFilter = plugins.filter(config.jsFiles, {restore: true}),
        cssFilter = plugins.filter(config.cssFiles, {restore: true}),
        viewsWithAssetsPipe = htmlPipes.viewsWithAssetsPipe(gulp, config, plugins),
        htmlPipe = htmlPipes.htmlPipe(gulp, config, plugins),
        jsPipe = jsPipes.jsPipe(config, plugins);

    // start build from view files with their assets
    return viewsWithAssetsPipe

        // process html
        .pipe(htmlFilter)
        .pipe(htmlPipe())
        .pipe(htmlFilter.restore)

        // process css
        .pipe(cssFilter)
        .pipe(cssFilter.restore)

        // process js
        .pipe(jsFilter)
        .pipe(jsPipe())
        .pipe(jsFilter.restore)

        .pipe(gulp.dest(config.distPath));
}

module.exports = _buildPipe;