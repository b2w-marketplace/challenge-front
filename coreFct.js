(function () {
    'use strict';
    angular
        .module('BitModule')
        .factory('BitFct', BitFct);

    BitFct.$inject = ['$http'];

    /* @ngInject */
    function BitFct($http) {
        var exports = {
            getCurriculo: getCurriculo
        };


        return exports;

        ////////////////

        function getCurriculo() {
            return $http.get('http://www.mocky.io/v2/587935ac260000420e1c3644')
                .then(getCurriculoComplete)
                .catch(getCurriculoFailed);
            
            function getCurriculoComplete(response) {
                return response.data
            }
            
            function getCurriculoFailed(error) {
                console.log('Erro no getCurriculoFailed' + error)
            }
        }
    }
})();