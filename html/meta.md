# html 中 meta 标签

## 属性

> chares

    字符编码

> http-equiv

    属性定义了一个编译指示指令。因为所有允许的值都是特定 HTTP 头部的名称

> name，content
  
  [标准元数据名称](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name)

  name 与 content 搭配使用，name 作为元数据的名称，content 作为元数据的值

1. auther：作者名称
2. description：一段描述，比分浏览器会作为书签的默认说明
3. generator：生成此页面的软件的标识符（identifier）
4. keywords：与页面内容相关的关键词，使用逗号分隔
5. referrer：控制由当前文档发出的请求的 HTTP Referer 请求头
6. theme-color：表示当前页面的建议颜色，content 应为 css 正确的颜色值
7. viewport：视口属性设置，可选值width(正整数/device-width)、height(正整数/device-height)、initial-scale(定义设备宽度与视口的缩放比)、maximum-scale（缩放比的最大值）、minimum-scale（缩放比的最小值）、user-scalable（yes or no 是否可缩放）、viewport-fit

> content

    content既可以为name的属性值，也可以为字符串http-equiv，当http-equiv属性为refresh时分两种情况

- 如果 content 只包含一个正整数，则为重新载入页面的时间间隔 (秒)；
- 如果 content 包含一个正整数，并且后面跟着字符串 ';url=' 和一个合法的 URL，则是重定向到指定链接的时间间隔
