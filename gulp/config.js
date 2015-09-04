var path = require('path');

var config = {};

config.optimize = false;

config.srcPath = 'src';
config.distPath = 'dist';
config.sharedFolder = 'shared';
config.componentsFolder = 'components';
config.viewsFolder = 'views';
config.templatesFolder = 'templates';
config.viewFileSelector = config.viewsFolder + '/**/*.html';
config.templateFileSelector = config.templatesFolder + '/**/*.html';

config.sharedPath = path.join(config.srcPath, config.sharedFolder);
config.sharedViewFiles = path.join(config.sharedPath, config.viewFileSelector);
config.sharedViewFilesRegexp = /src\\shared\\views\\.*\.html/;
config.sharedTemplateFiles = path.join(config.sharedPath, config.templateFileSelector);
config.sharedTemplateFilesRegexp = /src\/shared\/templates\/.*\.html/;

config.componentsPath = path.join(config.srcPath, config.componentsFolder);
config.componentsSubFolderPath = path.join(config.componentsPath, '/**/');
config.componentsViewFiles = path.join(config.componentsSubFolderPath, config.viewFileSelector);
config.componentViewFilesRegexp = /src\\components\\.*\\views\\.*\.html/;
config.componentFolderRegexp = /.*src\\components\\/;
config.viewsFolderRegexp = /\\views.*/;
config.componentNameFromViewFile = function (viewFile) {
    return viewFile
        .replace(config.componentFolderRegexp, '')
        .replace(config.viewsFolderRegexp, '');
};

config.componentsTemplateFiles = path.join(config.componentsSubFolderPath, config.templateFileSelector);
config.componentsTemplateFilesRegexp = function(component) {
    return new RegExp("src\\/components\\/##COMPONENT##\\/templates\\/.*\\.html".replace("##COMPONENT##", component));
};

config.viewFiles = [config.sharedViewFiles, config.componentsViewFiles];
config.templateFiles = [config.sharedTemplateFiles, config.componentsTemplateFiles];

console.log('');
console.log('***   CONFIG BEGIN ***');
console.log(config);
console.log('***   CONFIG END ***');
console.log('');

module.exports = config;