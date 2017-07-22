var webpack = require('webpack');

module.exports = {
    entry: "./www/js/index.js",
    output: {
        path: __dirname + '/www/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
                query:
                {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}