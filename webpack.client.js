const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const publicPath = join(__dirname, 'public')
const webpackConfig = require('./webpack.config')

module.exports = (env) => {

  const isProduction = env === 'production'

  return merge(webpackConfig, {

    entry: './src/client/app.js',

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

      new CleanWebpackPlugin({

        cleanOnceBeforeBuildPatterns: ['public', 'dist/index.html'],

      }),

      new HtmlWebpackPlugin({

        template: './src/client/index.html',

        filename: '../dist/index.html',

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
