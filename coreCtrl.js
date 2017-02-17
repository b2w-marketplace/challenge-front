(function () {
    'use strict';

    angular
        .module('BitModule')
        .controller('BitCtrl', BitCtrl);

    BitCtrl.$inject = ['BitFct'];

    /* @ngInject */
    function BitCtrl( BitFct) {
        var vm = this;
        vm.perfil = [];
        vm.getPerfil = getPerfil;

        activate();

        ////////////////

        function activate() {
            return getPerfil().then(function () {
                console.log('getPerfil, sucesso!')
            })
        }

        function getPerfil() {
            return BitFct.getCurriculo()
                .then(function (data) {
                    vm.perfil = data;
                    return vm.perfil;
                })
        }

    }
})();