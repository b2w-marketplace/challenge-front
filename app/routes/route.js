app.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
        templateUrl : 'app/views/home.html',
        controller     : 'HomeCtrl as vm',
    })

    .otherwise ({ redirectTo: '/' });
});




