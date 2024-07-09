const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    publicPath: '/',
  },
 module: {
   rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[name][ext][query]',
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
   ],
 },
 devtool: 'inline-source-map',
 devServer: {
  static: './docs',
  open: true,  // Automatically open the browser
    hot: true,    // Enable hot module replacement
},
 plugins: [
   new HtmlWebpackPlugin({
    title: 'Bake and Banter',
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
   }),
 ],
 optimization: {
  runtimeChunk: 'single',
},
};