// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src/app'; // the app root folder: src, src_users, etc
var container_root = 'src/app/containers/application';
var dev_root = 'dev';
var dist_root = '../resources/static';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var dev_serv_port = 8082;

module.exports = {
    entry: [
        // http://gaearon.github.io/react-hot-loader/getstarted/
        'whatwg-fetch',
        'webpack-dev-server/client?http://localhost:' + dev_serv_port,
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        __dirname + '/' + app_root + '/index.js',
    ],
    output: {
        path: __dirname + '/' + dist_root + '/js',
        publicPath: 'js/',
        filename: "[name]-bundle.js",
    },
    module: {
    	rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                // https://github.com/jtangelder/sass-loader
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
            	test: /\.css$/,
            	use: ['style-loader', 'css-loader']
            },
            // Font Definitions
            { test: /\.svg$/, loader: 'url-loader?limit=2000000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
            { test: /\.woff$/, loader: 'url-loader?limit=2000000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url-loader?limit=2000000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url-loader?limit=2000000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.eot$/, loader: 'url-loader?limit=2000000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
            {
                test: /\.(png|jpg|gif)$/,
            	use: [
                      {
                        loader: 'url-loader',
                        options: {
                          limit: 2000000
                        }
                      }
                    ]
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/' + dev_root,
        port: dev_serv_port,
        inline: true
    },
    plugins: [              

		new webpack.DefinePlugin({
		    'process.env': {
		      NODE_ENV: JSON.stringify('nodedev'),
		    }
		  }),

        new CleanWebpackPlugin(['css/main.css', 'js/*'], {
            root: __dirname + '/' + dist_root,
            verbose: true,
            dry: false, // true for simulation
        }),
    ],
};
