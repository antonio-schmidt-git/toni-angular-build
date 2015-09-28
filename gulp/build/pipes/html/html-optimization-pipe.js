var lazyPipe = require('lazypipe');

function _htmlOptimizationPipe(plugins) {
    var htmlOptimizationOptions = {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDocType: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeIgnored: true,
        maxLineLength: 150
    };

    return lazyPipe()
        .pipe(plugins.htmlmin, htmlOptimizationOptions);
}

module.exports = _htmlOptimizationPipe;