export default class SharedInfraServiceA {

    constructor() {
        this.sharedInfraServiceObj = {
            isSet: false
        };
    }

    get objA () {
        return this.sharedInfraServiceObj;
    }
}

angular.module('app').service('sharedInfraServiceA', SharedInfraServiceA);