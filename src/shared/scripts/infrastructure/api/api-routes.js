angular.module('app').constant('apiRoutes', {
    commonResource: {
        get: {url: 'API/commonResource/{id}', method: 'GET', matcher: /\/API\/commonResource\/[0-9]+/},
        getAll: {url: 'API/commonResource', method: 'GET', matcher: /\/API\/commonResource/},
        create: {url: 'API/commonResource', method: 'POST', matcher: /\/API\/commonResource/},
        modify: {url: 'API/commonResource/{id}', method: 'PATCH', matcher: /\/API\/commonResource\/[0-9]+/},
        remove: {url: 'API/commonResource/{id}', method: 'DELETE', matcher: /\/API\/commonResource\/[0-9]+/}
    },
    mainResource: {
        get: {url: 'API/mainResource/{id}', method: 'GET', matcher: /\/API\/mainResource\/[0-9]+/},
        create: {url: 'API/mainResource', method: 'POST', matcher: /\/API\/mainResource/},
        set: {url: 'API/mainResource/{id}', method: 'PUT', matcher: /\/API\/mainResource\/[0-9]+/},
        remove: {url: 'API/mainResource/{id}', method: 'DELETE', matcher: /\/API\/mainResource\/[0-9]+/},

        subResource: {
            get: {
                url: 'API/mainResource/subResource/{id}',
                method: 'GET',
                matcher: /\/API\/mainResource\/subResource\/[0-9]+/
            },
            create: {
                url: 'API/mainResource/subResource',
                method: 'POST',
                matcher: /\/API\/mainResource\/subResource/
            },
            modify: {
                url: 'API/mainResource/subResource/{id}',
                method: 'PATCH',
                matcher: /\/API\/mainResource\/subResource\/[0-9]+/
            },
            remove: {
                url: 'API/mainResource/subResource/{id}',
                method: 'DELETE',
                matcher: /\/API\/mainResource\/subResource\/[0-9]+/
            }
        }
    }
});