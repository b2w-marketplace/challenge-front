const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge(
        {
            mode,
            entry: ['@babel/polyfill', path.resolve(__dirname, 'src/js/Main.js')],
            output: {
                path: path.resolve(__dirname, 'dist/'),
                filename: 'bundle.js',
                chunkFilename: '[name].bundle.js'
            },

            module: {
                rules: [
                    {
                        test: /\.js$/,
                        include: [path.resolve(__dirname, 'src/js/')],
                        use: [
                            'babel-loader',
                            'eslint-loader'
                        ]
                    },
                    {
                        test: /\.svg$/,
                        loader: 'svg-inline-loader'
                    },
                    {
                        test: /\.scss$/,
                        include: [path.resolve(__dirname, 'src/sass/')],
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    includePaths: [path.resolve(__dirname, 'node_modules/compass-mixins/lib')]
                                }
                            }
                        ]
                    }
                ]
            },

            plugins: [
                new CleanWebpackPlugin(['dist'], { verbose: true }),
                new HtmlWebpackPlugin({
                    title: 'B2W',
                    filename: 'index.html',
                    template: './src/index.html',
                    inject: 'head',
                    minify: {
                        collapseWhitespace: true
                    }
                }),
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[id].css'
                })
            ]
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    )
}
