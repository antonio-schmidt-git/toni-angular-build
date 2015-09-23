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
        scssFiles = '*.scss',
        allSourceFiles = '*.*',
        thirdPartyFiles = '*thirdparty*',
        assetsFolder = 'assets';

    config.prod = args.prod;
    config.optimize = args.prod || args.optimize;
    config.failOnJsQualityError = config.prod;
    config.failOnCssQualityError = config.prod;
    config.distPath = 'dist';

    /* build common */
    config.componentsToBuild = '';
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
    config.componentsSourceFilesRegexp = function (component) {
        var regexpString = 'src\\\\components\\\\##COMPONENT##\\\\.*'.replace('##COMPONENT##', component);
        return new RegExp(regexpString);
    };
    config.componentsTemplateFilesRegexp = function (component) {
        return new RegExp('src\\/components\\/##COMPONENT##\\/templates\\/.*\\.html'.replace('##COMPONENT##', component));
    };
    config.componentNameFromSourceFile = function (viewFile) {
        return viewFile
            .replace(/.*src\\shared/, '')
            .replace(/.*src\\components\\/, '')
            .replace(/\\(views|templates|scripts|styles|assets).*/, '');
    };

    /* js build */
    config.notThirdPartyJsFiles = '!**/' + thirdPartyFiles + '.js';

    /* css build */
    config.cssIncludePaths = [
        path.join('./', srcPath, sharedFolder, stylesFolder)];
    config.cssPrefixBrowsers = ['last 2 version', 'safari 5', 'ie > 7', 'opera 12.1', 'ios 6', 'android 4', '> 1%'];

    /* source files */
    config.watchedSourceFiles = [
        path.join('./', srcPath, subFolders, allSourceFiles),
        '!' + path.join('./', srcPath, packagesFolder, subFolders, allSourceFiles)
    ];
    config.jsSourceFiles = [
        path.join('./', srcPath, subFolders, jsFiles),
        '!' + path.join('./', srcPath, packagesFolder, subFolders, jsFiles)
    ];
    config.scssSourceFiles = [
        path.join('./', srcPath, subFolders, scssFiles),
        '!' + path.join('./', srcPath, packagesFolder, subFolders, scssFiles),
        '!' + path.join('./', srcPath, sharedFolder, stylesFolder, 'bootstrap-custom.scss')
    ];
    config.fontSourceFiles = [
        path.join(srcPath, packagesFolder, 'bootstrap-sass/assets/fonts/bootstrap/*.{eot,svg,ttf,woff,woff2}')
    ];
    config.imageSourceFiles = [
        path.join(srcPath, sharedFolder, subFolders, '*.{png,jpg,jpeg,svg}')
    ];
    config.faviconPath = path.join(srcPath, sharedFolder, 'favicon.ico');

    /* assets  */
    config.fontsFolder = path.join(config.distPath, assetsFolder, 'fonts');
    config.imagesFolder = path.join(config.distPath, assetsFolder, 'images');

    console.log('');
    console.log('*** INITIAL CONFIG BEGIN ***');
    console.log(config);
    console.log('*** INITIAL CONFIG END ***');
    console.log('');

    return config;
}



module.exports = _config;