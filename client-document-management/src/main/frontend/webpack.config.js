const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


var container_root = 'src/app/containers/application';
var dev_root = 'dev';
var dist_root = '../resources/static';
var app_root = 'src/app'; // the app root folder: src, src_users, etc


const HOST = process.env.HOST || "localhost";
const PORT =  8090;

module.exports = {
    entry: [
        'whatwg-fetch',
        'webpack-dev-server/client?http://localhost:' + PORT,
        'webpack/hot/only-dev-server',
        __dirname + '/src/app/index.js',
    ],
    output:
        {
            path: path.join(__dirname, 'public'),
            publicPath: '/',
            filename: "bundle.js",
        }
    ,
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, "src"),
            path.join(__dirname, "node_modules"), // the old 'fallback' option (needed for npm link-ed packages)
        ],
        alias: {
            "styles": path.resolve(__dirname, 'styles/'),
        }
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/'),
                query: {
                    cacheDirectory: true,
                    presets: ["stage-0", "react", "es2016", "es2015"]
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
            }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            files: {
                css: ['style.css'],
                js: ["bundle.js"],
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('nodedev'),
            }
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                container_root: container_root, // the container root folder, needed by the other webpack configs
                app_root: app_root, // the app root folder, needed by the other webpack configs
            }
        }),
        new CleanWebpackPlugin(['css/main.css', 'js/*'], {
            root: __dirname + '/' + dist_root,
            verbose: true,
            dry: false, // true for simulation
        }),


    ]
}
;