const path = require("path");

module.exports = [
  {
    entry: ["./index.scss", "./main.ts"],
    devtool: "source-map",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "bundle.css",
              },
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: "sass-loader",
              options: {
                includePaths: ["./node_modules"],
              },
            },
          ],
        },
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(ts)x?$/,
          exclude: /node_modules|\.d\.ts$/, // this line as well
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false, // this option will solve the issue
              },
            },
          },
        },
      ],
    },
  },
];
