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


# javascript事件冒泡与事件捕获

**概念** 

  事件冒泡与事件捕获是js事件流的两种方案

**特点**

  在DOM2级中，使用addEventlistener方法绑定事件时可以选择使用事件冒泡或者事件捕获

**使用场景**

  当有一个列表，我们希望点击列表任意一项哪到列表的数据时，传统方法需要对列表每一项绑定点击事件，`此时我们可以使用事件冒泡`，给列表外层DOM绑定点击事件，将event参数传递到函数中，

**阻止冒泡**

  ```js
    event.stopPropagation() //阻止事件冒泡
    return false //阻止一切默认事件
    event.preventDefault() //阻止默认事件

  ```

  # 虚拟DOM的优点
  1. 不会中断js引擎的执行
  2. 虚拟DOM频繁的修改会在
  3. 更好的跨平台，实现服务端渲染是依靠虚拟DOM，本身是js对象


  # 浏览器缓存
  0. Expires `响应头` 资源过期时间
  1. Cache-Control `请求|响应头` 控制缓存策略
  2. If-Modified-Since  `请求头` 资源最近的修改时间
  3. last-Modified `响应头` 资源最近修改时间
  4. Etag `响应头` 资源的唯一标识
  5. if-None-Match `请求头` 缓存资源标识，由浏览器告诉服务器，携带Etag，由服务器判断资源是否被修改