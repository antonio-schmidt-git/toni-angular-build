var requireDir = require('require-dir'),
    jsPipes = requireDir(),
    lazyPipe = require('lazypipe');

function _jsPipe(config, plugins) {
    var es2015Pipe = jsPipes.es2015Pipe(plugins),
        angularPipe = jsPipes.angularPipe(plugins);

    return lazyPipe()
        .pipe(function () {
            return plugins.if(config.notThirdPartyJsFiles, es2015Pipe());
        })
        .pipe(angularPipe);
}

module.exports = _jsPipe;
