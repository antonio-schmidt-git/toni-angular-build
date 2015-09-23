angular.module('app').run(function($httpBackend, apiRoutes) {
    /*
     This is just a quick example.
     May need to use other services for data store, as multiple services work on them.
     May need a helper class for url parsing.
     Should do mock logic properly: mocking states, at least 404...
     */
    var commonResources = [{id: 1, name: 'common1'}, {id: 2, name: 'common2'}];

    function _parseResourceId(url) {
        return parseInt(url.substr(url.lastIndexOf('/') + 1), 10);
    }

    $httpBackend.whenGET(apiRoutes.commonResource.getAll.matcher).respond(function(){
        return [200, commonResources];
    });

    $httpBackend.whenGET(apiRoutes.commonResource.get.matcher).respond(function(url) {
        var id = _parseResourceId(url);
        return [200, commonResources[id]];
    });

    $httpBackend.whenPOST(apiRoutes.commonResource.create.matcher).respond(function(method, url, data) {
        var commonResource = angular.fromJson(data);
        commonResource.id = Math.max.apply( Math, commonResources.map(function(item){ return item.id; })) + 1;
        commonResources.push(commonResource);
        return [201, commonResource, {}];
    });

    $httpBackend.whenPATCH(apiRoutes.commonResource.create.matcher).respond(function(method, url, data) {
        var modifiedResource = angular.fromJson(data),
            originalResource = commonResources.find(function (item) {
                return item.id === modifiedResource.id;
            });
        angular.merge(originalResource, modifiedResource);
        return [200, originalResource, {}];
    });

    $httpBackend.whenDELETE(apiRoutes.commonResource.remove.matcher).respond(function(url){
        var id = _parseResourceId(url);
        commonResources = commonResources.filter(function(item){
            return item.id !== id;
        });
        return [200];
    });

});