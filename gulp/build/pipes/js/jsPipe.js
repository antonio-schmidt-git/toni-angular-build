var requireDir = require('require-dir'),
    jsPipes = requireDir(),
    lazyPipe = require('lazypipe');

function _jsPipe(gulp, config, plugins) {
    var angularPipe = jsPipes.angularPipe(plugins);

    return lazyPipe()
        .pipe(angularPipe);
}

module.exports = _jsPipe;
