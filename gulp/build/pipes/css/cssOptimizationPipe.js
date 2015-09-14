var lazyPipe = require('lazypipe');

function _cssOptimizationPipe(plugins) {
    return lazyPipe()
        .pipe(plugins.minifyCss);
}

module.exports = _cssOptimizationPipe;