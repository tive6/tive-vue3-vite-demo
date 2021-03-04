module.exports = {
    plugins: {
        "autoprefixer": {
            "browsers": [
                "> 1%",
                "last 2 versions",
                "not ie <= 8",
                "Android >= 4.0",
                "iOS >= 8"
            ]
        },
        'postcss-px2rem-exclude': {
            remUnit: 37.5,
            exclude: /node_modules|vant/i
        }
    }
};