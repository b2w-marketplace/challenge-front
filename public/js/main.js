angular.module("Main",['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/professional',{
       templateUrl: 'partials/profissional.html',
       controller: 'ProfissionalController'
    });

    $routeProvider.otherwise({redirectTo:'/professional'});
});
