angular.module('app.moduleA').controller('moduleAControllerB', function (moduleAServiceA, moduleAServiceB) {
    var self = angular.extend(this, {
        text: 'Module A Controller B text'
    });

    self.setText = function (text) {
        self.text = text + ' ' + moduleAServiceA.isSet + ' ' + moduleAServiceB.isSet;
    };

    return self;
});