angular.module('Main').controller('ProfissionalController', function($scope, Profissional){
    $scope.profissional = {};

    function buscarProfissional(){
        Profissional.query(
            function(profissional){
                $scope.profissional = profissional;
            },
            function(erro){
                console.log('Nao foi possivel trazer contatos');
                console.log(erro);
            }
        );
    }
    buscarProfissional();
});
