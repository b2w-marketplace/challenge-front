const path = require('path')
const fs = require('fs-extra')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const packageJson = fs.readJsonSync(path.join(__dirname, '../package.json'))

module.exports = () => ({
    devtool: 'source-map',
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: packageJson.devPort,
            server: {
                baseDir: ['./dist']
            }
        })
    ]
})
