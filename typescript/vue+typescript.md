# vue2.0使用typescript

> 使用vue-property-decorator包整合typescript，

> api层
+ api层定义所有的接口需要的interface类型，在引用方法时一起导入，定义参数时声明此类型


> page
+ .vue文件中使用public/private定义私有和共有变量
```json
{
  "public":"可以被其他组件调用的方法",
  "private":"只能在组件内使用的方法"
}
```
+ 监听的使用
```js
// 引入
import { Watch } from 'vue-property-decorator'

// 使用
@watch('height')
private watchHeight(newVal:string){
  console.log(newVal);
}

```

+ 子组件的引入
```js
// 引入
import { Component } from 'vue-property-decorator'

// 使用
@Component({
  name: 'MarkdownEditor'
})
```


+ Prop参数的传递
```ts
// 引入
import { Prop } from 'vue-property-decorator'

// 使用
// ! 表示name的非null/undefined校验，必须加
@Prop({require:true}) private name!:string
```
