# splush [![npm](https://img.shields.io/npm/v/splush.svg)](https://www.npmjs.com/package/splush)

javascript driver for [splush](https://splush.nikerino.com)

[splush-web](https://github.com/nikersify/splush-web)

# getting started

click [here](https://splush.nikerino.com/#gs)!

# usage

## cli

### `splush config (thing) (value)`

configures (thing) with the provided (value)

`thing`'s to configure:
- `key` - key used for pushing notifications for a given device, get it from [here](https://splush.nikerino.com)
- `upstream` - (default https://splush.nikerino.com) - configures the endpoint to push to, useful if you're running your own splush node

example: `splush config key MassiveGroundLeafUnder`

### `splush push (optional: msg)`

Creates a new push notification, optionally with the given (msg).

example: `splush push Good morning!`

### `splush help (command)`

Prints this text.

## module

```javascript
// reads config from ~/.splush.json
const splush = require('splush')()

// can be passed a custom key
const splush = require('splush')('MassiveGroundLeafUnder')

// ...or an options object
const splush = require('splush')({
	key: 'MassiveGroundLeafUnder',
    upstream: 'http://localhost:3030'
})

splush.push('hello!')
```

### `splush([options])`

Spawns a new splush instance, options are read from `~/.splush.json` if not provided.

### `.push([msg])`

Creates a new push notification, optionally with the given (msg).

# install

cli

`# npm install -g splush`

module

`$ npm install --save splush`

# license

MIT
