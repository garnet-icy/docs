
> options预检

```txt
cors（跨域资源共享机制）将http请求分为简单请求与复杂请求，当使用复杂请求时会使用options方式先发送预检请求

```

**options请求特点**

1. 不发送请求体
1. 成功的返回没有响应体
1. 一种安全的请求，不会修改服务器的资源

**简单请求：**
1. 请求方式是GET/POST/HEAD
1. 请求头必须为['Accept','Accept-Language','Content-Language','Content-Type']中得一个
1. Content-Type的值仅限于['text/plain','multipart/form-data',application/x-www-http-urlencoded]
1. 请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问
1. 请求中没有使用 ReadableStream 对象

`除简单请求外其余请求皆为复杂请求，复杂请求在跨域是会使用options方式进行预检`
