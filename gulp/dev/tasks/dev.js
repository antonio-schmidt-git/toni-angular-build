var build = require('../../build/tasks/build');
var check = require('./check');
var watch = require('./watch');

function _dev(gulp, config, plugins) {
    build(gulp, config, plugins);
    check(gulp, config, plugins);
    watch(gulp, config, plugins);

    return gulp.task('_dev', ['_check', '_build'], function (){
        gulp.start('_watch');
    });
}

module.exports = _dev;