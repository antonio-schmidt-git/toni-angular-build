angular.module('app').service('sharedDataServiceA', function (sharedInfraServiceA, sharedInfraServiceB) {
    var self = angular.extend(this, {
        sharedDataServiceAObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceAFunc = function () {
        self.sharedDataServiceAObj.isSet = sharedInfraServiceA.isSet || sharedInfraServiceB.isSet;
    };

    return self;
});