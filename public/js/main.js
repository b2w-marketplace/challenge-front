angular.module("Main",['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/profissional',{
       templateUrl: 'partials/profissional.html',
       controller: 'ProfissionalController'
    });

    $routeProvider.otherwise({redirectTo:'/profissional'});
});
