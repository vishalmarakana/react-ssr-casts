const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const publicPath = join(__dirname, 'public')

module.exports = (env) => {

  const webpackConfig = require('./webpack.config')(env)
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

      ...webpackConfig.plugins,

      new CleanWebpackPlugin(),

      new HtmlWebpackPlugin({

        template: './src/template.html',

        favicon: './src/favicon.png',

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
