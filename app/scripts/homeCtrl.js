app
.controller('homeCtrl', ['$scope','userService', function ($scope,userService) {

	var haha = function(){
		userService.getUser().then(function(data){
			$scope.user = data.data
			console.log($scope.user);
		})
	}

	haha();
}]);