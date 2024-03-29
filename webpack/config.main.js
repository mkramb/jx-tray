const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const config = require('./config.base');

module.exports = merge({}, config, {
    target: 'electron-main',
    entry: { main: path.resolve(__dirname, '..', 'app/main/index') },
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs2',
        filename: 'main.js'
    },
    node: {
        __dirname: false,
        __filename: false
    }
});
