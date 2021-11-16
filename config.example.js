module.exports = {
    Bot: {
        token: process.env.TOKEN,
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