module.exports = {
    name: "rps",
    category: 'Games',
    code: `$djsEval[(async () => {
      const opponent = message.mentions.users.first()
      if (!opponent) return message.channel.send("**⛔ Please provide the user to challenge**")
      
    const { RockPaperScissors } = require('leaf-utils')
    
    new RockPaperScissors({
      message: message,
      opponent: message.mentions.users.first(),
      embed: {
        title: 'Rock Paper Scissors',
        description: 'Press a button below to make a choice!',
        color: '#5865F2',
      },
      buttons: {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors',
      },
      othersMessage: 'You are not allowed to use buttons for this message!',
      chooseMessage: 'You choose {emoji}!',
      noChangeMessage: 'You cannot change your selection!',
      askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
      cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors',
      timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
      drawMessage: 'It was a draw!',
      winMessage: '{winner} won the game!',
      gameEndMessage: 'The game went unfinished :(',
    }).startGame();
})()]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]
`
}