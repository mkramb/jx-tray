const path = require('path');
const merge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const config = require('./config.base');
const isProd = process.env.NODE_ENV === 'production';

module.exports = merge(config, {
    target: isProd ? 'electron-renderer' : 'web',
    entry: {
        index: [path.resolve(__dirname, '..', 'app/renderer/index')]
    },
    output: {
        filename: 'renderer.js'
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, '..', 'app/renderer/index.html')
        })
    ]
});
