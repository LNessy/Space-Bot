module.exports = ({
	name: 'snipe',
  category: 'Utility',
	code: `
$color[1;$getVar[color]]

$author[1;$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

$description[1;**Message** - \`$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]\` 

**Channel** - <#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[snipe_channel;$mentionedChannels[1;yes]])\`

**Time** - \`$getChannelVar[snipe_date;$mentionedChannels[1;yes]]\` 
[<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;{newEmbed:{description:Theres nothing to snipe in <#$mentionedChannels[1;yes]>}{color:RED}}]`
});