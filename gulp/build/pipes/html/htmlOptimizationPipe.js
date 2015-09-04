var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    lazyPipe = require('lazypipe'),
    config = require('../../../config');

function _htmlOptimizationPipe() {
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

module.exports = _htmlOptimizationPipe();