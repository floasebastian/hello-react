const path = require('path');
const root = path.join(__dirname, '/'); 
const src = path.join(__dirname, '/src/');
const pub = path.join(__dirname, '/public/');


module.exports = {
    mode: "development",
    entry: ['babel-polyfill', src + '/index.js'],
    output:{
        path: root,
        filename: 'index.js'
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                     presets: ["@babel/preset-env", "@babel/preset-react"],
                     plugins: []
                }
            },
            {
                test: /\.(sass|less|css)$/,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              }
        ]
    },
    devServer:{
        liveReload: true,
        port: 1234,
        historyApiFallback: true
    }
};