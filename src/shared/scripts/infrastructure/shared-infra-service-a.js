angular.module('app').service('sharedInfraServiceA', function () {
    var self = angular.extend(this, {
        sharedInfraServiceAObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceAFunc = function () {
        self.sharedInfraServiceAObj.isSet = true;
    };

    return self;
});