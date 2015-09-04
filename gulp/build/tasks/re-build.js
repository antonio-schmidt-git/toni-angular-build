var gulp = require('gulp');

require('./clean');
require('./build');

var _reBuild = gulp.task('_re-build', ['_clean'], function(){
    return gulp.start('_build');
});

module.exports = _reBuild;