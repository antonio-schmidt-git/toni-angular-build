export default class MainController {

    constructor(sharedDataServiceA, sharedDataServiceB) {
        this.navTitle = 'Toni angular build';
        this.sharedObjA = sharedDataServiceA.sharedDataServiceAObj;
        this.sharedObjB = sharedDataServiceB.sharedDataServiceBObj;
        this.valueA = sharedDataServiceA.valueA(1);
        this.myArray = [
            { id: 0, name: 'zero' },
            { id: 1, name: 'one' },
            { id: 2, name: 'two' },
            { id: 3, name: 'three' }];
    }

    getNavTitle () {
        var twoText = this.myArray.find(function(item){ return item.id === 2}),
            twoIndex = this.myArray.findIndex(function(item){ return item.id === 2});

        return this.navTitle + ' ' +
               this.sharedObjA.isSet + ' ' +
               this.sharedObjB.isSet + ' | ' +
               twoIndex + ': ' + twoText.name;
    }
}

angular.module('app').controller('mainController', MainController);