/**@type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  outputDir: 'main_app',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  },
}