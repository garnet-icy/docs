# getBoundingClientRect API

**说明**：获取元素左顶点、各个边距离浏览器显示范围的距离，用于监听元素是否在显示范围内
```js
// 包含的内容
let bound = {
  bottom: 832
  height: 802
  left: 900.5
  right: 1002.5
  top: 30
  width: 102
  x: 900.5
  y: 30
}
```

# IntersectionObserver (交叉观察器)

```html
<div class="box"></div>
<div class="box"></div>
```
```js
// [div.box, div.box]
// Array.form 将类数组对象转化为数组对象
/**
 * {
 *
 * }
 * /

let domArray = Array.from(document.querySelectorAll('div'))


```