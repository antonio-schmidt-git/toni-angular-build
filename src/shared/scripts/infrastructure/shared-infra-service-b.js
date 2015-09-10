export default class SharedInfraServiceB {

    constructor() {
        this.sharedInfraServiceObj = {
            isSet: true
        };
    }

    get objB () {
        return this.sharedInfraServiceObj;
    }
}

angular.module('app').service('sharedInfraServiceB', SharedInfraServiceB);