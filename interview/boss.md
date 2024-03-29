# 网站重构

  在不改 变UI的情况下，对网站进行优化，在扩展的同时保持一致的UI。对于传统的网站来说重构通常是：

  1. 表格(table)布局改为DIV+CSS 使网站前端兼容于现代浏览器(针对于不合规范的 CSS、如对IE6有效的)
  
  2. 对于移动平台的优化 针对于SEO进行优化，深层次的网站重构应该考虑的方面 减少代码间的耦合 让代码保持弹性 严格按规范编写代码 设计可扩展的API 代替旧 有的框架、语言(如VB) 增强用户体验，
  
  3. 速度的优化，压缩JS、CSS、image等前端资源(通常是由服务器来解决) 程序的性能优化 (如数据读写) 采用CDN来加速资源加载 对于JS DOM的优化 HTTP服务器的文件缓存

# eventloop
  


`javascript事件循环`
1. javascript是单线程的，同时只能处理一件事情
2. js执行栈
  + 按顺序将函数添加到执行栈中
  + 函数中的依赖函数也会在执行时添加到执行栈
  + 然后先执行依赖，反向一步步清空执行栈
  + 最后第一个函数出栈
3. 事件队列
  
    将事件分为宏任务与微任务，每个宏任务对应一个单独的微任务队列，注意Promise本身是同步的立即执行函数，.then是异步执行函数
  + microtasks(微任务)
    + process.nextTick（nodejs）
    + promise
    + Object.observe (废弃)
    + MutationObserver

  + macrotasks(宏任务)
    + setTimeout
    + setImmediate
    + setInterval
    + I/O
    + UI 渲染
3. 执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。

**js事件循环概述**
```
  js代码自上而下执行，按顺序将事件分为宏任务与微任务加入到事件队列中，主线程代码自上而下继续执行，

  开始执行，先执行所有主线程代码，当执行栈为空时，先判断是否有微任务（promise），当微任务执行完毕再开始执行宏任务
```
**script代码是什么任务？**
```
  可以理解为所有的代码都在一个屋子里，而script不属于任何一个房间，更像一个客厅，不属于宏任务也不属于微任务
```
`javascript事件循环`

**node中的事件循环概述**
1. 宏任务与微任务
  + setImmediate
  + setTimeout
  + setInterval
  + script（整体代码)
  + I/O 操作等。