export default class SharedDataServiceA {

    constructor(sharedInfraServiceA, sharedInfraServiceB) {
        this.sharedDataServiceAObj = {
            isSet: sharedInfraServiceA.objA.isSet || sharedInfraServiceB.objB.isSet
        }
    }

    sharedDataServiceAFunc () {
        self.sharedDataServiceAObj.isSet = sharedInfraServiceA.objA.isSet && sharedInfraServiceB.objB.isSet;
    };
}

angular.module('app').service('sharedDataServiceA', SharedDataServiceA);