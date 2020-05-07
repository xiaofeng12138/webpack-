
/**
 * 
 * html loader  1、安装  2、引入   3、配置
 * 
 * 
*/

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
   
    //entry: ['./src/js/index.js', './src/index.html'],
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
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],


    mode:'development',


    devServer:{
        contentBase:resolve(__dirname,'build'), //构建项目后的路劲
        compress:true,  //启动gzip压缩
        port:3000, //端口号
        open:true,  //自动打开浏览器
        // hot:true,   //开启热加载
    }
}