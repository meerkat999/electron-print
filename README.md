# electron-print

> Allows printing from an Electron App in silent mode using the default printer of the system.

## Install

```
$ npm install --save electron-print
```

## Usage

```js
const printer = require('electron-print');

app.on('ready', function() {
    printer.print("Text sent to printer.")
});

```

## Version

1.0.3
