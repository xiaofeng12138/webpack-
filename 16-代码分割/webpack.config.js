const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[contenthash:10].js',  //hash命名生成的文件  js/[name]表示用原来文件名
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css'  //hash命名生成的文件
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
  ],

    /*
    1. 可以将 node_modules 中代码单独打包一个 chunk 最终输出 
    2. 自动分析多入口 chunk 中，有没有公共的文件。如果有会打包成单独一个 chunk
    */
   optimization:{  //可以将打包的js文件分别处理
    splitChunks:{
      chunks: 'all'
    }
   },


  mode: 'production'
};
