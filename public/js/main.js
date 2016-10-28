angular.module("Main",['ngRoute', 'ngResource']).config(function($routeProvider){
    $routeProvider.when('/profissional',{
       templateUrl: 'partials/profissional.html',
       controller: 'ProfissionalController'
    });

    $routeProvider.otherwise({redirectTo:'/profissional'});
});
