const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: [path.resolve(__dirname, 'src')],
        use: {
          loader: "babel-loader",
        },
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /(node_modules|bower_components|build)/,
      //   use: ['babel-loader']
      // }
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};

