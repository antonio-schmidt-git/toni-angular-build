angular.module('app').service('sharedDataServiceA', function () {
    var self = angular.extend(this, {
        sharedDataServiceAObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceAFunc = function () {
        self.sharedDataServiceAObj.isSet = true;
    };

    return self;
});