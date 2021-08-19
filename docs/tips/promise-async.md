## promise与async看js事件流
1. async与await
`async函数返回一个promise对象，即便是常量返回也会封装为promise的resolve()的返回值`
```js
async function test(){
 return "some string"
}
console.log(test()) //Promise { 'some string' }
```
`await会让出线程，继续执行后续代码`
```js
// eg:
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})

console.log('script end')


```
> 代码分析
* 程序自上向下执行
1. 执行async异步函数  `async1 start`
2. 执行await async2() `async2`,此时让出线程，执行后面的代码（让出js线程，不包含promise问题）
3. 执行promise `promise1`,resolve返回异步，加入到promise队列中，
4. 执行js语句 `script end`
5. 线程为空 `async2 end`
6. 开始执行promise队列 `promise2`

**await让出的是js线程，而promise鱼setTimeout都在后面**