const express = require('express'),
	colors = require('colors'),
	chokidar = require('chokidar'),
	invalidate = require('invalidate-module'),
	path = require('path'),
	app = express(),
	port = process.env.PORT || 3000;

const watcher = chokidar.watch('./serverless', { ignoreInitial: true });

watcher.on('all', (event, filename) => {
	console.log(' HOT PUSH! '.bgMagenta, filename.green, 'now in sync!');
	invalidate(path.resolve(filename));
});

app.use((req, res, next) => {
	require('./serverless/emulator')(req, res, next);
});

app.listen(port, '0.0.0.0', (err, result) => {
	if (err) console.log(err);
	console.log(` Emulator is running in port ${port} `.bgMagenta);
});