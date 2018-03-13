const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./build/config');

module.exports = {
    entry: [
        // index文件的入口，一般来说，入口只会处理js
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        // 打包的路径
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015",
                        "react"
                    ],
                    plugins: [
                        // 转换的核心插件，去除冗余代码
                        "transform-runtime",
                        // 如果babel中用到了import，需要引入这个
                        "syntax-dynamic-import"
                    ]
                }
            }
        }]
    },
    plugins: [
        // 自动基于模板，生成最终引入了脚本后的页面
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: './dist/bundle.js',
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
    ],
    // 服务器相关配置
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        //content-base就是 codeResource -需要监听源码
        contentBase: './src',
        watchContentBase: true,
        // 默认的服务器访问路径，这里和配置中一致，需要提取成纯粹的host:ip
        public: /https?:\/\/([^\/]+?)\//.exec(config.publicPath)[1]
    },
};