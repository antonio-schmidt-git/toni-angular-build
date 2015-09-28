var buildPipe = require('../pipes/build-pipe');
var check = require('../../dev/tasks/check');
var assets = require('./assets');

function _build(gulp, config, plugins) {
    check(gulp, config, plugins);
    assets(gulp, config, plugins);

    return gulp.task('_build', ['_check', '_assets'], function () {
        var buildLogText = 'BUILDING COMPONENTS: ' + (config.componentsToBuild ? config.componentsToBuild : 'all');
        console.log(buildLogText);
        return buildPipe(gulp, config, plugins);
    });
}

module.exports = _build;