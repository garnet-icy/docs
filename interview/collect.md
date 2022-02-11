# 杂七杂八的题目的答案总结
## webpack与vite

`的区别，vite的原理，webpack迁移到vite的问题`

1. [区别](../vue/vue3/vite.md)
2. 迁移问题：

## js内存的存储

### AO
js底层存储数据的地方叫关联数组，是一个类似于对象的结构，通过键值对保存
局部变量会存储在函数作用域AO(actived Object)中
全局变量保存在window对象中

```
var a = 1
window.a = 1
```

### let const var 的区别
两者的区别，var定义的值可以在window中找到，但不能使用delete window.a 删除
![avatar](../image/image/内存.png)


## 微前端

[微前端框架-qiankun](https://github.com/umijs/qiankun)

`一种将独立的前端应用组成一个更大的整体的架构风格，将大的问题微小化`

**解决的问题**

1. 更方便的增量升级
1. 简单解耦的代码依赖，更容易维护
1. 可以独立部署，快速卸载
1. 垂直组建，各司其职

### web comonent规范

[web component官方文档](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

1. 模板元素（templete,slot）
    + 模板中的内容默认是不加载的，它不在DOM结构中，需要手动加载
    + 可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用
    ```js
    // 获取父元素div
    var container=document.querySelector('#container1');
    // 获取模板元素
    var tmpl=document.querySelector('#template1');
    // 父元素挂载模板，true表示深拷贝
    container.appendChild(tmpl.content.cloneNode(true));
    ```
2. shadow DOM（影子DOM）

    `宿主元素可以用:host选择器来选择`
    ```js
    // 获取已有节点
    var host=document.querySelector('#host1');
    // 创建影子节点
    var shadowRoot=host.createShadowRoot();
    // 填充影子节点
    shadowRoot.innerHTML='hello';
    ```
3. HTML import（嵌入外部文档）

    `依赖浏览器支持HTML import特性`
    ```html
    <link id="link1" rel="import" href="fileName.html" >

    <div id="container1"></div>
    ```
    ```js
    var container=document.querySelector('#container1');
    var externalDocument=document.querySelector('#link1').import;
    // ...获取所有元素
    container.appendChild(externalDocument.querySelector('...').cloneNode(true));
    ```

4. 自定义元素
    ```js
    // 创建元素
    var element = object.create(HTMLElement.prototype)
    Object.defineProperty(element,'title',{
      writable:true
    })
    // 创建生命周期方法
    element.createCallback = function(){

    }
    // 注册新元素
    // document.registerElement方法可以向文档注册元素
    let newEl = element.registerElement('new-el',{
      // 原型为新创建的元素
      prototype:element,
      // 可以继承自新创建的元素或者一个原生元素
      extends:'span'
    })

    // 使用
    // 方法1，直接使用
    <new-el></new-el>
    // 方法2，插入body中
    let newElElement = new newEl()
    newElElment.innerHTML = '<h1>内容</h1>'
    document.body.appendChild('newElElEment')
    // 方法3，当继承自某一元素时的使用方法（is属性），与方法一效果相同，也会触发生命周期函数
    <span is="new-el"></span>
    ```
5. css选择器（用于上面几种方法的选择器）

    `Shadow DOM是:host的伪元素，而不是子元素，因此:host::shadow中间不能加空格`
    ```css
    /* 自定义元素加入到DOM之前是有一个resolve过程，过程中可以加入提示文字 */
    my-name:unresolved::after{
        content:'Registering Element ...';
        color:red;
    }
    :host shadowDOM 的宿主元素
    :host::shadow 获取shadowDOM 伪元素
    :host::content 获取content 伪元素
    ```
6. 备注：关于CSS的单双冒号问题

    `单双冒号是为了区分伪类与伪元素，双冒号是CSS3之后的，如果要全部兼容还是单冒号双冒号都用，双冒号是CSS3对伪元素的规定`

    **伪类**：为选择器加上特殊效果（:active,:hover等，是对应的选择器的某一种特殊状态）

    **伪元素**：将特殊效果添加到选择器上（:before,:after等，为选择器前后增加内容或特殊样式）


## js垃圾回收机制
### 标记清除

### 引用计数
