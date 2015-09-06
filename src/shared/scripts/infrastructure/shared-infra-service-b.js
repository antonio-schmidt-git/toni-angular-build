angular.module('app').service('sharedInfraServiceB', function () {
    var self = angular.extend(this, {
        sharedInfraServiceBObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceBFunc = function () {
        self.sharedInfraServiceBObj.isSet = true;
    };

    return self;
});