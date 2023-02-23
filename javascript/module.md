# commonjs & ES modules

## commonjs

> 导出

1. module exports

```js
  // 将变量存储在module.exports中，module.exports原本是一个空对象
  // test.js
  let name = "zan"
  let age = 13
  module.exports {
    name,
    age
  }
```

2. exports

```js
// exports 在内部其实是指向了 module.exports，相当于把变量或函数存储到 module.exports
// test.js
let name = "zan";
let age = 13;
exports.name = name;
exports.age = age;
```

> 导入

1. require

```js
const obj = require("test.js");
obj.name; // "zan"
obj.age; // "13"
```

**require 方法还可以接收一个表达式作为参数**

```js
let fileName = "test.js";
const obj = require("./" + fileName);
```

## ES6

> 导出

1. export default

```js
const name = "string";
const testFun = function () {
  return "测试方法";
};

// 将所有需要导出的变量放入一个对象中导出
export default {
  testFun,
  name,
};
```

2. export

```js
const name = "string";
const age = "age";
export {
  name:name
}
// 第二种写法
// export const name = "a";
// export const test = "1";
// export const test2 = "2";
```

## 备注

1.module 模块本身

```js
Module {
  id: '.', // 如果是 mainModule id 固定为 '.'，如果不是则为模块绝对路径
  exports: {}, // 模块最终 exports
  filename: '/absolute/path/to/entry.js', // 当前模块的绝对路径
  loaded: false, // 模块是否已加载完毕
  children: [], // 被该模块引用的模块
  parent: '', // 第一个引用该模块的模块
  paths: [ // 模块的搜索路径
   '/absolute/path/to/node_modules',
   '/absolute/path/node_modules',
   '/absolute/node_modules',
   '/node_modules'
  ]
}
```

## 区别

1. commonjs 是运行时加载模块（在代码运行时同步阻塞性地加载模块，在执行代码过程中引用其他文件时 require(X) 时会停下来等待，直到新的模块加载完成之后再继续执行接下去的代码。），ES6 是在静态编译期间就确定模块的依赖。
2. ES6 在编译期间会将所有 import 提升到顶部，commonjs 不会提升 require。
3. commonjs 导出的是一个值拷贝，会对加载结果进行缓存（cache，模块加载过程中会以模块绝对路径为 key, module 对象为 value 写入 cache，引入模块时会优先查找 catch），一旦内部再修改这个值，则不会同步到外部。
   ES6 是导出的一个引用，内部修改可以同步到外部，在内存中腾出空间给即将 export 的内容（此时尚未写入 export value，export 为空）。然后使 import 和 export 都指向内存中的这些空间，这个过程也叫连接。
4. 两者的循环导入的实现原理不同，commonjs 是当模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。ES6 模块是动态引用，如果使用 import 从一个模块加载变量（即 import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
5. commonjs 中顶层的 this 指向这个模块本身，而 ES6 中顶层 this 指向 undefined。
