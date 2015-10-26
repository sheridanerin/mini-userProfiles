var app = angular.module('userProfiles');

	app.controller("mainController", function($scope, mainService) {
		
		$scope.getUsers = function() {
			return mainService.getUsers();
		};

		$scope.users = $scope.getUsers();
	});