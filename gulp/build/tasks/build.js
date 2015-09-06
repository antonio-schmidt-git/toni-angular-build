var buildHtml = require('./buildHtml');

function _build(gulp, config, plugins) {
    buildHtml(gulp, config, plugins);

    return gulp.task('_build', ['_buildHtml']);
}

module.exports = _build;