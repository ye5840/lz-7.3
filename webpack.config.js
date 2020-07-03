const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {

    rules: [


      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },


      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      },


      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

    ]


  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from:'./src/public',      
      to:path.resolve(__dirname, 'dist'),
      ignore:['index.html']
    }])
  ],  
  devServer: {
    port: 9000,
    open:true,
    quiet:true
  },
  devtool:'cheap-module-eval-source-map',
  resolve:{
    extensions: [".js", ".json",".vue"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
};