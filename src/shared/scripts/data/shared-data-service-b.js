angular.module('app').service('sharedDataServiceB', function (sharedInfraServiceA, sharedInfraServiceB) {
    var self = angular.extend(this, {
        sharedDataServiceBObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceBFunc = function () {
        self.sharedDataServiceBObj.isSet = sharedInfraServiceA.isSet || sharedInfraServiceB.isSet;
    };

    return self;
});