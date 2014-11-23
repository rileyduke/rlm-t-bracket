tbracketApp.controller('tb-controller', ['$scope', function($scope) {

  var counter = 0;

  $scope.players = [
    {
      display: 'Peno',
      name: 'Riley Duke'
    }, 
    {
      display: 'Taylawlz',
      name: 'Taylor Hanson'
    }, 
    {
      display: 'Spinkster',
      name: 'Spaniard Feo'
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