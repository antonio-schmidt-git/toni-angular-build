var imageOptimizationPipe = require('./image-optimization-pipe');

function _imagesPipe(gulp, config, plugins) {
    var optimizationPipe = imageOptimizationPipe(plugins);

    return gulp.src(config.imageSourceFiles)
        .pipe(plugins.flatten())
        .pipe(plugins.if(config.optimize, optimizationPipe()))
        .pipe(gulp.dest(config.imagesFolder));
}

module.exports = _imagesPipe;