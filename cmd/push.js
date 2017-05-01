const chalk = require('chalk')
const request = require('request')
const config = require('../lib/config')

module.exports = (args = []) => {
	let msg = args.join(' ')
	if (msg.length == 0) msg = 'Splush!'

	const dest = config.get('upstream')
	const code = config.get('key')

	if (!code) {
		failMsg(`try running ${chalk.bold('splush config key {key}')} first!`)
		return
	}

	request(dest + '/' + code + '/' + msg, (err, res, body) => {
		if (err) return failMsg(err)
		try {
			const b = JSON.parse(body)
			if (b.success)
				console.log(chalk.bold.green('@ Splush success!'))
			else failMsg(b.err)
		} catch (e) {
			failMsg(e)
		}
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

