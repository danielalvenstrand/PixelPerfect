const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'assets/images')
        }
    },
    module: {
        rules: [
            {
                test:/\.s?css$/,
                use:['style-loader','css-loader', 'sass-loader']
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