module.exports = {
    Bot: {
        token: 'OTA5NzQwMzcxNTExMjE0MDgw.YZIrvg.lO-q38jkqFhLbl3yvSLnyswqM1E',
        prefix: "$getServerVar[prefix]",
        intents: "all",
        database: {
            type: "default",
            path: "./db/",
            tables: ["atom"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
        },
        suppressAllErrors: false,
        errorMessage: ["", "{newEmbed:{title:An Error has occured}{description:Something went wrong}{color:#FB4413}}", "{actionRow:{button:Support Server:5:https\\://discord.gg/}}"]
    }
}