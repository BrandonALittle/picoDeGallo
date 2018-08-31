
const webpackConfig = {
    entry: "./src/index.js",
    output: {
        path: `${__dirname}/build`,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'development'
};

module.exports = webpackConfig;