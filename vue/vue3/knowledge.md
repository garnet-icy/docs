# Composition API
## setUp函数
```js
  setUp(){
    let name = 'sina'
  }
```

## ref函数（处理基本类型）
```js
  // 复杂的响应式实现方式
  //  ref是refImpl的实例对象 （reference implement）引用实现的实例对象， 实现数据的响应式
  // ref处理基本数据使用getter&setter ，Object使用Proxy
import {ref} from 'Vue'
  setUp(){
    let name = ref('sina')
    let obj  = ref({
      name:'sina',
      type:'男'
    })
    function changeData(){
      name.value = 'sina_change' //html中不用.value
      obj.value.type = '女'
    }
  }
```
## reactive （处理引用类型）
```js
import {reactive} from 'Vue'
setUp(){
  let obj = reactive({
    name:'sina',
    test_arr : ['a','b','c']
  }),
  function changeData(){
    this.obj.name = 'sina_change'
  },
}
```

## watch API 的用法
### case1
```js
  // 监听ref定义的一个响应式数据
  /**
   * @param {num/string} num
   * @param {funciton} callback
   * @param {object} config
   */
  watch(num , (newVal,oldVal) => {

  },{immediate:true})
```

### case2
```js
  // 监听ref定义的多个响应式数据
  watch([data1,data2], (newVal,oldVal) => {

  },{immediate:true})
```

### case3

```js
  // 监听reactive定义的一个响应式数据的全部属性
  watch(obj, (newVal,oldVal) => {
    // newVal改变，但oldVal也发生改变
    // 默认深度监听，配置deep失效
  },{immediate:true})
```

### case4

```js
  // 监听reactive定义的一个响应式数据的某一个属性
  // 箭头函数不能用{}包裹
  watch(()=>obj.num, (newVal,oldVal) => {
    // newVal改变，但oldVal也发生改变
    // 默认深度监听，配置deep失效
  },{immediate:true})
```

### case5

```js
  // 监听reactive定义的一个响应式数据的某些属性
  watch([()=>obj.num2,()=>obj.num2], (newVal,oldVal) => {},{immediate:true})
```

### case6
```js
  // 监听reactive定义的一个响应式数据的对象属性数据，此时配置deep监听有效,deep为false时不会被watch捕获
  funtion changeData(){
    obj.data.num++
  }
  watch(
    ()=>obj.data,
    (newVal,oldVal) => {},
    {immediate:true,deep:false}
  )
```
## watchEffect API 的用法
```js
// 使用的参数改变后就执行
watchEffect(()=>{
  let name = data1
  let name = data2
  console.log('data1与data2改变时执行');
})
```

## computed API
```js
// data1或data2改变时触发
let newData = computed(()=>{
  return data1+data2
})


// 可对数据进行处理
let newData = computed(()=>{
  get(){
    return data1+data2
  },
  set(){
    changeData = data1+data2+'string'
  }
})
```

## 钩子函数
---
### activated


### deactivated


## toRef与toRefs
---
`将非ref属性转化为ref属性`
```js
// 用法
let person = {
  name:'lisi',
  age:14
}
let name = toRef(person,'name')
// 只解析第一层，里面的还得解包获取
let name = toRefs(person)
```

## 其他API
---
### readOnly
**特点**
+ 返回原始对象的只读代理
+ 深度监听
### toRaw
**特点**
+ 代理原始对象，与原始对象相等
+ 取消了响应式，不会触发更改
```js
toRaw(reactive(name))===name //true
```

### markRaw
**特点**
+ 标志一个对象，使其永远不会转化为响应式
+ 包内属性依然可以被转化为Proxy

### shallowReactive与shallowReadOnly
+ 浅层次的响应式与只读，第一层