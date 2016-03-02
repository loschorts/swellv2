module.exports = {
  context: __dirname + "/frontend",
  entry: "./swell.jsx",
  output: {
      path: __dirname + "/app/assets/javascripts",
      filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
  // you can now require('file') instead of require('file.coffee')
  extensions: ['', '.js', '.jsx', '.json', '.coffee'] 
  }
	  

};