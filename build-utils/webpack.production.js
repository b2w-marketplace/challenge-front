const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = () => ({
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ecma: 8,
                    warnings: false,
                    booleans: true,
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true,
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})
