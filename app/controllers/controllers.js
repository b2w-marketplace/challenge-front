app.controller('HomeCtrl', function($scope, $http){


    var vm = this;

    vm.loading = true;



    $http.get('http://www.mocky.io/v2/587935ac260000420e1c3644').then(function(res){

        vm.data = res.data;
        vm.loading = false;

    })

});