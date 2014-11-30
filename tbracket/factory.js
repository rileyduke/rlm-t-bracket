tbracketApp.factory('staticFactory',function(){
	var factory = {};
	var players = [
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

  factory.getPlayers = function(){
  	return players;
  };
  
  return factory;
});