var lazyPipe = require('lazypipe');

function _jsOptimizationPipe(plugins) {
    return lazyPipe()
        .pipe(plugins.uglify);
}

module.exports = _jsOptimizationPipe;