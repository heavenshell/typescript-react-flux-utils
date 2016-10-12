const path = require('path')

module.exports = [{
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.html'],
    modulesDirectories: ['node_modules']
  },
  entry: {
    js: './src/app.ts',
    html: './src/index.html'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}]
