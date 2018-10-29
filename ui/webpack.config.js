const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8081,
    contentBase: './dist'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.join(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-object-rest-spread']
      }
    },
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {
          loader: "css-loader", options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[sha1:hash:8]"
          }
        }]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader',
        options: {
          name: '[sha1:hash:8].[ext]'
        },
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[sha1:hash:8].[ext]',
          limit: 25000
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
