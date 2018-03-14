const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
    entry: [
        // index文件的入口，一般来说，入口只会处理js
        path.resolve(__dirname, './src/index.jsx')
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
                // 配置放在.babelrc中
            }
        }, {
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: "eslint-loader",
                // 配置放在.eslintrc.js中
            }
        }]
    },
    // 需要在模块导入时进行自己的别名转换，否则jsx可能无法导出
    resolve: {
        extensions: ['*', '.js', '.jsx'],
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