## fetch 与 axios区别
> axios
+ 从浏览器中创建 XMLHttpRequests
+ 从 node.js 创建 http 请求
+ 支持 Promise API
+ 拦截请求和响应
+ 转换请求数据和响应数据
+ 取消请求
+ 自动转换 JSON 数据
+ 客户端支持防御 XSRF

> fetch
+ fetchtch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理
+ fetch默认不会带cookie，需要添加配置项(Axios也需要)
+ fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行
+ fetch没有办法原生监测请求的进度
