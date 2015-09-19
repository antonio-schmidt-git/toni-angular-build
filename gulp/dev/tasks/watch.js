var build = require('../../build/tasks/build');
var check = require('./check');

function _watch(gulp, config, plugins) {
    build(gulp, config, plugins);
    check(gulp, config, plugins);

    return gulp.task('_watch', function () {
        return gulp.watch(config.watchedSourceFiles, function(event){
            if(event.type !== 'changed') {
                return;
            }

            config.componentsToBuild = config.componentNameFromSourceFile(event.path);
            gulp.start('_build');
        });
    });
}

module.exports = _watch;