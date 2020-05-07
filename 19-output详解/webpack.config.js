
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
    output: {
    // 文件名称（指定名称+目录）
    filename: 'js/[name].js',
    // 输出文件目录（将来所有资源输出的公共目录）
    path: resolve(__dirname, 'build'),
    // 所有资源引入公共路径前缀 --> 'imgs/a.jpg' --> '/imgs/a.jpg'
    // publicPath: '/',
    chunkFilename: 'js/[name]_chunk.js', // 非入口chunk的名称
    // library: '[name]', // 整个库向外暴露的变量名
    // libraryTarget: 'window' // 变量名添加到哪个上 browser
    // libraryTarget: 'global' // 变量名添加到哪个上 node
    // libraryTarget: 'commonjs'
  },

    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()  //每次打包清除上一次打包的文件
    ],

    mode:'development'
}