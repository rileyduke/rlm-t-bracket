tbracketApp.controller('tb-controller', ['$scope', function($scope) {
  
  var counter = 0;

  $scope.players = [
    {
      display: 'img1.png',
      name: 'Pic 1'
    }, 
    {
      display: 'img2.jpg',
      name: 'Pic 2'
    }, 
    {
      display: 'img3.jpg',
      name: 'Pic 3'
    }, 
    {
      display: 'img4.png',
      name: 'Pic 4'
    }, 
    {
      display: 'img5.png',
      name: 'Pic 5'
    }
  ];

  $scope.addPlayer = function(name,display){
    counter++;
    $scope.players.push({
      name: (name) ? name : 'New Player ' + counter,
      display: (display) ? display : 'New Display ' + counter
    });
  };

}]);