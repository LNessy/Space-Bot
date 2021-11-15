
module.exports = (bot) => {
    bot.readyCommand({
      channel: "",
      code: `$djsEval[const chalk = require("chalk")
console.log(chalk.bgBlue("Ready on $userTag[$clientID]"))]$djsEval[const warna = require ("chalk");
console.log(warna.red("https://dsc.gg/atoms-bot"))]`
   }) 
  } 