angular.module('app.moduleA').controller('moduleAControllerA', function (moduleAServiceA, moduleAServiceB) {
    var self = angular.extend(this, {
        text: 'Module A Controller A text'
    });

    self.setText = function (text) {
        self.text = text + ' ' + moduleAServiceA.isSet + ' ' + moduleAServiceB.isSet;
    };

    return self;
});