 module.exports = {
    mode: "development" ,
    entry: "./App.js",
    watch: true ,
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
            },
            {
                test: /\.s[ac]ss/,
                use: ['style-loader' , 'css-loader' ,'sass-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
