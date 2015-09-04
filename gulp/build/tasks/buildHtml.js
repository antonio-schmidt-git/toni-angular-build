var gulp = require('gulp');
var viewPipe = require('../pipes/html/viewPipe');
var templatePipe = require('../pipes/html/templatePipe');


var _buildHtml = gulp.task('_buildHtml', function () {
    return viewPipe();
});

module.exports = _buildHtml;