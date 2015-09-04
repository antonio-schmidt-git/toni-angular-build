var gulp = require('gulp');
var _buildHtml = require('./buildHtml');

var _build = gulp.task('_build', ['_buildHtml']);

module.exports = _build;