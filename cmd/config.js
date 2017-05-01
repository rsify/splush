const config = require('../lib/config')

module.exports = (args) => {
	if ([1, 2].indexOf(args.length) === -1) throw 'invalid arguments'

	const thing = args[0]
	const value = args[1]

	if (!value && config.has(thing))
		console.log(config.get(thing))
	else {
		config.set(thing, value)
	}
}

module.exports.help = {
	args: '(thing) (value)',
	example: 'splush config key MassiveGroundLeafUnder',
	summary: 'configures (thing) with the provided (value)'
}
