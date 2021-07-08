## <center>node简述</center>
> V8引擎
1. 浏览器使用import，而nodejs使用require
2. nodejs无DOM与BOM，V8引擎提供运行环境，DOM由浏览器提供
3. 其他浏览器引擎 fireFox:SpiderMonkey,Safair:JavascriptCore

> process
1. 不用引入
2. node环境的环境变量 process.env.NODE_ENV
3. process.stdout  process标准输出方法集合


> 导入与导出
1. module.exports xxx，将对象抛出，可以在另一个文件中直接引入对象
2. exports.xxx = xxx，作为抛出对象的一个属性抛出，被引入时引入的是含有所有被抛出对象的对象


> nodejs事件循环

1. `process.nextTick()` 在下一个事件循环中优先执行的函数，上一次操作结束后立即调用
2. `setTimeout()`放在最末尾执行
3. `setImmediate(()=>{})` 根据实际情况区别与setTimeout的先后顺序，IE与Edge也有此函数


> promise 错误
1. `Uncaught TypeError: undefined is not a promise` 未new一个promise对象
2. `UnhandledPromiseRejectionWarning` 未catch promise的报错



> fs文件操作包 [fs模块](http://nodejs.cn/learn/the-nodejs-fs-module)
  ```js
  // 1. 得到文件描述符（一个整数，0代表标准输入，1代表标准输出，2代表标准错误）
    // 方法一
  fs.open('/Users/joe/test.txt', 'r', (err, fd) => {
    //fd 是文件描述符。
  })

    // 方法二（无回调）
  const fd = fs.openSync(`${url}`)  // 直接返回文件描述符
  // 2. 获取文件详细信息
    // 方法一
    fs.stat(`${url}`,(err, stats) => {
      // stats为文件属性
    })


    // 方法二
    const stats = fs.statSync('./node_modules/.bin/cowsay')

  // 3. 读取文件
    // 路径，编码格式，参数
    fs.redFile(url, code, (err,data) => {})
    const file = fs.redFileSync(url, code)


  // 4. 写文件
    fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})
    /**r+ 打开文件用于读写。
    * w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
    * a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
    * a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
    */

    // 追加到文件
    fs.appendFile(`${url}`, content, e => {})
    const file = fs.appendFileSync(`${url}`, content)
  ```


> path包 [路径包](http://nodejs.cn/learn/the-nodejs-path-module)

1. `path.dirname(notes)` 文件当前文件夹路径
2. `path.basename(notes)` 文件名
3. `path.extname(notes)` 文件类型
3. `path.resolve(url)` 参数不同，组合的路径不同
4. `path.normalize('/users/joe/..//test.txt')` 计算路径得到'/users/test.txt'



> buffer 处理二进制数据
1. 当流处理器接收数据的速度快于其消化的速度时，则会将数据放入 buffer 中。`缓冲/快取`
2. 创建buffer存储‘hi’ `Buffer.from('hi')`
3. 创建一个1KB的buffer `Buffer.alloc(1024)`
4. 可以存取、迭代、遍历、切片、获取长度等


> 流
1. 类型
  + Readable:仅可读，不能向其发送数据`new Stream.Readable()`
  + Writable:仅可写，不能从中接收数据
  + Duplex:可读可写
  + Transform:类似于双工流、但其输出是其输入的转换的转换流。