const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './lib/ivy/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'ivy.js'
    },
    devServer: {
        publicPath: "/",
        contentBase: "./build",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    plugins: [
                        ["transform-h-jsx"],
                        ["syntax-jsx"]
                    ]
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}