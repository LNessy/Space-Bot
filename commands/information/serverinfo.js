module.exports = {
 name: "serverinfo",
 code: `$author[$serverNaame;$serverIcon]
 $description[
Name: $serverName
Server ID: $guildID
Owner: $userTag[$ownerID] <@$ownerID> 
Invite: $getServerInvite
Region: $serverRegion
Created on: $formatDate[$creationDate[$guildID];LLLL]
Verification level: $serverVerificationLevel
Boost level: $serverBoostLevel


 
Humans: $membersCount[$guildID;all;no]
Bots: $botCount
Online members: $membersCount[$guildID;online]
Idle members: $membersCount[$guildID;idle]
DND members: $membersCount[$guildID;dnd]
Offline members: $membersCount[$guildID;offline]
Total members: $membersCount

Animated emojis: $emojiCount[animated]/100
Non-animated emojis: $emojiCount[normal]/100
Total emojis: $emojiCount/200
Custom emojis: $serverEmojis

Text channels: $channelCount[text]
Voice channels: $channelCount[voice]
Total categories: $channelCount[category]
Total channels: $channelCount

Server features: $serverFeatures]
 $footer[Serverinfo]
 $thumbnail[$serverIcon]
 $color[GREEN]`
}