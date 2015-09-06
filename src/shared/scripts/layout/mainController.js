angular.module('app').controller('mainController', function () {
    var self = angular.extend(this, {
        navTitle: 'Toni angular build'
    });

    self.getNavTitle = function () {
        return self.navTitle;
    };

    return self;
});