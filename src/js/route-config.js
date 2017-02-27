angular
    .module("b2wApp", ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/curriculum', {
        templateUrl : 'partials/curriculum.html',
        controller : 'CurriculumController',
        controllerAs : 'cv'
    });

    $routeProvider.otherwise({ redirectTo: '/curriculum' });
};