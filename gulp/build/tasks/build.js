var buildPipe = require('../pipes/buildPipe');

function _build(gulp, config, plugins) {
    return gulp.task('_build', function () {
        return buildPipe(gulp, config, plugins);
    });
}

module.exports = _build;