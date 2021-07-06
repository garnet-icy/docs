### nuxt+express
```js
1. yarn add express --no-save   //不加入依赖安装
2. 根目录添加server文件夹
3. server文件夹index.js
4.  const express = require('express')
    const app = express()

    app.get('/hello',(req,res) => {
      res.send('hello world')
    })

    module.exports = {
      path: 'api',
      handler: app
    }
5. 可用'localhost:3000/api/hello'访问数据
```