
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
   
    entry: './src/js/index.js',

    output:{
        filename: 'js/[name].[contenthash:10].js',
        path:resolve(__dirname,'build')
    },

    module:{
        rules:[]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
              collapseWhitespace: true,
              removeComments: true
            }
          }),
    ],


    mode:'production',

    externals:{
        //拒绝jQuery被打包  但是要引入对应的cdn
        jquery:'jQuery'
    }
}