# vue问题
## MVVM
+ M：model，处理数据逻辑的部分，对应vue中的methods等API
+ V：view，视图层，对应应用程序中数据显示的部分
+ VM：viewModel：做到数据的双向绑定，【视图】--> 【模型】，【模型】-->【视图】，将我们所见的数据转化为控制层的数据，将控制层的数据转化为所见的页面。
`vue并没有完全遵循MVVM的思想，MVVM中view与model之间是不能通信的，而在vue中提供了$refAPI可以在model中获取到view的DOM`

## 组件通信
1. props、$emit
1. $parents、$children
1. $attrs、$listener

`适用于三层组件之间的通信，中间层绑定$attr与$litener，其余两层就能像父子组件一样通信了`
```html
<middle v-bind="$attr" v-on="$listener"></middle>
```

1. provide、inject
1. $refs
1. vuex
1. eventBus
+ 挂载eventBus
```js
// main.js中
import Vue from "vue"
Vue.prototype.$bus = new Vue()
```
+ 发送事件
```js
// 发送事件的组件中
this.$bus.$emit('changeStr',str)
```
+ 接收事件
```js
// 接收事件的组件
this.$bus.$on('changeStr',(str)=>{
    // 改变本组件的数据
    this.newStr = str
})
```
+ 移除事件
```js
// 移除单个事件
this.$bus.$off('changeStr',{})
// 移除全部
this.$bus.$off()
```


## 双向绑定
```js
// 示例代码
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            console.log('我被读了，我要不要做点什么好?');
            return val;
        },
        set: newVal => {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log("数据被改变了，我要把新的值渲染到页面上去!");
        }
    })
}

let data = {
    text: 'hello world',
};

// 对data上的text属性进行绑定
defineReactive(data, 'text', data.text);

console.log(data.text); // 控制台输出 <我被读了，我要不要做点什么好?>
data.text = 'hello Vue'; // 控制台输出 <hello Vue && 数据被改变了，我要把新的值渲染到页面上去!>

```

1. vue中observer

observer是用于管理响应式的过程，会将所有的数据进行响应式绑定
```js
class Observer{
  constructor(){
    observe(this.data)
  }
}

export function observe(data){
  const keys = Object.keys(data)
  for(var i=0;i<keys.length;i++){
    defineReactive(data,keys[i])
  }
}
```
2. vue中的Dep（依赖管理）

vue中每一个响应式数据都有一个Dep来管理它的依赖，每当数据被改变之后，会通知数据的所有watcher更新

3. watcher

要靠dep通知更新的数据的每一个依赖就是一个watcher，当数据改变时，dep触发的watcher更新相应的依赖

## computed && watch
1. computed有缓存，只有值变化了才回从新计算
2. watch监听的值一旦变化就会触发回调，可以在回调中做逻辑处理
3. computed适合使用在会受多个值影响的的数据上，而watch适合在一个值变化后处理相应的逻辑

## vue对数组的监测
`对数组"push","pop","shift","unshift","splice","reverse","sort",方法进行重写`


## 虚拟DOM
1. 实体DOM抽象的js对象
2. 更好的跨平台，比如nodejs中没有DOM的概念，依旧可以将虚拟dom转化为实体DOM实现SSR
3. 浏览器中DOM操作是非常耗费性能的，频繁变更DOM会造成回流与重绘
4. 使用patch方法尽可能一次性将所有差异更新更新到DOM中去

### 虚拟DOM的实现
1. 函数解析真实DOM，创建Virtual DOM
2. 递归遍历虚拟DOM转化为真实DOM

## diff算法
1.


## for循环
1. for in
  遍历的是数组的索引，适用于遍历对象，会遍历数组的原型   hasOwnProperty()可判断属性是不是实例属性
2. for of （ES6）
  遍历的是数组的值，不包括原型属性


## vue3.0



# react问题