
/**
 * 
 * html loader  1、安装  2、引入   3、配置
 * 
 * 
*/

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
   
    entry:'./src/index.js',

    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },

    module:{
        rules:[]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],


    mode:'development',
}