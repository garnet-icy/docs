# this指向问题
## case1
```js
/**
 * this 指向 a 对象
 */
let obj = {
  name:'obj',
  a:function(){
    console.log(this.name);
  }
}
// 将函数拿到obj中执行
obj.a()   // 'obj'
```

## case2
```js
/**
 * this 指向 window 对象
 */
let obj = {
  name:'obj',
  a:function(){
    console.log(this.name);
  }
}

// 将函数拿到fun中执行，fun环境中this为window
let fun = obj.a
fun()   // undifined
```


## tips
1. `引用数据类型名称中存储的事数据在内存中的地址`
2. `每当调用一个函数时，我们必须查看括号/圆括号“()”的直接左侧。 如果在圆括号的左边可以看到一个引用，那么传递给函数调用的“this”的值就是该对象所属的值，否则它就是全局对象。  `
3. `this是由它所在的函数的上下文决定的，而不是由它定义的上下文决定的`

[参考 阮一峰](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)