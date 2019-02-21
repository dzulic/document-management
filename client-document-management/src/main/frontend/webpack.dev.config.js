const fs = require('fs');
var path = require('path');
var webpack = require("webpack");
const container_root = 'src/app/containers/application';
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

//this should override resources link paths and allow it to use in production server
module.exports.output.publicPath = '/js';

// disable the hot reload
var fileNames = {};

fileNames[path.basename('index.js', '.js')] = [
    'babel-polyfill',
    __dirname + '/src/app/index.js'
];

fs.readdirSync(__dirname + '/' + container_root).forEach(function (file) {
    if(file.includes("_index")){
        fileNames[path.basename(file, '_index.js')] = [
            'babel-polyfill',
            __dirname + '/' + container_root + '/' + file
        ];
    }
});
module.exports.entry = fileNames;

//development env
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development'),
        }
    })
);

// export css to a separate file
module.exports.module.rules[1] = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css-loader!sass-loader')
};
module.exports.plugins.push(
    new ExtractTextPlugin('../css/main.css')
);
