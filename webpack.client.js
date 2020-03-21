const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const publicPath = join(__dirname, 'public')
const webpackConfig = require('./webpack.config')

module.exports = (env) => {

  const isProduction = env === 'production'

  return merge(webpackConfig, {

    entry: './src/client/index.js',

    output: {

      path: publicPath,

      filename: 'dist/js/[chunkhash].js',

      publicPath: '/',

    },

    module: {

      rules: [

        ...webpackConfig.module.rules,

      ]

    },

    plugins: [

      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({

        template: './src/template.html',

        filename: isProduction ? '../dist/template.html' : 'index.html',

        minify: {

          collapseWhitespace: isProduction,

        },

      }),

    ],

    devtool: isProduction ? 'hidden-source-map' : 'inline-source-map',

    devServer: {

      contentBase: publicPath,

      compress: true,

      inline: true,

      historyApiFallback: true,

      port: 6242,

    }

  })
}
