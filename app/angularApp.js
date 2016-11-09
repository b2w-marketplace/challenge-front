var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider' ,

    function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: '../views/home.html',
            controller: 'homeController'
        });

    }
]);

