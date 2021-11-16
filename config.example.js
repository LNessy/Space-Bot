module.exports = {
    Bot: {
        token: "Token",
        prefix: "Prefix",
        intents: "all",
        database: {
            type: "default",
            path: "./db/",
            tables: ["Space"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
        },
        suppressAllErrors: false,
        errorMessage: ["", "{newEmbed:{title:An Error has occured}{description:Something went wrong}{color:#FB4413}}", "{actionRow:{button:Support Server:5:https\\://discord.gg/}}"]
    }
}
