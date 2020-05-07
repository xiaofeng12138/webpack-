
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
        rules:[
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader',  //只有一个loader的时候可以直接用loader:XXXXX
                options:{
                    name:'[hash:10].[ext]'  //给图片重命名
                }
            },
            {
                test:/\.html$/,  //处理html中的img 图片
                loader:'html-loader'
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],


    mode:'development',
}