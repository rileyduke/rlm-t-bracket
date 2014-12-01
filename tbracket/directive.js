var tbracketApp = angular.module('tbracket', ['ui.bootstrap','ngRoute','ui.sortable']);
	
tbracketApp.directive('tBracket', function() {
	return {
		templateUrl: function(elem, attr){
			if (!attr.template) attr.template = 'default';
				return 'tbracket/templates/' +attr.template+ '.html';
			}
		};
	}
);
tbracketApp.config(function ($routeProvider){
  $routeProvider
    .when('/',
    {
      controller:'tb-controller',
      templateUrl: 'tbracket/templates/home.html'
    })
    .when('/players',
    {
      controller: 'tb-controller',
      templateUrl: 'tbracket/templates/players.html'
    })
    .when('/tournament',
    {
      controller: 'tb-controller',
      templateUrl: 'tbracket/templates/default.html'
    })
    .otherwise({ redirectTo: '/'});
});