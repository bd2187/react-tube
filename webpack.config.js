const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

var config = {
    devtool: "cheap-module-inline-source-map",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            //   { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {
                test: /\.css$/,
                loader: "style-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader",
                query: {
                    modules: true,
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                }
            },
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "app/index.html"
        })
    ]
};

module.exports = config;

if (process.env.NODE_ENV === "production") {
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}
