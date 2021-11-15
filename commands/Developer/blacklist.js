module.exports = {
  name: "blacklist",
  category: "Developer",
code: `$setGlobalUserVar[Blacklist;true;$mentioned[1]]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]] you are blacklisted now**
$onlyIf[$mentioned[1]!=;You must mention someone]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't blacklist yourself**]
$onlyForIDs[846577487491629096;568413166799683594;**⛔ Only the owner can use this command**]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
}