
module.exports = {
 name: "say", 
  category: "Utility",
 code: `
 $message
$deletecommand
$onlyIf[$checkContains[$toLowerCase[$message];@everyone;@here;https://;www.;.com;discord.gg]!=true;{newEmbed:{description: Umm..? Please do not use me to mention to \`@here\` or \`@everyone\` or for other stuffs. . . uhh}{color:fcbfcb}}]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
} 