# 闭包
`有权访问另一个函数作用域中变量的函数`
## 用途
1. 外部调用闭包函数，在函数外部访问另一个函数内部的变量，相当于给函数创建了一个私有变量，该变量只有闭包函数能够访问。
2. 将已经运行过的函数的依赖变量留在内存中，变量不会被GC回收

# 数据类型的检测
## typeof
1. 除null、object、array之外可以准确检测，这三个都会返回object

## instanceof
1. 可以正确判断引用类型，而不能判断基础类型，内部机制是在原型链中是否能找到该类型的原型

## constractor
1. constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了
```js
// 获取对象的原型
Object.getPrototypeOf(left)
```

## Object.prototype.toString;
1. Object.prototype.toString.call(value)


# 数组的方法有哪些