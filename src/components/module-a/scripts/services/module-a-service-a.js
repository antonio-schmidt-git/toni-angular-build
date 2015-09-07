angular.module('app.moduleA').service('moduleAServiceA', function () {
    var self = angular.extend(this, {
        moduleAServiceAObj: {
            isSet: false
        }
    });

    self.moduleAServiceAFunc = function () {
        self.moduleAServiceAObj.isSet = true;
    };

    return self;
});