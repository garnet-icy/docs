> 数组
+ vue对数组的双向绑定是通过包裹数组的原生方法实现的，先调用数组原生方法，然后重新解析模板重新渲染


> vue过滤器（可以多个）
{{ time | <methods:filterName> }}

filters:{
  filterName(){
    do...
  }
}


> v-pre （跳过编译直接显示，建议在固定内容的节点添加，优化编译速度）


> vue自定义指令
+ 自定义指令的钩子函数
```js
  directive:{
    name(el,bind){
      // el:HTMLElement
      // bind:绑定值
      // bind.value
      /**
       * 指令所在模板被重新解析时调用
       */
    }
  }
```

> 路由守卫
+ 路由钩子函数
```js
  1、全局钩子函数（beforeEach、afterEach) //所有路由跳转使用 router.beforeEach(()=>{})

　2、路由独享的钩子函数（beforeEnter）//单个路由内使用，无后置路由守卫

　3、组件内钩子函数（beforeRouterEnter、beforeRouterUpdate、beforeRouterLeave）//单个组件内检测到
```