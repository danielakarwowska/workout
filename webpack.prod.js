const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve')

module.exports = () => {
    const plugins = []

    plugins.push(
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, 'src', 'index.template.html'),
            entry: path.resolve(__dirname, 'build', 'index.html')
        })
    )

    return {
        mode: 'production',
        entry: [
            path.resolve(__dirname, 'src', 'app.tsx')
        ],
        output: {
            publicPath: '',
            path: path.resolve(__dirname, 'build'),
            filename: 'app.js'
        },
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