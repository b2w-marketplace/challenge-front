app.factory('baseRest', ['$http', function ($http) {

    return {
        dataService: function (baseUrl) {            
            return {
                get: function (params) {
                    return $http.get(baseUrl + params.url, { cache: false });
                },
                post: function (params) {
                    return $http.post(baseUrl + params.url, params.data,  { cache: false });
                },
                put: function (params) {
                    return $http.put(baseUrl + params.url, { cache: false });
                },
                delete: function (params) {
                    return $http.delete(baseUrl + params.url, { cache: false });
                }
            }
        }
    };
}]);