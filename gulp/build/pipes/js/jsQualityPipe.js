var lazyPipe = require('lazypipe');

function _jsQualityPipe(config, plugins) {
    return lazyPipe()
        .pipe(plugins.jshint)
        .pipe(plugins.jshint.reporter, 'jshint-stylish');
}

module.exports = _jsQualityPipe;
