var lazyPipe = require('lazypipe');

function _angularPipe(plugins) {
    return lazyPipe()
        .pipe(plugins.ngAnnotate);
}

module.exports = _angularPipe;
