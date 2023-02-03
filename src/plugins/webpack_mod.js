// Needed to access the url of powerpoint files

module.exports = function (context, options) {
    return {
        name: 'WebpackMod',
        configureWebpack(config, isServer, utils) {
            return {
                module: {
                    rules: [{
                        test: /\.(?:pptx?)$/i,
                        use: [
                            {
                                loader: 'file-loader',
                                options: { name: `assets/files/[name]-[hash].[ext]` },
                            },
                        ],
                    }]
                },
            }
        }
    }
}