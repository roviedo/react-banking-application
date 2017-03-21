module.exports = {
    context: __dirname + "/",

    entry: "./js/app.js",

    output: {
        filename: "app.js",
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
                loaders: ["babel-loader"]
            }
        ]
    }
};
