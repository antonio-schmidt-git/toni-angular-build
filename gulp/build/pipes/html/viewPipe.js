var requireDir = require('require-dir'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    lazyPipe = require('lazypipe'),
    config = require('../../../config'),
    htmlPipes = requireDir('./');

function _viewPipe() {
    return gulp
        .src(config.viewFiles)
        .pipe(htmlPipes.templatePipe())
        .pipe(plugins.if(config.optimize, htmlPipes.htmlOptimizationPipe()))
        .pipe(gulp.dest('dist'));
}

module.exports = _viewPipe;