const qs = require('querystring')
const request = require('request')

module.exports = (msg, code, dest = 'https://splush.nikerino.com') => {
	return new Promise((resolve, reject) => {
		const opts = { form: {msg: msg }}

		request.post(dest + '/' + code + '/', opts, (err, res, body) => {
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

