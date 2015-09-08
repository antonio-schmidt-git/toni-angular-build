var requireDir = require('require-dir'),
    htmlPipes = requireDir(),
    lazyPipe = require('lazypipe');

function _htmlPipe(gulp, config, plugins) {
    var templatePipe = htmlPipes.templatePipe(gulp, config, plugins),
        htmlOptimizationPipe = htmlPipes.htmlOptimizationPipe(plugins);

    return lazyPipe()
        .pipe(templatePipe)
        .pipe(function () {
            return plugins.if(config.optimize, htmlOptimizationPipe());
        });
}

module.exports = _htmlPipe;
