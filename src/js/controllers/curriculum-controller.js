(function () {
    'use strict';

    angular
        .module('b2wApp')
        .controller('CurriculumController', CurriculumController);

    /* @ngInject */
    function CurriculumController(AboutService) {

        /*
            @author Adler Coelho
            @date 2-26-2017
            @description: function to get data user from API.
        */
        function _gettingData() {
            AboutService.getProfile().then(function(response) {
                if (response.status === 200) {
                    var objs = [];
                    for (var x in response.data.personalSkill) {
                        if (x.toUpperCase() !== 'TITLE') {
                            var obj = {
                                 toolName  : x.toUpperCase()
                                ,toolSkill : response.data.personalSkill[x]
                            };
                            objs.push(obj);
                        }
                        response.data.personalSkill.skills = objs;
                    }
                    vm.data = response.data;
                    vm.loader = false;
                }
            });
        }

        var vm = this;
        vm.loader = true;
        vm.data = {};

        _gettingData();
    }

    CurriculumController.$inject = ['AboutService'];
})();