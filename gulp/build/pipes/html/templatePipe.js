var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    lazyPipe = require('lazypipe'),
    config = require('../../../config');

function _transformTemplatePath(path) {
    var isSharedPath = path.dirname === '.';

    if (isSharedPath) {
        path.dirname += '/' + config.templatesFolder;
    }
}

function _templateSourcePipe() {
    return gulp.src(config.templateFiles)
        .pipe(plugins.rename(_transformTemplatePath))
        .pipe(plugins.wrapper({
            header: '<script type="text/ng-template" id="${filename}">\n',
            footer: '</script>\n'
        }));

}

function _createInjectedContent(filePath, file, index, length, targetFile) {
    var isSourceAndTargetShared = targetFile.path.match(config.sharedViewFilesRegexp)
            && filePath.match(config.sharedTemplateFilesRegexp),
        componentName = isSourceAndTargetShared ? '' : config.componentNameFromViewFile(targetFile.path),
        isSourceAndTargetSameComponent = !isSourceAndTargetShared
            && targetFile.path.match(config.componentViewFilesRegexp)
            && filePath.match(config.componentsTemplateFilesRegexp(componentName));

    if (isSourceAndTargetShared || isSourceAndTargetSameComponent) {
        return file.contents.toString('utf8');
    }
    return '';
}

function _templatePipe() {
    var injectOptions = {
        starttag: '<!-- inject:html -->',
        transform: _createInjectedContent
    };

    return lazyPipe()
        .pipe(plugins.inject, _templateSourcePipe(), injectOptions);
}

module.exports = _templatePipe();