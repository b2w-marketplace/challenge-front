var b2w = angular
    .module("B2W", ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/curriculum', {
        templateUrl: 'partials/curriculum.html',
        controller: 'CurriculumController'
    });

    $routeProvider.otherwise({ redirectTo: '/curriculum' });
};