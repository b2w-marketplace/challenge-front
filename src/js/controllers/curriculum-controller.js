(function () {
    'use strict';

    angular
        .module('b2wApp')
        .controller("CurriculumController", CurriculumController);

    /* @ngInject */
    function CurriculumController($scope, AboutService) {
        var vm = this;

        /*
            @author Adler Coelho
            @date 2-26-2017
            @description: function to get data user from API.
        */
        function _gettingData() {
            AboutService.getData(function (api) {
                vm.data = api;
            });
        };

        vm.data = {};
        _gettingData();
    };

    CurriculumController.$inject = ["$scope", "AboutService"];
})();