const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve')

module.exports = () => {
    const plugins = []

    const build = path.resolve(__dirname, 'build')

    plugins.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'src', 'index.template.html'),
            entry: path.resolve(build, 'index.html')
        })
    )

    plugins.push(new Serve({
        port: 3000,
        static: build,
        publicPath: build,
        waitForBuild: true,
        open: false,
        historyFallback: true,
        host: 'localhost',
        liveReload: true,
        hmr: true
     }))

    return {
        mode: 'development', // production
        entry: [
            'webpack-plugin-serve/client',
            path.resolve(__dirname, 'src', 'app.tsx')
        ],
        output: {
            publicPath: '',
            path: build,
            filename: 'app.js'
        },
        watch: true,
        devtool: 'inline-source-map',
        stats: 'errors-only',
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.ts|\.tsx$/,
                    loader: 'ts-loader',
                    exclude: [
                        /node_modules/
                    ]
                }
            ]
        },
        plugins
    }
}