/*
 * @Descripttion: Webpage 配置
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2021-11-01 14:27:27
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-02 15:35:15
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV, //"production",
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'utils',
      type: 'umd',
    },
  },
  devServer: {
    open: true,
    port: 8086,
    hot: true,
    client: {
      logging: 'none', // 控制台日志 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
      progress: true, // 在浏览器中以百分比形式打印编译进度
      reconnect: true, // 告诉 dev-server 它应该尝试重新连接客户端的次数, true无限次重新连接, false它不会尝试重新连接。
      overlay: {
        // boolean | {}
        errors: true,
        warnings: false,
      }, // 编译错误覆盖
    },
  },
  // target: ,
  /**
   * inline-source-map
   */
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
    new SimpleProgressWebpackPlugin({
      format: 'compact',
    }),
  ],
};
