const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
        overlay: { errors: true, warnings: true },
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    output: {
        path: path.resolve(__dirname, '..', 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, '..', 'node_modules')]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$|\.jsx$|\.tsx?$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.js$|\.jsx$|\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(png)$/,
                use: 'url-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};
