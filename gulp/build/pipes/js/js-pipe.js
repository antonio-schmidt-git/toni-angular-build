var
    lazyPipe = require('lazypipe');

function _jsPipe(config, plugins) {
    var es2015Pipe = require('./es-2015-pipe')(plugins),
        angularPipe = require('./angular-pipe')(plugins),
        optimizationPipe = require('./js-optimization-pipe')(plugins);

    return lazyPipe()
        .pipe(function () {
            return plugins.if(config.notThirdPartyJsFiles, es2015Pipe());
        })
        .pipe(angularPipe)
        .pipe(function () {
            return plugins.if(config.optimize, optimizationPipe());
        });
}

module.exports = _jsPipe;
