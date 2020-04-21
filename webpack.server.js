const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { join } = require('path')

module.exports = (env) => {

  const webpackConfig = require('./webpack.config')(env)

  return merge(webpackConfig, {

    target: 'node',

    node: {

      __dirname: false,

    },

    entry: './src/server/index.js',

    output: {

      path: join(__dirname, 'dist'),

      filename: 'server.js',

      publicPath: '/',

    },

    module: {

      rules: [

        ...webpackConfig.module.rules,

      ]

    },

    plugins: [

      ...webpackConfig.plugins,

      new CleanWebpackPlugin({

        cleanOnceBeforeBuildPatterns: ['**/*', '!template.html'],

      }),

    ],

    externals: [webpackNodeExternals()],

  })

}
