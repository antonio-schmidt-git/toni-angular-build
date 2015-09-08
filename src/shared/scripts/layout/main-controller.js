angular.module('app').controller('mainController', function (sharedDataServiceA, sharedDataServiceB) {
    var self = angular.extend(this, {
        navTitle: 'Toni angular build',
        sharedObjA: sharedDataServiceA.sharedDataServiceAObj,
        sharedObjB: sharedDataServiceB.sharedDataServiceBObj
    });

    self.getNavTitle = function () {
        return self.navTitle + ' ' + self.sharedObjA.isSet + ' ' + self.sharedObjB.isSet;
    };

    return self;
});