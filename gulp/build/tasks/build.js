var gulp = require('gulp');
require('./buildHtml');

var _build = gulp.task('_build', ['_buildHtml']);

module.exports = _build;