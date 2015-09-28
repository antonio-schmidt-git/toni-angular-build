var lazyPipe = require('lazypipe');

function _htmlPipe(gulp, config, plugins) {
    var templatePipe = require('./template-pipe')(gulp, config, plugins),
        htmlOptimizationPipe = require('./html-optimization-pipe')(plugins);

    return lazyPipe()
        .pipe(templatePipe)
        .pipe(function () {
            return plugins.if(config.optimize, htmlOptimizationPipe());
        });
}

module.exports = _htmlPipe;
