const config = require('./lib/config')
const push = require('./lib/push')

module.exports = (opts = {}) => {
	if (typeof opts === 'string') opts = { key: opts }
	const options = Object.assign(config.getAll(), opts)

	return {
		push: msg => push(msg, options.key, options.upstream)
	}
}
