const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   devtool: 'inline-source-map',
   entry: './src/app.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
        ]
    },
    plugins: [
        new miniCss({
            filename: "style.css"
        }),
    ],
};
