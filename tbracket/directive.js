var tbracketApp = angular.module('tbracket', []);
	
tbracketApp.directive('tBracket', function() {
	return {
		templateUrl: function(elem, attr){
			if (!attr.template) attr.template = 'default';
				return 'tbracket/templates/' +attr.template+ '.html';
			}
		};
	}
);