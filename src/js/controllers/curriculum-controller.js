b2w.controller("CurriculumController", ['$scope', 'AboutService',
function($scope, aboutSrv) {

    $scope.data = {};
    _gettingData();

    /*
        @author Adler Coelho
        @date 2-26-2017
        @description: function to get data user from API.
    */
    function _gettingData() {
        aboutSrv.getData((data) => {
            console.info("retorno", data);
            $scope.data = data;
        });
    };

}]);