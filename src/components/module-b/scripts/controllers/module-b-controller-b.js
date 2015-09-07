angular.module('app.moduleB').controller('moduleBControllerB', function () {
    var self = angular.extend(this, {
        text: 'Module B Controller B text'
    });

    self.setText = function (text) {
        self.text = text;
    };

    return self;
});