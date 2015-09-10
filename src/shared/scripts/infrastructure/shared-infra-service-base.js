export default class SharedInfraServiceBase {

    constructor(_isSet) {
        this.sharedInfraServiceObj = {
            isSet: _isSet
        };
    }

    sharedInfraServiceFunc (_isSet) {
        this.sharedInfraServiceObj.isSet = _isSet;
    }
}