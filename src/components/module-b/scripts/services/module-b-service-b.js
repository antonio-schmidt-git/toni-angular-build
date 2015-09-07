angular.module('app.moduleB').service('moduleBServiceB', function () {
    var self = angular.extend(this, {
        moduleBServiceBObj: {
            isSet: false
        }
    });

    self.moduleBServiceBFunc = function () {
        self.moduleBServiceBObj.isSet = true;
    };

    return self;
});