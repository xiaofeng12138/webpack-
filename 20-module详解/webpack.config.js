
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
  },

  module:{
     rules: [
      // loader的配置
      {
        test: /\.css$/,
        // 多个loader用use
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        // 排除node_modules下的js文件
        exclude: /node_modules/,
        // 只检查 src 下的js文件
        include: resolve(__dirname, 'src'),
        // 优先执行
        enforce: 'pre',
        // 延后执行
        // enforce: 'post',
        // 单个loader用loader
        loader: 'eslint-loader',
        options: {}
      },
      {
        // 以下配置只会生效一个
        oneOf: []
      }
    ]
  },

    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()  //每次打包清除上一次打包的文件
    ],

    mode:'development'
}