angular.module('app.moduleA').service('moduleAServiceB', function () {
    var self = angular.extend(this, {
        moduleAServiceBObj: {
            isSet: false
        }
    });

    self.moduleAServiceBFunc = function () {
        self.moduleAServiceBObj.isSet = true;
    };

    return self;
});