var gulp = require('gulp');

var _clean = require('./clean');
var _build = require('./build');


var _reBuild = gulp.task('_re-build', ['_clean'], function(){
    return gulp.start('_build');
});


module.exports = _reBuild;