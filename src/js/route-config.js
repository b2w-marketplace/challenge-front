angular
    .module('b2wApp')
    .config(config);

function config($routeProvider) {
    $routeProvider.when('/curriculum', {
        templateUrl : 'partials/curriculum.html',
        controller : 'CurriculumController as cv',
    });

    $routeProvider.otherwise({ redirectTo: '/curriculum' });
}