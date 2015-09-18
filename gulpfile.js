var gulp = require('gulp'),
    args = require('yargs').argv,
    config = require('./gulp/config')(args),
    plugins = require('gulp-load-plugins')();

// INSTALL
gulp.task('install', ['_install']);

// DEV
gulp.task('dev', ['_dev']);
gulp.task('check', ['_check']);
gulp.task('serve', ['_serve']);

// BUILD (--prod, --optimize)
gulp.task('build', ['_re-build']);


// USED TASKS FOR BUILD (at the end because of WebStorm gulp view, to have runnable tasks first)
require('./gulp/environment/install')(gulp, plugins);
require('./gulp/build/tasks/re-build')(gulp, config, plugins);
require('./gulp/dev/tasks/dev')(gulp, config, plugins);
require('./gulp/dev/tasks/check')(gulp, config, plugins);
require('./gulp/dev/tasks/serve')(gulp, config, plugins);