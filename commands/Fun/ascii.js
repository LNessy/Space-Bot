module.exports = {
    name: "ascii", 
    category: 'Fun',
    description: "Ascii-fy text",
    code: `
    $title[1;Asciified]
    $description[1;\`\`\`fix
$jsonRequest[https://api.phydo.repl.co/misc/ascii?text=$replaceText[$message; ;+;-1];ascii]
\`\`\`]
    $color[1;BLACK]
    $footer[1;$userTag;$authorAvatar]
    $onlyIf[$message[1]!=;**Provide some text to ascii.**
$suppressErrors]
    `
}  
