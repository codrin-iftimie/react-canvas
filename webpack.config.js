module.exports = {
  cache: true,

  watch: true,

  entry: {
    'listview': ['./examples/listview/app.js'],
    'timeline': ['./examples/timeline/app.js'],
    'gradient': ['./examples/gradient/app.js'],
    'css-layout': ['./examples/css-layout/app.js']
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
     },
    ],
    postLoaders: [
      { loader: "transform?brfs" }
    ]
  },

  resolve: {
    root: __dirname,
    alias: {
      'react-canvas': 'lib/ReactCanvas.js'
    }
  }
};
