var reBuild = require('../../build/tasks/re-build')

function _dev(gulp, config, plugins) {
    reBuild(gulp, config, plugins);

    return gulp.task('_dev', ['_re-build']);
}

module.exports = _dev;