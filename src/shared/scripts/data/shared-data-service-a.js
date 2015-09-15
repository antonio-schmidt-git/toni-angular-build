export default class SharedDataServiceA {

    constructor(sharedInfraServiceA, sharedInfraServiceB) {
        this._sharedInfraServiceA = sharedInfraServiceA;
        this._sharedInfraServiceB = sharedInfraServiceB;

        this.sharedDataServiceAObj = {
            isSet: sharedInfraServiceA.objA.isSet || sharedInfraServiceB.objB.isSet
        }
    }

    sharedDataServiceAFunc () {
        this.sharedDataServiceAObj.isSet = this._sharedInfraServiceA.objA.isSet && this._sharedInfraServiceB.objB.isSet;
    }
}

angular.module('app').service('sharedDataServiceA', SharedDataServiceA);