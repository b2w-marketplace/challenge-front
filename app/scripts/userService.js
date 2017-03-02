app.factory('userService', function($http){
	
	var _getUser = function(){
		return $http.get("http://www.mocky.io/v2/587935ac260000420e1c3644");
	};

	return {
		getUser : _getUser
	}

});