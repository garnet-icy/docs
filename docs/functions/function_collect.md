# 常用的手写方法
> instanceof
```js
  function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), // 获取对象的原型
        prototype = right.prototype; // 获取构造函数的 prototype 对象

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
      // 原型链的终点是null
      if (!proto) return false;
      if (proto === prototype) return true;
      // 获取对象的原型的原型继续进行判断，为null是返回false，或者在原型链中找到返回true
      proto = Object.getPrototypeOf(proto);
    }
  }
```

> Object.create()
```js
// 原理为将函数创造的东西的原型指向想要被指向的原型
function create(obj){
  function F (){}
  f.prototype = obj
  return F
}
```