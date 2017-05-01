#!/usr/bin/env node

const args = process.argv.slice(2)
const cmds = require('../cmd/')

try {
	if (args[0] in cmds) cmds[args[0]](args.slice(1))
	else {
		cmds.help(args[0])
	}
} catch (e) {
	console.log('error:', e)
	cmds.help(args)
}
