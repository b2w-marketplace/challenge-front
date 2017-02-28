(function () {
    'use strict';

    angular
        .module('api.b2w', [])
        .service('AboutService', AboutService)
        .factory('AboutSrv', AboutSrv);

    /* @ngInject */
    function AboutService($http) {
        const API_ADDRESS = 'http://www.mocky.io/v2/587935ac260000420e1c3644';

        this.getData = function (cb) {
            return $http.get(API_ADDRESS).then(function (result) {
                if (result.status === 200) {
                    var objs = [];
                    for (var x in result.data.personalSkill) {
                        if (x.toUpperCase() != 'TITLE') {
                            var obj = {
                                 toolName  : x.toUpperCase()
                                ,toolSkill : result.data.personalSkill[x]
                            };
                            objs.push(obj);
                        }
                    }
                    result.data.personalSkill.skills = objs;
                    cb(result.data);
                }
            },
                function (error) {
                    throw new Error(error);
                });
        };

        return this;
    }

    function AboutSrv($http) {
        return {
            getProfile : function() {
                return $http.get('http://www.mocky.io/v2/587935ac260000420e1c3644');
            }
        }
    }
})();