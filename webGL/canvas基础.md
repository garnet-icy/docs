# canvas基础
**前置**

**canvas**: canvas DOM节点。

**ctx**: canvas 上下文。

**x**: 横向距离。

**y**: 纵向距离。


>画布配置
```js
// 
ctx.beginPath()
```


> 上下文配置
```js
// 线宽
ctx.lineWidth = 10
```


> 操作
```js
// 画点x，本质是填充一个矩形
ctx.fillRect(x,y,left,right)

// 画矩形
ctx.strokeRect(x,y,width,height)

//画线
ctx.moveTo(x,y)
ctx.lineTo(x,y)
```
