var lazyPipe = require('lazypipe');

function _cssPipe(config, plugins) {
    var sassPipe = require('./sass-pipe')(config, plugins),
        prefixPipe = require('./css-prefix-pipe')(config, plugins),
        optimizationPipe = require('./css-optimization-pipe')(plugins);

    return lazyPipe()
        .pipe(sassPipe)
        .pipe(prefixPipe)
        .pipe(function () {
            return plugins.if(config.optimize, optimizationPipe());
        });
}

module.exports = _cssPipe;
