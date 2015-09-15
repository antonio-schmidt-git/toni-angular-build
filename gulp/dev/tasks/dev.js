var reBuild = require('../../build/tasks/re-build');
var check = require('./check');

function _dev(gulp, config, plugins) {
    reBuild(gulp, config, plugins);
    check(gulp, config, plugins);

    return gulp.task('_dev', ['_check', '_re-build']);
}

module.exports = _dev;