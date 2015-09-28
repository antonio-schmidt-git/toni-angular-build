var lazyPipe = require('lazypipe');
var htmlOptimizationPipe = require('./html-optimization-pipe');

function _transformTemplatePath(config) {
    return function (path) {
        var isSharedPath = path.dirname === '.';

        if (isSharedPath) {
            path.dirname += '/' + config.templatesFolder;
        }
    };
}

function _templateSourcePipe(gulp, config, plugins) {
    return gulp.src(config.templateFiles)
        .pipe(plugins.rename(_transformTemplatePath(config)))
        .pipe(plugins.if(config.optimize, htmlOptimizationPipe(plugins)()))
        .pipe(plugins.wrapper({
            header: '\n<script type="text/ng-template" id="${filename}">\n',
            footer: '\n</script>\n'
        }));
}

function _injectTransform(config) {
    return function (filePath, file, index, length, targetFile) {
        var isSourceAndTargetShared = targetFile.path.match(config.sharedViewFilesRegexp) &&
                filePath.match(config.sharedTemplateFilesRegexp),
            componentName = isSourceAndTargetShared ? '' : config.componentNameFromSourceFile(targetFile.path),
            isSourceAndTargetSameComponent = !isSourceAndTargetShared &&
                targetFile.path.match(config.componentViewFilesRegexp) &&
                filePath.match(config.componentsTemplateFilesRegexp(componentName));

        if (isSourceAndTargetShared || isSourceAndTargetSameComponent) {
            return file.contents.toString('utf8');
        }
        return '';
    };
}

function _getInjectOptions(config) {

    return {
        starttag: '<!-- inject:html -->',
        transform: _injectTransform(config)
    };
}

function _templatePipe(gulp, config, plugins) {
    return lazyPipe()
        .pipe(plugins.inject,
            _templateSourcePipe(gulp, config, plugins),
            _getInjectOptions(config));
}

module.exports = _templatePipe;