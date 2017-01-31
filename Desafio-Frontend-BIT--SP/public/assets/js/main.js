angular
  .module("b2wApp", ["ngRoute", "meusServicos"])
    .config(function($routeProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller: 'ProfissionalController'
      });

      $routeProvider.otherwise({redirectTo: '/'});
    });
