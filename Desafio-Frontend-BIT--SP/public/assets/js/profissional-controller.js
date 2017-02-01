angular
  .module("b2wApp")
  .controller("ProfissionalController", ["$scope", "Profissional", function($scope, Profissional){

    Profissional.get(function(data){
      $scope.profissional = data;
    }, function(erro){
      console.log(erro);
    });
  }]);
