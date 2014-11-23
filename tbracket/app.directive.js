(function(angular) {
  'use strict';
angular.module('tbracket', [])
  .controller('tb-controller', ['$scope', function($scope) {
	  $scope.players = [{
	    src: 'img1.png',
	    title: 'Pic 1'
	  }, {
	    src: 'img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: 'img4.png',
	    title: 'Pic 4'
	  }, {
	    src: 'img5.png',
	    title: 'Pic 5'
	  }];
  }])
  .directive('tBracket', function() {
    return {
      templateUrl: function(elem, attr){
      	if (!attr.template) attr.template = 'default';
      	return 'tbracket/templates/' +attr.template+ '.html';
      }
    };
  });
})(window.angular);