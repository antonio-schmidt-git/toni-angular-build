var buildPipe = require('../pipes/buildPipe');
var check = require('../../dev/tasks/check');
var assets = require('./assets');

function _build(gulp, config, plugins) {
    check(gulp, config, plugins);
    assets(gulp, config, plugins);

    return gulp.task('_build', ['_check', '_assets'], function () {
        return buildPipe(gulp, config, plugins);
    });
}

module.exports = _build;