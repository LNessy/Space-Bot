module.exports = {
  name: "unblacklist",
  category: "Developer",
code: `$setGlobalUserVar[Blacklist;false;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] ✅ You are no longer on the blacklist**
$onlyIf[$mentioned[1]!=;You must mention someone]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself, so you can't unblacklist yourself**]
$onlyForIDs[846577487491629096;568413166799683594;**⛔ You are not the owner**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]
`
}