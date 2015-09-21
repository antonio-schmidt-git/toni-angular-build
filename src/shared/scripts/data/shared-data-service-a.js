export default class SharedDataServiceA {

    constructor(apiRoutes, apiCaller, sharedInfraServiceA, sharedInfraServiceB) {
        this.apiRoutes = apiRoutes;
        this.apiCaller = apiCaller;
        this._sharedInfraServiceA = sharedInfraServiceA;
        this._sharedInfraServiceB = sharedInfraServiceB;

        this.sharedDataServiceAObj = {
            isSet: sharedInfraServiceA.objA.isSet || sharedInfraServiceB.objB.isSet
        }
    }

    sharedDataServiceAFunc () {
        this.sharedDataServiceAObj.isSet = this._sharedInfraServiceA.objA.isSet && this._sharedInfraServiceB.objB.isSet;
    }

    valueA (id) {
        return this.apiCaller.call(this.apiRoutes.commonResource.get, null, {id: id});
    }
}

angular.module('app').service('sharedDataServiceA', SharedDataServiceA);