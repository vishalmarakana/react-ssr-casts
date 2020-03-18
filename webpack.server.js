const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {

  target: 'node',

  node: {

    __dirname: false,

  },

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

      cleanOnceBeforeBuildPatterns: ['dist', '!dist/index.html'],

    }),

  ],

  externals: [webpackNodeExternals()],

})
