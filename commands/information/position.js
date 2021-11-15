
module.exports = ({
 name: "position",
 aliases: 'join-position',
 usage: 'Position <user mention | id | name>',
 description: 'Gives the joining position of the user',
 cooldown: '3s',
  category: "Information",
 code: `Joining position of **$username[$findUser[$message;yes]]** in this server is **$ordinal[$memberJoinPosition[$findUser[$message;yes]]]**!
$cacheMembers[$guildID]
$cooldown[$commandInfo[position;cooldown];{newEmbed:{description:Wait for %time% to try again!}{color:RED}}]
$suppressErrors[{newEmbed:{description: Invalid Args in \`<user>\`
Usage:
\`position <user id | name | mention>\`}{color:RED}}
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
});  