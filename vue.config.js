module.exports = {
  publicPath: './',
  outputDir: 'dist',
  // default ''
  assetsDir: 'static',
  indexPath: "index.html",
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {
      // `app` 是一个 express 实例
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      },
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/assets/css/varuables.scss` 这个文件
        data: `@import "@/assets/style/mixin.scss";`
      }

    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
}