let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //  多入口，
    mode:'development',
    entry: {
        home: './src/index.js',
        other: './src/other.js',
    },
    output: {
        filename: '[name].js',//代表home/other
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            chunks:['other','home']
        }),
    ]
}