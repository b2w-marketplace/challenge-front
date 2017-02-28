(function() {'use strict';

    var portfolioApp = angular.module('portfolioApp', []);

    portfolioApp.controller('mainController', ['$scope', '$http', 
    	function($scope, $http) {
	        $scope.user = [];
	        $scope.method = 'GET';
    		$scope.url = 'http://www.mocky.io/v2/587935ac260000420e1c3644';
	        $http({method: $scope.method, url: $scope.url})
	            .then(function(response) {
	                $scope.user = response.data;
	                //console.log($scope.user);
	            }, function(response) {
	                alert('loading');
	                console.log('Error: ' + response);
	        });

            $scope.submitForm = function() {

				// check to make sure the form is completely valid
				if ($scope.userForm.$valid) {
					alert('yay');
				}

			};
        }
    ])
    .directive('levelBar', function() {
    	return {
			restrict: 'A',
			replace: true,
			scope: { levelBar: '=' },
			template: '<div><span style="width:{{levelBar}}%">{{levelBar}}</span></div>'
		};
	});

})();