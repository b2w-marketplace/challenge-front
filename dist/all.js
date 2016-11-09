'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: '../views/home.html',
        controller: 'homeController'
    });
}]);
'use strict';

app.controller('homeController', ['$scope', 'baseRest', function ($scope, baseRest) {

    var userInfoApi = baseRest.dataService('http://www.mocky.io/v2/57dfec211000009020598073');

    userInfoApi.get({ url: '/' }).then(function (data) {
        $scope.user = data.data;
    });
}]);
'use strict';

app.directive('home', ['$location', function ($location) {

    return {
        restrict: 'AE',
        templateUrl: '../partials/home.html'
    };
}]);
'use strict';

app.factory('baseRest', ['$http', function ($http) {

    return {
        dataService: function dataService(baseUrl) {
            return {
                get: function get(params) {
                    return $http.get(baseUrl + params.url, { cache: false });
                },
                post: function post(params) {
                    return $http.post(baseUrl + params.url, params.data, { cache: false });
                },
                put: function put(params) {
                    return $http.put(baseUrl + params.url, { cache: false });
                },
                delete: function _delete(params) {
                    return $http.delete(baseUrl + params.url, { cache: false });
                }
            };
        }
    };
}]);