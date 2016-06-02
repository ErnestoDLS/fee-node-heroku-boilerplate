module.exports = {
  entry: './build.js',

  output: {
    filename: 'bundle.js',
    publicPath: 'public/javascripts'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
