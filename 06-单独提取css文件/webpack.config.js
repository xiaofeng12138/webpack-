
const {resolve}  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  //分离css的模块

module.exports = {

    entry:'./src/index.js',

    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },


    module:{
        rules:[
            {
                test:/\.css$/,
                use:[

                    /**
                     * style-loader 作用是创建 style标签 将样式放入
                     * 
                    */
                    // 'style-loader',  
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'  //对重新生成的css进行重命名
        })
    ],

    mode:'development',
}