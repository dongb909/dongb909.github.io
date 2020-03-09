const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '/components/index.jsx'),
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, "style-loader", "css-loader"},
      {test: /\.js$\. "babel-loader'"}
    ]
  }
}