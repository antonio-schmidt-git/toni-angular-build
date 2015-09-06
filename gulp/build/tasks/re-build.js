var clean = require('./clean');
var build = require('./build');


function _reBuild(gulp, config, plugins) {
    clean(gulp, config);
    build(gulp, config, plugins);

    return gulp.task('_re-build', ['_clean'], function () {
        return gulp.start('_build');
    });
}

module.exports = _reBuild;