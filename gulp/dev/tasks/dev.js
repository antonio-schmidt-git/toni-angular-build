var gulp = require('gulp');
require('../../build/tasks/re-build');

var _dev = gulp.task('_dev', ['_re-build']);

module.exports = _dev;