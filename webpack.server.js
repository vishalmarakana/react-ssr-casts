const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

const distPath = join(__dirname, 'dist')

const webpackServerConfig = {

  target: 'node',

  entry: './src/server/index.js',

  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {

    rules: [

      {

        test: /\.js$/,

        exclude: /node_modules/,

        loader: 'babel-loader'

      }

    ]

  },

  plugins: [

    new CleanWebpackPlugin({

      cleanOnceBeforeBuildPatterns: ['**/*', 'dist'],

    }),

  ]

}

module.exports = webpackServerConfig
