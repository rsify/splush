const helpCmd = (args = []) => {
	const logCommand = (cmd) => {
		const help = commands[cmd].help
		console.log(cmd, help.args, '-', help.summary)
		console.log('example:', help.example)
	}

	const logAllCommands = () => {
		console.log('splush help:\n')
		console.log('help (optional: command) - prints this text ' +
			'and optionally narrows it down to the specified (command).\n')
		for (const cmd in commands) {
			logCommand(cmd)
			console.log()
		}
	}

	if (args.length === 0) {
		logAllCommands()
	} else {
		const command = args[0]

		if (command in commands) logCommand(command)
		else {
			console.log('error: invalid command')
			logAllCommands()
		}
	}
}

const commands = {
	config: require('./config'),
	push: require('./push')
}

module.exports = Object.assign({}, commands)
module.exports.help = helpCmd
