(function () {
    'use strict';

    angular
        .module('api.b2w', [])
        .factory('AboutService', AboutService);

    /* @ngInject */
    function AboutService($http) {
        return {
            getProfile : function() {
                return $http.get('http://www.mocky.io/v2/587935ac260000420e1c3644');
            }
        }
    }

    AboutService.$inject = ['$http'];

})();