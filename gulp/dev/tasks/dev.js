var build = require('../../build/tasks/build');
var check = require('./check');

function _dev(gulp, config, plugins) {
    build(gulp, config, plugins);
    check(gulp, config, plugins);

    return gulp.task('_dev', ['_check', '_build']);
}

module.exports = _dev;