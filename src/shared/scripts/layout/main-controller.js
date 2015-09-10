export default class MainController {

    constructor(sharedDataServiceA, sharedDataServiceB) {
        this.navTitle = 'Toni angular build';
        this.sharedObjA = sharedDataServiceA.sharedDataServiceAObj;
        this.sharedObjB = sharedDataServiceB.sharedDataServiceBObj;
    }

    getNavTitle () {
        return this.navTitle + ' ' + this.sharedObjA.isSet + ' ' + this.sharedObjB.isSet;
    }
}

angular.module('app').controller('mainController', MainController);