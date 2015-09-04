var gulp = require('gulp');
var config = require('../../../config');
var lazyPipe = require('lazypipe');
var htmlMin = require('gulp-htmlmin');

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
        .pipe(htmlMin, htmlOptimizationOptions);
}

module.exports = _htmlOptimizationPipe();