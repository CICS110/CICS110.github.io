// Needed to access the url of powerpoint files

module.exports = function (context, options) {
    return {
        name: 'WebpackMod',
        configureWebpack(config, isServer, utils) {
            const rule = config.module.rules
                .filter((r) => r.test.toString().includes('pdf'))[0]
            return {
                module: {
                    rules: [
                        {
                            test: /\.pptx$/,
                            use: rule.use,
                        },
                    ],
                },
            };
        },
    };
};