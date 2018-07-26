const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vuePlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    model:'development',
    devServer:{
        port:3000,
        open:true,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test:/\.(png|jpg|gif)$/,use:'url-loader?limit=44077'},
            {test:/\.(ttf|woff|svg|woff2|eot)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}