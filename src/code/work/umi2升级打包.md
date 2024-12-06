# Umi 2 升级 Cesium 报错：解决 ES6 兼容性问题

## 背景说明 

在项目中尝试升级 Cesium 版本时，遇到 Umi 2 在打包过程中报错的问题。起初考虑升级到 Umi 3 来解决，但由于以下原因未能实施：
1. 项目用户众多，升级到 Umi 3 后需要进行全面的全量测试。 
2. 升级涉及的文件较多，修改量较大，工作量超出预期。

因此，决定继续使用 Umi 2，并针对现有问题进行修复。


## 问题描述

在项目中需要升级 Cesium 版本时(1.63升级到1.100.0时)，Umi 2 在打包过程中出现以下错误：

`vendors.df53a196.async.js from UglifyJs generators cannot be async [vendors.df53a196.async.js:156440,27]`



原因是 Umi 2 默认使用 `uglifyjs-webpack-plugin`，该插件对 ES6+ 的支持有限，无法正确处理新的语法特性。


## 解决方案

通过移除 `uglifyjs-webpack-plugin`，并使用支持 ES6+ 的 `terser-webpack-plugin` 替代，可以解决此问题。在 `umirc.js` 文件中添加如下配置：

```js
chainWebpack(config) {
  // 移除 uglifyjs-webpack-plugin
  config.optimization.minimizers.delete('uglifyjs');

  // 使用 terser-webpack-plugin
  config.optimization.minimizer('terser')
    .use(TerserPlugin, [{
      terserOptions: {
        compress: {
          drop_console: true, // 移除 console.log 等语句
        },
        ecma: 2017, // 支持 ES6+
        mangle: true, // 启用变量名混淆
        output: {
          comments: false, // 移除注释
        },
      },
      parallel: true, // 启用多线程并行压缩
      extractComments: false, // 禁止生成独立的注释文件
    }]);
}
