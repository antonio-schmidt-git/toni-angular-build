var lazyPipe = require('lazypipe');

function _scssQualityPipe(config, plugins) {
    return lazyPipe()
        .pipe(plugins.scssLint)
        .pipe(function () {
            return plugins.if(config.failOnCssQualityError, plugins.scssLint.failReporter());
        });
}

module.exports = _scssQualityPipe;
