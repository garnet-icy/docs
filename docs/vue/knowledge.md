> vue动画
+ 标签transition、transition-group
+ class名 v-enter-active/v-leave-active，v-enter/v-leave，v-enter-to/v-leave-to（离开的动画，离开的起点，离开的终点）
+ animate.css `vue动画库`



> vue插槽
+ 作用域插槽，
  ```js
    <template scope="name">
      {{name}} // name就是作用域插槽传递信息
    </template>
  ```



> vuex
+ getters
对state中的数据进行处理后存储在getters中，使用时从getters中获取，可以全局使用

+ namespaced:true

+ vuex拆开
```js
  export default new Vuex.store({
    modules:{
      name:name
    }
  })
  // 使用
  this.$store.name.state.XXX
``` 
