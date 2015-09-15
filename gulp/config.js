var path = require('path');

function _config(args) {
    var config = {},
        srcPath = 'src',
        sharedFolder = 'shared',
        packagesFolder = 'packages',
        componentsFolder = 'components',
        viewsFolder = 'views',
        templatesFolder = 'templates',
        stylesFolder = 'styles',
        subFolders = '/**/',
        htmlFiles = '*.html',
        jsFiles = '*.js',
        cssFiles = '*.css',
        thirdPartyFiles = '*thirdparty*';

    config.optimize = args.prod || args.optimize;
    config.distPath = 'dist';

    /* build common */
    config.htmlFiles = path.join('**/', htmlFiles);
    config.jsFiles = path.join('**/', jsFiles);
    config.cssFiles = path.join('**/', cssFiles);

    /* html build */
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

    /* js build */
    config.notThirdPartyJsFiles = '!**/' + thirdPartyFiles + '.js';

    /* css build */
    config.cssIncludePaths = [
        path.join('./', srcPath, sharedFolder, stylesFolder)];
    config.cssPrefixBrowsers = ['last 2 versions', '> 1%'];

    /* source files */
    config.jsSourceFiles = [
        path.join('./', srcPath, subFolders, jsFiles),
        '!' + path.join('./', srcPath, packagesFolder, subFolders, jsFiles)
    ];

    console.log('');
    console.log('***   CONFIG BEGIN ***');
    console.log(config);
    console.log('***   CONFIG END ***');
    console.log('');

    return config;
}



module.exports = _config;