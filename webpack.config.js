module.exports = {
    context: __dirname + "/",

    entry: {
        javascript: "./js/app.js",
        html: "./index.html",
    },

    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'] // Revisit this for loading modules without an extension
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            },
        ],
    }
};
