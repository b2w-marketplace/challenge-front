angular.module('biography').factory('biographyService', biographyService);

function biographyService($http) {
	let obj = {
		ReturnBiography: returnBiography
	};

	function returnBiography() {
		return $http({
			method: 'GET',
			url: 'http://www.mocky.io/v2/587935ac260000420e1c3644'
		});
	}

	return obj;
}