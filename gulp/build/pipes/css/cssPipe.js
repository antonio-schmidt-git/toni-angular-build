var requireDir = require('require-dir'),
    cssPipes = requireDir(),
    lazyPipe = require('lazypipe');

function _cssPipe(config, plugins) {
    var sassPipe = cssPipes.sassPipe(config, plugins),
        prefixPipe = cssPipes.cssPrefixPipe(config, plugins),
        optimizationPipe = cssPipes.cssOptimizationPipe(plugins);

    return lazyPipe()
        .pipe(sassPipe)
        .pipe(prefixPipe)
        .pipe(function () {
            return plugins.if(config.optimize, optimizationPipe());
        });
}

module.exports = _cssPipe;
