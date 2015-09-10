export default class SharedDataServiceB {

    constructor(sharedInfraServiceA, sharedInfraServiceB) {
        this.sharedDataServiceBObj = {
            isSet: sharedInfraServiceA.objA.isSet && sharedInfraServiceB.objB.isSet
        }
    }

    sharedDataServiceBFunc () {
        self.sharedDataServiceAObj.isSet = sharedInfraServiceA.objA.isSet || sharedInfraServiceB.objB.isSet;
    };
}

angular.module('app').service('sharedDataServiceB', SharedDataServiceB);