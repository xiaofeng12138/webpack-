

 
const { resolve }  =  require('path')

module.exports = {
     
    entry:'./src/index.js',   //配置模块打包入口

    output:{
       filename:'built.js',   //输出文件名
       path: resolve(__dirname,'build')   //输入文件路径
    },
    

    //loader的配置
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    // plugins的配置
    plugins:[],

    //模式配置
    mode:'development', //开发模式
    // mode:'production'  //生产模式

}