
const {resolve}  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  //分离css的模块

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


process.env.NODE_ENV = 'development'   //配置环境变量为dev环境

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
                    MiniCssExtractPlugin.loader,  //插件目的是提取css成单独的文件
                    'css-loader',
                    {
                        //css loader兼容性配置
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:()=>{
                                require('postcss-preset-env')()
                            }
                        }
                    }
                ]
            },
            
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css'  //对重新生成的css进行重命名
        }),
        new OptimizeCssAssetsPlugin() //压缩css
    ],

    mode:'development',
}