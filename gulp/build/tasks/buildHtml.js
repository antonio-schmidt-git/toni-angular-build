var gulp = require('gulp'),
    viewPipe = require('../pipes/html/viewPipe');


var _buildHtml = gulp.task('_buildHtml', function () {
    return viewPipe();
});

module.exports = _buildHtml;