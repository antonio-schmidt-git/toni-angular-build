angular.module('app').run(function($httpBackend) {

    var passThroughPatterns = [
        { matcher: /.html/, method: 'GET' }
    ];

    angular.forEach(passThroughPatterns, function(passThroughPattern){
        $httpBackend.when(passThroughPattern.method, passThroughPattern.matcher).passThrough();
    });

});