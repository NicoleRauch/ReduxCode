const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[contenthash].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimize: true
    }
});
