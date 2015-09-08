angular.module('app').controller('mainController', function (sharedDataServiceA, sharedDataServiceB) {
    var self = angular.extend(this, {
        navTitle: 'Toni angular build'
    });

    self.getNavTitle = function () {
        return self.navTitle + ' ' + sharedDataServiceA.isSet + ' ' + sharedDataServiceB.isSet;
    };

    return self;
});