module.exports = {
    enforce: 'pre',
    test: /\.js$|\.jsx$|\.tsx?$/,
    exclude: /node_modules/,
    use: 'tslint-loader'
};
