const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD = './dist';
const ROOT = './src';
const ENVIRONMENT = process.env.npm_lifecycle_event;
let DEVTOOL = 'eval';

const PLUGINS = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default']    
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(ENVIRONMENT),
      'BABEL_ENV': JSON.stringify(ENVIRONMENT)
    }
  }),
  new ExtractTextPlugin('app.min.css')
];

if (ENVIRONMENT === 'prod') {
  DEVTOOL = '#cheap-module-source-map';
}

module.exports = {

  devtool: DEVTOOL,

  context: path.resolve(__dirname, ROOT),

  entry: {
    app: './index.js'
  },

  output: {
    path: path.resolve(__dirname, BUILD),
    filename: "[name].js"
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.[s]?css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.(woff[2]?|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'imgs/[name].[ext]'
        }
      }
    ]
  },

  plugins: PLUGINS,

  devServer: {
    contentBase: path.join(__dirname, BUILD),
    compress: true,
    port: 8082,
    watchContentBase: true,
    clientLogLevel: 'error'
  }

};