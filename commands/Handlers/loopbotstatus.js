
module.exports = ({
code: ` 
$editMessage[909778592446177310;
\`\`\`Bot Status-
▪︎ Server Count: $serverCount
▪︎ Websocket Ping: $ping ms
▪︎ Bot Ping: $botPing ms
▪︎ Commands Count: $commandsCount
▪︎ RAM Usage: $ram MB
▪︎ Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB

CPU Info-
▪︎ CPU Usage: $cpu%
▪︎ CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
▪︎ CPU Platform: $djsEval[require ('os').platform();yes]

Package Info-
▪︎ Node.js: $nodeVersion\`\`\`
;909777254022795325]
`,
channel: "909777254022795325",
executeOnStartup: true,
every: 10000,
type: 'loop'
})