var lazyPipe = require('lazypipe'),
    jpegRecompress = require('imagemin-jpeg-recompress'),
    pngQuant = require('imagemin-pngquant');

function _imageOptimizationPipe(plugins) {
    var optimizerOptions = {
        progressive: true,
        optimizationLevel: 7,
        multipass: true,
        use: [jpegRecompress(), pngQuant()]
    };

    return lazyPipe()
        .pipe(plugins.imagemin, optimizerOptions);
}

module.exports = _imageOptimizationPipe;