module.exports = {
    name: "snake",
    category: 'Games',
    code: `$djsEval[(async () => {
        const { Leafsnake } = require('leaf-utils')
        new Leafsnake({
          message: message,
          embed: {
            title: 'Snake',
            color: '#5865F2',
            OverTitle: 'Game Over',
          },
          snake: { head: '🗿', body: '◻️', tail: '◽', over: '💀' },
          emojis: {
            board: '⬛', 
            food: '🍎',
            up: '⬆️', 
            right: '➡️',
            down: '⬇️',
            left: '⬅️',
          },
          foods: ['🍎', '🍇', '🍊'],
          stopButton: 'Stop',
          othersMessage: 'You are not allowed to use buttons for this message!',
        }).startGame();
        })()]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]
`
}