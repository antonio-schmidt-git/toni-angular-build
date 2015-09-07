angular.module('app.moduleB').service('moduleBServiceA', function () {
    var self = angular.extend(this, {
        moduleBServiceAObj: {
            isSet: false
        }
    });

    self.moduleBServiceAFunc = function () {
        self.moduleBServiceAObj.isSet = true;
    };

    return self;
});