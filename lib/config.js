const fs = require('fs')
const os = require('os')
const path = require('path')

const configPath = path.resolve(os.homedir(), '.splush.json')
const defaults = {
	key: null,
	upstream: 'https://splush.nikerino.com'
}

const save = (o) => {
	fs.writeFileSync(configPath, JSON.stringify(o, null, '\t') + os.EOL)
}

const read = () => {
	return JSON.parse(fs.readFileSync(configPath))
}

if (!fs.existsSync(configPath)) {
	save(defaults)
}

module.exports.has = x => x in defaults
module.exports.get = thing => read()[thing]
module.exports.set = (thing, value) => {
	const conf = read()
	conf[thing] = value
	save(conf)
}
