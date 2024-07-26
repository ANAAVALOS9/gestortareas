const path = require('path');

module.exports= {
entry: './src/index.js',// punto de entrada de tu aplicacion
output:{
filename: 'bundle.js', // nombre del archivo de salida
path: path.resolve(_dirname,'dist'),//carpeta de salida
},
module:{
    rules:[
{
    test: /\.css$/, // Regex para identificar archivos CSS
    use: ['style-loader','css-loader']
},
{
    test: /\.js$/,
    exclude: /node_modules/,
    use:{
        loader: 'babel-loader',
        options:{
          presets:  ['@babel/preset-env'] ,    
    }
}
}
] 
},
devtool: 'source-map',
devServer: {
    contentBase: path.resolve(_dirname,'dist'),
    compress: true,
    port: 9000,
}
}