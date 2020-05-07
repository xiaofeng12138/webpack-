
const {resolve}  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  //分离css的模块

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


// process.env.NODE_ENV = 'development'   //配置环境变量为dev环境

module.exports = {

    entry:'./src/index.js',

    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseWhitespace:true, //移除空格
                removeComments:true  //移除注释
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'  //对重新生成的css进行重命名
        }),
        new OptimizeCssAssetsPlugin() //压缩css
    ],

    mode:'development',
}