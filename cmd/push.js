const chalk = require('chalk')
const request = require('request')
const config = require('../lib/config')
const push = require('../lib/push')

module.exports = (args = []) => {
	let msg = args.join(' ')
	if (msg.length == 0) msg = 'Splush!'

	const dest = config.get('upstream')
	const code = config.get('key')

	if (!code) {
		failMsg(`try running ${chalk.bold('splush config key {key}')} first!`)
		return
	}

	push(msg, code, dest).then(() => {
		console.log(chalk.bold.green('@ Splush success!'))
	}).catch((e) => {
		failMsg(e)
	})
}

const failMsg = (e) => {
	console.log(chalk.bold.red('@ Splush failed!'), e)
}

module.exports.help = {
	args: '(optional: msg)',
	example: 'splush push Good morning!',
	summary: 'creates a new push notification, optionally with the given (msg)'
}

