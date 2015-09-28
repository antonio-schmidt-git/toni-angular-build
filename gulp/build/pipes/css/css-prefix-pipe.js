var lazyPipe = require('lazypipe');

function _cssPrefixPipe(config, plugins) {
    return lazyPipe()
        .pipe(plugins.autoprefixer, {browsers: config.cssPrefixBrowsers});
}

module.exports = _cssPrefixPipe;
