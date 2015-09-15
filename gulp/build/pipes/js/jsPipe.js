var requireDir = require('require-dir'),
    jsPipes = requireDir(),
    lazyPipe = require('lazypipe');

function _jsPipe(config, plugins) {
    var es2015Pipe = jsPipes.es2015Pipe(plugins),
        angularPipe = jsPipes.angularPipe(plugins),
        optimizationPipe = jsPipes.jsOptimizationPipe(plugins),
        qualityPipe = jsPipes.jsQualityPipe(config, plugins);

    return lazyPipe()
        .pipe(function () {
            return plugins.if(config.notThirdPartyJsFiles, qualityPipe());
        })
        .pipe(function () {
            return plugins.if(config.notThirdPartyJsFiles, es2015Pipe());
        })
        .pipe(angularPipe)
        .pipe(function () {
            return plugins.if(config.optimize, optimizationPipe());
        });
}

module.exports = _jsPipe;
