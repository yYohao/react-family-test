const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    //入口文件
    entry: {
        app: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
        ],
        vendor:['react', 'react-router-dom', 'redux','react-dom','react-redux']
    },
    //输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].[hash].js",
        chunkFilename: "[name].[chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot:true
    },
    resolve: {
        alias: {

        }
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html')
    }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]


};