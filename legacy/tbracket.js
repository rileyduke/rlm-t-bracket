var bracketApp = angular.module('bracketApp',[]);

var controllers = {};

controllers.SimpleController = function($scope){
	$scope.players = [
		{name: 'Riley Duke', display: 'peno'},
		{name: 'Mari Jang', display: 'puddipop'}
	];
};

bracketApp.controller(controllers);