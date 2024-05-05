const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  mode : "development" ,
  entry : ["./src/index.tsx"] ,
  devtool : "inline-source-map" ,
  module : {
    rules : [
      {
        test : /\.css$/i ,
        use : ["style-loader" , "css-loader"] ,
      } ,
      {
        test : /\.(png|jpe?g|gif|svg)$/i ,
        type : "asset" ,
      } ,
      {
        test : /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/ ,
        type : "asset/resource" ,
      } ,
      {
        test : /\.(?:js|mjs|cjs|tsx|ts|jsx)$/ ,
        exclude : /node_modules/ ,
        use : {
          loader : "ts-loader" ,
          // options: {
          // 	presets: [["@babel/preset-env", { targets: "defaults" }]],
          // },
        } ,
      } ,
    ] ,
  } ,
  watch : true ,
  resolve : {
    extensions : [".*" , ".js" , ".jsx" , ".ts" , ".tsx"] ,
    alias : {
      "@src" : path.resolve(__dirname , "src") ,
    } ,
  } ,
  output : {
    path : path.resolve(__dirname , "dist") ,
    filename : "bundle.js" ,
    publicPath : "/" ,
  } ,

  plugins : [
    new webpack.HotModuleReplacementPlugin() ,
    new HtmlWebpackPlugin({
      template : "./public/index.html" ,
      filename : "index.html" ,
      title : "Webpack App" ,
      favicon : "./public/logo_short.svg" ,
    }) ,
  ] ,

  devServer : {
    static : path.resolve(__dirname , "dist") ,
    hot : true ,
    historyApiFallback : true ,
    port : 3002 ,
  } ,
}
module.exports =(env, argv) => {
  config.mode=argv.mode || "development"
  config.watch=argv.mode!=="production"
  return config
};
