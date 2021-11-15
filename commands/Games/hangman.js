module.exports = {
    name: "hangman",
    category: 'Games',
    code: `$djsEval[(async () => {
const { Hangman } = require('leaf-utils')
const game = new Hangman({
    message: message,
    embed: {
        title: 'Hangman',
        color: 'RED',
    },
    hangman: {
        hat: '🧢',
        head: '🧔',
        shirt: '🎽 ',
        pants: '🩳',
        boots: '👟👟',
    },
    winMessage: 'You won! The word was... **{{word}}**',
    loseMessage: 'You lose! The word was... **{{word}}**'
})
game.start()
})()]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
}