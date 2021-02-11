const path = require('path');
const RefreshWebpackPlugins = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
    name: 'webpack-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./client'],
    }, 

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 10% in KR'],
                    },
                    debug: true,
                }],
                 '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins:[
        new RefreshWebpackPlugins()
    ],

    output: {
        path: path.join(__dirname, 'dist'), //A:\Documents\Github...
        filename: 'app.js',
        publicPath: '/dist/',
    }, 
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
};