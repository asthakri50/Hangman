 module.exports = {
    mode: "development" ,
    entry: "./App.js",
    output: {
        filename : "main.js"
    },
        module: {
            rules: [ 
                {
                test: /\.js/,
                loader: "babel-loader",
                exclude: /node_modules/ ,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}
