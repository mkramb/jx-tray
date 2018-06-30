module.exports = extractPlugin => ({
    test: /\.css$|\.scss$/,
    use: extractPlugin.extract({
        use: [
            { loader: 'css-loader', options: { import: false, url: false }   },
            { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] }},
            'sass-loader'
        ],
        fallback: 'style-loader'
    })
});
