const path = require('path')

module.exports = () => {

    // config

    // plugins
    const plugins = []

    return {
        mode: 'development', // production
        entry: [
            path.resolve(__dirname, 'src', 'app.tsx')
        ],
        output: {
            publicPath: '/xxx',
            path: path.resolve(__dirname, 'build'),
            filename: 'app.js'
        },
        module: {
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