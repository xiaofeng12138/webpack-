

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports ={
    
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build')
    },

    module:{
        rules:[
            {
                test:'/\.css$/',
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            title:'xf_GG'
        }),
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
      },

      devServer:{
          //构建后项目的地址路劲
          contentBase:resolve(__dirname,'build'),
          //监听contentBase下面的目录文件，一旦有变化 就会重新reload
          watchContentBase:true,
          compress:true,  //启动gzip压缩
          port:5000, //端口号
          open:true,  //自动打开浏览器
          hot:true, //启用HMR

          clientLoglevel:'noen',  //不要显示服务器日志信息
          quiet:true, // 除了一些基本启动信息外，其他信息不显示
          overlay:false, //如果出错了 不要全屏显示

          //服务器代理
          proxy:{
              '/api':{
                  target:'http:localhost:3000',
                  //将路径重写  将/api/xxx -->/xxxx (去掉/api)
                  pathRewrite:{
                      '/api':''
                  }
              }
          }

      }

}