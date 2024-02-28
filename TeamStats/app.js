const team = 
{
  _players: 
  [
    {firstName: 'Bukayo', lastName: 'Saka', age: 22},
    {firstName: 'Gabriel', lastName: 'Magalhaes', age: 26},
    {firstName: 'Martin', lastName: 'Odegaard', age: 25}
  ],

  _games: 
  [
    {opponent: 'Liverpool', teamScore: 3, opponentScore: 1},
    {opponent: 'Manchester City', teamScore: 1, opponentScore: 0},
    {opponent: 'Manchester United', teamScore: 3, opponentScore: 1}
  ],

  get players()
  {
    return this._players;
  },

  get games()
  {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge)
  {
    player = 
    {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this._players.push(player);
  },

  addGame(newOpponent, newTeamScore, newOpponentScore)
  {
    game = 
    {
      opponent: newOpponent,
      teamScore: newTeamScore,
      opponentScore: newOpponentScore
    };

    this._games.push(game);
  },

}

team.addPlayer('William', 'Saliba', 22);
team.addGame('Newcastle', 4, 1);

console.log(team.players);
console.log(team.games);