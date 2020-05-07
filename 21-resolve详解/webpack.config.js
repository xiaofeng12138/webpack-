
const {resolve} = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    ]
  },

    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()  //每次打包清除上一次打包的文件
    ],

    mode:'development',

    //解析模块规则
    resolve:{
      //配置模块解析路劲
      alias:{
           $css: resolve(__dirname,'src/css')
      },
      //配置省略文件后缀名
      extensions:['.js','.json','.vue','.jsx'],
      //告诉webpack解析模块去哪个目录找
      modules:[resolve(__dirname,'../node_modules'),'node_modules']
    }
}