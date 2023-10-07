const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].minify = false;
      args[0].inject = true;
      args[0].links = [
        'https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap',
      ];
      return args;
    });
  },
})
