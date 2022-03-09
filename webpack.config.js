const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader","css-loader"],
          },
          {
            test: /\.(jpeg|jpg|png|gif|svg)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            loader: 'file-loader',
          },
        ],
      },
}