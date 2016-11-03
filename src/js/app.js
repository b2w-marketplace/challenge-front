let angular = require('angular')

angular.module(
	'curriculumb2w', 
	[
		require('angular-route'),
	])
	.config(function ($routeProvider) {
	    $routeProvider
	    	.when('/', {
		        templateUrl: 'views/main.html',
		        controller: 'MainController'
		    })
		    .otherwise({
		        redirectTo: '/'
		    });
	})
	.controller('MainController', function ($scope, $http) {
	    $scope.curriculum = {}

	    $http.get('http://www.mocky.io/v2/57dfec211000009020598073')
	    	.success(function(data) {
	    		$scope.curriculum = data
	    	})
	    	.error(function(error) {
	    		console.log(error)
	    	})
	})
	.directive('headInfo', function() {
		return {
			restrict: "AE",
			transclude: true,
			templateUrl: './views/head-info.html',
			scope: {
				name: '@',
				picture: '@',
				profession: '@'
			}

		}
	})
	.directive('contactSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/contact-section.html',
			scope: {
				title: '@',
				address: '@',
				tel: '@',
				email: '@',
				website: '@'
			}
		}
	})
	.directive('objectiveSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/objective-section.html',
			scope: {
				title: '@',
				description: '@'
			}
		}
	})
	.directive('timelineItem', function() {
		return {
			restrict: "AE",
			templateUrl: './views/timeline-item.html',
			scope: {
				month: '@',
				year: '@',
				name: '@',
				location: '@',
				city: '@',
				description: '@'
			}
		}
	})
	.directive('educationSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/education-section.html'
		}
	})
	.directive('experienceSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/experience-section.html'
		}
	})
	.directive('awardSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/award-section.html'
		}
	})
	.directive('professionalSkillSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/professional-skill-section.html'
		}
	})
	.directive('personalSkillSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/personal-skill-section.html'
		}
	})
	.directive('skillItem', function() {
		return {
			restrict: "AE",
			templateUrl: './views/skill-item.html',
			scope: {
				toolName: '@',
				toolsSkill: '@'
			}
		}
		
	})
	.directive('profileSection', function() {
		return {
			restrict: "AE",
			templateUrl: './views/profile-section.html',
			scope: {
				title: '@',
				description: '@'
			}
		}
		
	})
