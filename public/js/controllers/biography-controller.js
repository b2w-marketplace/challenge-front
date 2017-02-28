angular.module('biography').controller('BiographyController', function ($http, $scope) {

	$http.get('http://www.mocky.io/v2/587935ac260000420e1c3644').success(function (response) {

		$scope.profile = {
			thumb: response.thumb,
			name: response.name,
			profession: response.profession,
			title: response.profile.title,
			description: response.profile.description
		};

		$scope.objective = {
			title: response.objective.title,
			description: response.objective.description,
		};

		$scope.personalSkill = {
			title: response.personalSkill.title,
			management: response.personalSkill.management,
			teamWork: response.personalSkill.teamWork,
			creative: response.personalSkill.creative,
			communication: response.personalSkill.communication
		};

		$scope.contactMe = {
			title: response.contactMe.title,
			address: response.contactMe.address,
			tel: response.contactMe.tel,
			email: response.contactMe.email,
			webSite: response.contactMe.webSite
		};

		$scope.education = {
			title: response.education.title,
			university: response.education.university
		};

		$scope.experience = {
			title: response.experience.title,
			company: response.experience.company
		};

		$scope.professionalSkill = {
			title: response.professionalSkill.title,
			tools: response.professionalSkill.tools
		};

		$scope.award = {
			title: response.award.title,
			month: response.award.month,
			year: response.award.year,
			awardName: response.award.awardName,
			awardCity: response.award.city,
			description: response.award.description
		};

	}).error(function (error) {
		console.log(error);
	});

	/*var promise = $http.get('http://localhost:3000/v1/fotos');
	promise.then(function (response) {
		$scope.fotos = response.data;
	}).catch(function (error) {
		console.log(error);
	});*/

});