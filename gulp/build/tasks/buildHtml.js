var viewPipe = require('../pipes/html/viewPipe');

function _buildHtml(gulp, config, plugins) {
    return gulp.task('_buildHtml', function () {
        return viewPipe(gulp, config, plugins);
    });
}

module.exports = _buildHtml;