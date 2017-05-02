const config = require('./lib/config')
const request = require('request')

module.exports = (opts = {}) => {
	if (typeof opts === 'string') opts = { key: opts }
	const options = Object.assign(config.getAll(), opts)

	return {
		push: msg => {
			const dest = options.upstream
			const code = options.key

			return new Promise((resolve, reject) => {
				request(dest + '/' + code + '/' + msg, (err, res, body) => {
					if (err) return reject(err)
					try {
						const b = JSON.parse(body)
						if (b.success) resolve(true)
						else reject(b.err)
					} catch (e) {
						reject(e)
					}
				})
			})
		}
	}
}
