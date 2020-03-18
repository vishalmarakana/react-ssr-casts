const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {

  target: 'node',

  entry: './src/server/index.js',

  output: {

    path: join(__dirname, 'dist'),

    filename: 'server/index.js',

    publicPath: '/',

  },

  module: {

    rules: [

      ...webpackConfig.module.rules,

    ]

  },

  plugins: [

    new CleanWebpackPlugin({

      cleanOnceBeforeBuildPatterns: ['**/*', 'dist'],

    }),

  ],

})
