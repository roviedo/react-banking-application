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
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'react-hot-loader'
                }, {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'es2015',
                            'react',
                            'stage-0',
                            'airbnb'
                        ]
                    }
                }]
            }, {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            }
        ]
    }
};
