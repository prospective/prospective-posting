const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        main: './index.ts'
        // main: './index.js'
    },

    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist', 'build']),
        new HtmlWebpackPlugin({
            title: 'Prospective Posting',
            template: 'index.html',
            minify: false
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ],
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    module: {

        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeAttributeQuotes: false
                    }
                }],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[hash]',
                    }
                }]
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true, importLoaders: 1
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    devServer: {
        compress: false,
        overlay: {
            warnings: true,
            errors: true
        },
        // to enable access from intranet
        disableHostCheck: true,
        proxy: {
            '/api' : 'http://localhost:8000'
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};