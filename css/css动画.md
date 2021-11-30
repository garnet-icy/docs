## 浏览器渲染过程
[参考链接](https://juejin.cn/post/6844904116406190093)
1. HTML --> HTML树
1. CSS --> CSS树
1. HTML树 + CSS树 --> 渲染树
1. layout布局（文档流、盒模型、大小位置等）
1. Paint 文字，边框，阴影
1. Composite合成，展示画面

##  transform动画 （不支持内联元素）
> rotate（旋转）
```css
/* rotate 旋转 */
.name{
  /* 顺时针半圈 */
  transform: rotate(0.5trun);

  /* 逆时针半圈 */
  transform: rotate(-0.5trun)

  /* 顺时针度数 */
  transform: rotate(90deg)

  /* 逆时针度数 */
  transform: rotate(-90deg)
}
```

> matrix （矩阵）