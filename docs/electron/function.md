
## 1.调用系统通知
1. 安装node-notifier npm包
2. node-notifier的部分配置
```js
notifier.notify(
    {
      title: '头部信息',
      subtitle: 'subtitle',
      message: '内容',
      sound: false, // 声音文件位置路径（区分大小写）
      icon: './myicon.ico', // 提示图标
      contentImage: './kristy.png', // Absolute Path to Attached Image (Content Image)
      open: 'www.baidu.com', // URL to open on Click
      wait: false, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

      // New in latest version. See `example/macInput.js` for usage
      timeout: 5, // 秒数
      closeLabel: 'close', // String. 关闭按钮
      actions: ['32', 'were', 'erre'], // String | Array<String>. 提示框操作的按钮
      dropdownLabel: 'dropdownLabel', // String. Label to be used if multiple actions
      reply: true // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
    },
    function (err, response, metadata) {
      // 到时间关闭或者点击关闭后的回调
      /**
       * reponse的种类
       *  activate:点击其他地方关闭
       *  action[i]:点击action中某一项关闭
       *  timeout:超时关闭
       * metadata:回调的部分信息
       */
      console.log(err, response, metadata);
      document.write(response)
    }
  );
```

参考[node-notifier](https://github.com/mikaelbr/node-notifier)
