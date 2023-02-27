# 前端安全问题

## Q1：XSS 攻击

1. 前端界面输入框输入代码串可能会被程序当成正常代码执行，或者影响界面展示

- HTML 所有标签转义，对所有外部插入的代码进行转义，避免使用 innerHTML、document.write 等方法
- http 头部设置 Content-Security-Policy: script-src 'self'，或者meta标签配置
    ```html
    <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
    ```

## Q2：CSRF攻击

1. 受害者登录目标网站A；
2. 受害者以某种方式接触到恶意网站B的链接；
3. 受害者点击链接访问网站B, 网站B中的js代码执行, 偷偷向目标网站A发送某个请求；
4. 由于受害者登录过网站A, 因此请求携带了网站A的相关cookie凭证，最后请求成功执行；

`恶意链接携带某一用户的信息请求当前网站的内容`

- SameSite Cookie，cookie限制不同源发送，跨域请求时不会被发送
- CSRF token，服务器端对用户的唯一ID，SCRF Token是放在session中，第三方网站拿不到
- 请求头Referer和origin标志发起请求的页面链接，但是同源检测的可靠性并不高，比如在302重定向的时候，为了保护来源，http请求不会携带Origin字段，而Referer字段会受到Referer Policy规则的限制而不发送。
`请求头中Referer Policy是用于控制请求头中的Referer，`

## XS-Leaks攻击

1. XS-Leaks利用了对HTTP缓存进行查询的机制，通过对资源缓存的判断进而推断出当前用户的相关信息。如果你第一次听说XS-Leaks，那我相信你一定很意外为什么普普通通的HTTP资源缓存也能造成用户信息泄漏。

`因为浏览器所有缓存内容共享，如果两个网址都使用了相同的文件内容，访问时如果发现内容是从缓存中来，就能推测到用户之前访问过另一个网站`

- 浏览器缓存分区，不同域名下缓存不相通
- 