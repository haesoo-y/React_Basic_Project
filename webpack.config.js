const path = require('path');


module.exports = {
    name: 'webpack-setting',
    mode: 'production',
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
                ]
            }
        }],
    },
    plugins:[
        
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