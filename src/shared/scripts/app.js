angular.module('app.modules', ['ui.bootstrap']);

// Register providers for lazy module loading
function registerProviders(app) {
    app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.service = $provide.service;
        app.factory = $provide.factory;
        app.constant = $provide.constant;
    });
}

registerProviders(angular.module('app.moduleA', ['app.modules']));
registerProviders(angular.module('app.moduleB', ['app.modules']));

angular.module('app', [
    'app.modules',
    'app.moduleA',
    'app.moduleB'
]);