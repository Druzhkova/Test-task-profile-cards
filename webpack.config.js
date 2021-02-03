const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader']
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
    ]
  }
}