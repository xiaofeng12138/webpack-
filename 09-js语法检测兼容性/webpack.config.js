
const {resolve}  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  //分离css的模块

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


// process.env.NODE_ENV = 'development'   //配置环境变量为dev环境

module.exports = {

    entry:'./src/index.js',

    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },


    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
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
            {
                test:'/\.js$/',
                exclude: /node_modules/,  //排除node_moudules里面的文件
                loader:'eslint-loader',  //设置js 法法检测的loader  一般实际开发中不打开
                enforce:'pre',  //表示优先执行eslint-loader
                options:{
                    fix:true
                }
            },
            //js语法兼容性配置
            {
               test:'/\.js$/',
               exclude: /node_modules/, 
               loader:'babel-loader', 
               options:{
                presets:[
                    '@babel/preset-env',
                    {
                        // 按需加载 固定写法
                        useBuiltIns: 'usage',
                        // 指定core-js的版本
                        corejs: {
                            version: 3
                        },
                        // 指定兼容性做到哪个版本浏览器
                        targets: {
                            chrome: '60',
                            firefox: '60',
                            ie: '9',
                            safari: '10',
                            edge: '17'
                        }
                    }
                 ]
               } 
            }
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