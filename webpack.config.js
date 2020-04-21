const webpack = require('webpack')

module.exports = (env) => {

  const isProduction = env === 'production'

  return {

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

      new webpack.DefinePlugin({

        'process.env.BASE_API_URL': JSON.stringify(isProduction ? '/api' : 'https://react-ssr-api.herokuapp.com'),

      }),

    ],

  }

}
