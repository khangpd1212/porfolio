const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/js/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    chunkFilename: '[id].[chunkhash].js',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,

  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
    },
    {
      test: /\.(?:js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    },
    {
      test: /\.html$/i,
      use: 'html-loader',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name]-[hash][ext]'
      },
    },
    {
      test: /\.hbs$/,
      loader: "handlebars-loader",
      options: {
        inlineRequires: '\/assets\/'
      }
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Porfolio KhangPD',
      template: 'src/index.hbs'
    }),
  ],
}