var path = require('path');

function _config(args) {
    var config = {},
        srcPath = 'src',
        sharedFolder = 'shared',
        componentsFolder = 'components',
        viewsFolder = 'views',
        templatesFolder = 'templates',
        subFolders = '/**/',
        htmlFiles = '*.html';

    config.optimize = args.opt;
    config.distPath = 'dist';

    /* html */
    config.templatesFolder = templatesFolder;
    config.viewFiles = [
        path.join(srcPath, sharedFolder, viewsFolder, subFolders, htmlFiles),
        path.join(srcPath, componentsFolder, subFolders, viewsFolder, subFolders, htmlFiles)];
    config.templateFiles = [
        path.join(srcPath, sharedFolder, templatesFolder, subFolders, htmlFiles),
        path.join(srcPath, componentsFolder, subFolders, templatesFolder, subFolders, htmlFiles)];
    config.sharedViewFilesRegexp = /src\\shared\\views\\.*\.html/;
    config.sharedTemplateFilesRegexp = /src\/shared\/templates\/.*\.html/;
    config.componentViewFilesRegexp = /src\\components\\.*\\views\\.*\.html/;
    config.componentsTemplateFilesRegexp = function (component) {
        return new RegExp("src\\/components\\/##COMPONENT##\\/templates\\/.*\\.html".replace("##COMPONENT##", component));
    };
    config.componentNameFromViewFile = function (viewFile) {
        return viewFile
            .replace(/.*src\\components\\/, '')
            .replace(/\\views.*/, '');
    };

    console.log('');
    console.log('***   CONFIG BEGIN ***');
    console.log(config);
    console.log('***   CONFIG END ***');
    console.log('');

    return config;
}



module.exports = _config;