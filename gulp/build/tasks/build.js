var buildPipe = require('../pipes/buildPipe');
require('../../dev/tasks/check');

function _build(gulp, config, plugins) {
    return gulp.task('_build', ['_check'], function () {
        return buildPipe(gulp, config, plugins);
    });
}

module.exports = _build;