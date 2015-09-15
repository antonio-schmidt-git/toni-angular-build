export default class SharedDataServiceB {

    constructor(sharedInfraServiceA, sharedInfraServiceB) {
        this._sharedInfraServiceA = sharedInfraServiceA;
        this._sharedInfraServiceB = sharedInfraServiceB;

        this.sharedDataServiceBObj = {
            isSet: sharedInfraServiceA.objA.isSet && sharedInfraServiceB.objB.isSet
        }
    }

    sharedDataServiceBFunc () {
        this.sharedDataServiceAObj.isSet = this._sharedInfraServiceA.objA.isSet || this._sharedInfraServiceB.objB.isSet;
    }
}

angular.module('app').service('sharedDataServiceB', SharedDataServiceB);