
module.exports = ({
 name: "setprefix",
 aliases: ['changeprefix', 'prefix'],
 usage: "setprefix <prefix>",
 description: "change the server prefix",
 category: "Configuration",
 code: `$description[1;✅ My new prefix is "**$message**"]
 $color[1;RANDOM]
 $setServerVar[prefix;$message]
 $onlyIf[$message[1]!=;You have to specify a message to change the server prefix!]
 $onlyPerms[manageserver;$description[1;❌ You require these permissions - **Manage Server** ]$color[1;RANDOM]
 $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
 }) 


