const colors = require('colors/safe')
const production = process.env.NODE_ENV === 'production'

process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_NAME = require('./package.json').name
process.env.VUE_APP_ENV = require('./code.env')

console.log(colors.green(`代码环境 === ${process.env.VUE_APP_ENV}\r\n`))

module.exports = {
  baseUrl: production ? '/FE/{{ name }}/' : '/',
  lintOnSave: true,
  productionSourceMap: true,
  devServer: {
    port: 9102,
    proxy: require('./proxy.config')
  }
}
