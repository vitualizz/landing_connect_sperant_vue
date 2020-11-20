const path = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './'),
        "@assets": path.resolve(__dirname, './src/assets'),
        "@pages": path.resolve(__dirname, './src/components/pages'),
        "@templates": path.resolve(__dirname, './src/components/templates'),
        "@organisms": path.resolve(__dirname, './src/components/organisms'),
        "@molecules": path.resolve(__dirname, './src/components/molecules'),
        "@atoms": path.resolve(__dirname, './src/components/atoms')
      }
    }
  }
}
