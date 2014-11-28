tbracketApp.controller('tb-controller', ['$scope', function($scope) {

  //see notes for variables
  $scope.rounds = [];
  $scope.tournamentSize = 0;
  $scope.roundCount = 0;
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

  //start with length of player array players
  var playerCount = $scope.players.length;

  //adds player to the players list
  $scope.addPlayer = function(name,display){
    playerCount++;
    $scope.players.push({
      name: (name) ? name : 'New Player ' + playerCount,
      display: (display) ? display : 'New Display ' + playerCount
    });
    
    //reset global binds
    $scope.inputDisplay = '';
    $scope.inputName = '';

    //log test
    // $scope.players.forEach(function(element,index,array){
    //   console.log('a[' + index + '] = ' + element.name);
    // });
  };

  //function to calculate tournament size
  //the size of the tournament is the next power of 2 after the player count
  //  eg 54 players = 64 player tournament (10 people get a by)
  //the number of rounds is the power of 2 divided by 2
  $scope.calculateTournamentSize = function(){
    $scope.roundCount = Math.ceil(Math.log2(playerCount));
    $scope.tournamentSize = Math.pow(2,$scope.roundCount);
    //console.log($scope.tournamentSize);
  }

  //create a list of rounds
  //the list of rounds is the size of the calculated roundCount
  $scope.initRounds = function(){
    for (i = 0; i < $scope.roundCount; i++) {
      $scope.rounds.push({
        roundNumber : i + 1,
        roundMatchCount : Math.pow(2,$scope.roundCount - i)/2
      });
    }
    //log test
    // $scope.rounds.forEach(function(element,index,array){
    //   console.log(element.roundNumber + ': ' + element.roundMatchCount);
    // });
  }

  //create list of matches for each round
  $scope.initMatches = function(){
    $scope.rounds.forEach(function(element,index,array){
      element.matches = [];
      for (var i = 0; i < element.roundMatchCount; i++) {
        element.matches.push({
          round: element.roundNumber,
          match: i+1,
          nextMatch: Math.round((i+1)/2),
          matchPlayers: []
        });
      };
    });
    //log test
    // $scope.rounds.forEach(function(element,index,array){
    //   element.matches.forEach(function(element,index,array){
    //     console.log(element.round + ', ' + element.match);
    //   });
    // });
  }

  //place all players into their matches for round 1
  //randomize player list then put them in their place
  $scope.seedPlayers = function(){
    randomizedPlayers = shuffle($scope.players);
    randomizedPlayers.forEach(function(player,i,array){
      $scope.rounds[0].matches[Math.round((i-1)/2)].matchPlayers.push({display:player.name});
    });
  }

  //promote a player to the next round
  $scope.promotePlayer = function(player,match,round){
    //needs some error checking
    $scope.rounds[round.roundNumber-1+1].matches[match.nextMatch-1].matchPlayers.push(player);
  }

  //do all the necessary stuff to start the tournament
  $scope.initTournament = function(){
    $scope.calculateTournamentSize();
    $scope.initRounds();
    $scope.initMatches();
    $scope.seedPlayers();
  }

}]);

//Fisher-Yates Shuffle
//(not mine)
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}