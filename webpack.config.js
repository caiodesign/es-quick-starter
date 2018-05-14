const webpack = require('webpack'); // loading webpack...
const nodeENV = process.env.NODE_ENV || 'production'; // A simple variable to check if the env is development or not.
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map', // enabling the source-map files.
    entry: {
        filename: ['babel-polyfill', './src/App.js'] // source files.
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/public/",
        filename: 'bundle.js' // compilated files.
    },
    module: {
        rules: [
            {
              test: /\.js$/, // get all .js files.
              exclude: /(node_modules|bower_components)/, // exclude node_modules and bower_components before compile.
              use: {
                loader: 'babel-loader', // loading babel...
                options: {
                  presets: ['env'],
                }
              }
            }
          ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
        }),
        new UglifyJsPlugin({ 
            sourceMap: true,
            uglifyOptions: {
                inline: false,
            },
        })
    ],
}