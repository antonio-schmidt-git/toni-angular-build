angular.module('app.moduleA').controller('moduleAControllerA', function () {
    var self = angular.extend(this, {
        text: 'Module A Controller A text'
    });

    self.setText = function (text) {
        self.text = text;
    };

    return self;
});