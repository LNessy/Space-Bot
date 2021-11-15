module.exports = {
    name: "calculator",
	category: 'Utility',
    code: `$djsEval[(async () => {
		const {
			calculator
		} = require('leaf-utils');
		
		await calculator({
			message: message,
			embed: {
				title: 'Calculator',
				color: 'RED',
				footer: 'calculator',
				timestamp: true,
			},
			disabledQuery: 'Calculator is disabled!',
			invalidQuery: 'The provided equation is invalid!',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
		})
})()]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;**⛔ You are blacklisted**]`
}