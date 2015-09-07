angular.module('app.moduleA').controller('moduleAControllerB', function () {
    var self = angular.extend(this, {
        text: 'Module A Controller B text'
    });

    self.setText = function (text) {
        self.text = text;
    };

    return self;
});