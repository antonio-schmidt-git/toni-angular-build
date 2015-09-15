var lazyPipe = require('lazypipe');

function _jsQualityPipe(config, plugins) {
    return lazyPipe()
        .pipe(plugins.jshint)
        .pipe(plugins.jshint.reporter, 'jshint-stylish')
        .pipe(function () {
            return plugins.if(config.failOnJsQualityError, plugins.jshint.reporter('fail'));
        });
}

module.exports = _jsQualityPipe;
