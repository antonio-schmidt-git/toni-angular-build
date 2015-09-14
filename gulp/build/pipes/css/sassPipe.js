var lazyPipe = require('lazypipe');

function _sassPipe(config, plugins) {
    return lazyPipe()
        .pipe(plugins.sass, {includePaths: config.cssIncludePaths});
}

module.exports = _sassPipe;
