const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const host = process.env.HOST || 'localhost';

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    entry: resolveAppPath('src'),
    output: {
        filename: 'main.js',
        path: resolveAppPath('public'),
        publicPath: '/'
    },

    devServer: {
        contentBase: resolveAppPath('public'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        host,
        port: 3000,
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: resolveAppPath('public/index.html'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolveAppPath('src'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        require.resolve('babel-preset-react-app')
                    ],
                    plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }]],
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
}