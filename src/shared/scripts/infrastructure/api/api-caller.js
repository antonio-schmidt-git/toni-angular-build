export default class ApiCaller {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    static _checkCallParams(requestConfig, data) {
        if((requestConfig.method === 'GET' || requestConfig.method === 'DELETE') && data) {
            throw new Error('API CALL ERROR: Selected method cannot have payload.')
        }
    }

    static _prepareRequestData(requestConfig, data) {
        if(data) {
            requestConfig.data = data;
        }
    }

    static _prepareRequestUrl(requestConfig, urlParams) {
        var paramName, paramPlaceholder;

        if(urlParams) {
            for (paramName in urlParams) {
                if (urlParams.hasOwnProperty(paramName)) {
                    paramPlaceholder = '{' + paramName + '}';
                    requestConfig.url = requestConfig.url.replace(paramPlaceholder, urlParams[paramName]);
                }
            }
        }

        requestConfig.url = encodeURI(requestConfig.url);
    }

    static _prepareRequestQueryString(requestConfig, queryStringParams) {
        if(queryStringParams) {
            requestConfig.params = queryStringParams;
        }
    }

    call(request, data, urlParams, queryStringParams) {
        var requestConfig = {
            // only the needed parameters, leave other configuration
            url: request.url,
            method: request.method
        };

        ApiCaller._checkCallParams(requestConfig, data);

        ApiCaller._prepareRequestData(requestConfig, data);

        ApiCaller._prepareRequestUrl(requestConfig, urlParams);

        ApiCaller._prepareRequestQueryString(requestConfig, queryStringParams);

        return this.$http(requestConfig).then(
            function (response) {
                return response.data
            },
            function (rejection) {
                return this.$q.reject(rejection);
            });
    }
}

angular.module('app').service('apiCaller', ApiCaller);