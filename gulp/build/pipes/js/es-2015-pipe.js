var lazyPipe = require('lazypipe');

function _es2015Pipe(plugins) {
    return lazyPipe()
        .pipe(plugins.babel)
        .pipe(plugins.browserify, { insertGlobals: true, debug: true });
}

module.exports = _es2015Pipe;