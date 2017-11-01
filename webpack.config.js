const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const Handlebars = require('handlebars');

const stage = process.env.STAGE || 'dev';

console.log('Bundling server...');

const yamlContent = fs.readFileSync('./serverless.yml', 'utf8'),
	yamlTemplate = Handlebars.compile(yamlContent, { noEscape: true }),
	newYamlContent = yamlTemplate({ stage, });

fs.writeFileSync('./serverless/serverless.yml', newYamlContent);

console.log('Successfully create serverless.yml');

// Exclude node_module stuffs
const nodeModules = {};
fs.readdirSync('node_modules')
	.filter((x) => {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach((mod) => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

module.exports = {
	entry: './serverless/index.js',
	target: 'node',
	output: {
		path: path.join(__dirname, 'serverless'),
		libraryTarget: 'commonjs2',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			loaders: ['babel-loader'],
		}],
	},
	externals: nodeModules,
};