const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
};