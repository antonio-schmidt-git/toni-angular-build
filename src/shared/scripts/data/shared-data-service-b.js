angular.module('app').service('sharedDataServiceB', function () {
    var self = angular.extend(this, {
        sharedDataServiceBObj: {
            isSet: false
        }
    });

    self.sharedInfraServiceBFunc = function () {
        self.sharedDataServiceBObj.isSet = true;
    };

    return self;
});