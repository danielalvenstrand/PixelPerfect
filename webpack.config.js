const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            language: 'en',
            title: 'Pixel Perfect Front End',
            description: 'A Pixel Perfect Front End project.',
            author: {
                name: 'Daniel Älvenstrand, Backelite',
                email: 'daniel.alvenstrand@backelite.com'
            },
            template: 'src/index.html',
            favicon: 'assets/favicon.ico'
        })
    ]
};