
const {resolve} = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 
 * 入口文件有三种模式
 * 1、单入口文件
 * 2、数组   多入口打包  ['./src/index.js','./src/add.js']
 *  所有的入口文件最终会形成一个chunk, 输出只有bundle文件
 * 3、object 
 * 有几个入口文件就形成几个chunk,输出几个bundle文件
*/
module.exports ={

    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build')
    },

    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()  //每次打包清除上一次打包的文件
    ],

    mode:'development'
}