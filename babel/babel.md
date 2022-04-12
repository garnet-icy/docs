## <center>babel</center>
**作用：** 将es6+的内容编译为浏览器兼容性更好的es5
1. .bablerc文件（平常项目中可能没有，主要看配置）
  ```js
    // .babelrc 与 Babel.config.json
    {
      "plugins": [
        "@babel/plugin-transform-arrow-functions"  // babel具体的某一个功能，eg:转化箭头函数
      ],
      "presets": ["myPreset"],  // 预设插件
      ""
    }
  ```
2. 部分库名
  ```json
    "@balel/polyfill":  "通过 Polyfill 方式在目标环境中添加缺失的特性，例如使用async/await必须依赖，npm 安装时必须使用--save",
    "core-js": "使用promise等高级语法时会用到的依赖"
    "@bobal/core": "bobel核心库"
    "@bobal/cli": "允许使用babel命令转译文件"
    "@bobal/preset-env": "babel预设的一种，编译最新版本js"
    "@bobal/preset-react": "babel预设的一种，编译react"
  ```

[babel官网](https://www.babeljs.cn/docs/index.html)