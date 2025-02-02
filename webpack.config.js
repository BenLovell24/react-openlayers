/**
 * This config is to build dist/react-openlayers.umd.js
 */
var path = require("path");
var webpack = require('webpack');

var config = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    main: "./src/index.tsx",
    vendor: ["react", "react-dom", "ol"],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "lib/[name].umd.js",
    sourceMapFilename: "lib/[name].js.map",
    libraryTarget: "umd"
  },
  optimization: {
    splitChunks: {
        chunks: "all",
        name: "vendor",
    },
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.html'],
    alias: {
      'react-openlayers': path.join(__dirname, 'src', 'index.ts')
    },
  },
  module: {
    rules: [
      // { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      { test: /\.html/, use: 'html-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;
