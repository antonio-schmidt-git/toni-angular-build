angular.module('app.moduleB').controller('moduleBControllerA', function () {
    var self = angular.extend(this, {
        text: 'Module B Controller A text'
    });

    self.setText = function (text) {
        self.text = text;
    };

    return self;
});