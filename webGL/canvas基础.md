# canvas基础
**前置**

**canvas**: canvas DOM节点。

**ctx**: canvas 上下文。

**x**: 横向距离。

**y**: 纵向距离。


>画布配置
```js
// Canvas 2D API 通过清空子路径列表开始一个新路径的方法，开启一个新路径
ctx.beginPath()
// 绘制当前或已经存在的路径的方法，绘制
ctx.stroke()
// 从当前点到起始点绘制一条直线，如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作
ctx.closePath()

// 将当前状态放入栈中，保存 canvas 全部状态的方法
ctx.save()

// 还原到上次保存的状态
ctx.restore()
```


> 上下文配置
```js
// 线宽
ctx.lineWidth = 10
// 画笔颜色
ctx.strokeStyle = '#ccc'
// 填充颜色
ctx.fillStyle = 'red'
```


> 操作
```js
// 画点x，本质是填充一个矩形
ctx.fillRect(x,y,left,right)

// 画矩形
ctx.strokeRect(x,y,width,height)

// 填充文字
ctx.font = "number"


top
文本基线在文本块的顶部。
hanging
文本基线是悬挂基线。
middle
文本基线在文本块的中间。
alphabetic
文本基线是标准的字母基线。
ideographic
文字基线是表意字基线；如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。
bottom
文本基线在文本块的底部。 与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。

ctx.textBaseLine = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom"

// 文本描边 x,y起始点
ctx.strokeText(text,x,y,[maxWidth])
// 文本填充 maxWidth最大宽度，会自适应缩小
ctx.fillText(text,x,y,[maxWidth])

// fill填充，填充当前或已存在的路径的方法
/**
 * path:要填充的路径 ，使用new Path2D对象创建
 * let path1 = new Path2D
 * fillRule:填充规则
 * 1. 非零环绕：闭合区域预设每条线端的闭合方向，任意一点穿过曲线，右侧穿过+1，左侧穿过-1，和不为零时填充此区域
 * 2. 奇偶环绕：任意一点穿过曲线，穿过次数为N，N为奇数时填充此区域
 */
ctx.fill(path, fillRule)


//画线
ctx.moveTo(x,y)
ctx.lineTo(x,y)
```
