## canvas处理图片
> canvas将图片处理为圆型
```js
// 函数
this.blackWhiteImageData.forEach((imageItem, index) => {
  let canvas = document.createElement('canvas')
  let context = canvas.getContext('2d')
  let img = new Image()
  img.src = this.baseURL + imageItem.photoUrl
  img.onload = () => {

    let _this = this
    // 正方形边长选短边
    let borderWidth = 20
    let length = img.width >= img.height ? img.height : img.width
    // canvas图片大小，图片+两个边长
    canvas.width = length
    canvas.height = length
    // 清理画布
    context.closePath()
    context.clearRect(0, 0, length, length)
    context.save()
    context.beginPath()
    // 中心点
    context.lineWidth = borderWidth
    context.strokeStyle =
      this.blackWhiteImageData[index].personType == 1 ? 'rgb(255,128,33)' : 'rgb(0,176,80)'
    context.arc(
      length / 2,
      length / 2,
      length / 2 - borderWidth / 2,
      0,
      Math.PI * 2,
      false
    )
    context.stroke()
    context.closePath()
    context.clip()
    context.drawImage(img, 0, 0, length, length)
    context.restore()
    // 循环中保存处理好的图片
    this.blackWhiteData[index][4] = canvas.toDataURL()
  }
})
```

## canvas根据点画框
```html
<canvas class="drawFrameInfoArea"
  @mousedown="handleMousedown"
></canvas>
```
```js
this.canvasArea = document.querySelector('.drawFrameInfoArea')
// 定义画线方法
drawLine(){
  // 使用beginPath防止清空画布后再出现之前的线条
  this.contextArea.beginPath()
  this.contextArea.moveTo(x1,y1)
  this.contextArea.lineTo(x2,y2)
  this.contextArea.closePath()
  this.contextArea.stroke()
}
handleMousedown(){
  // 找个空数组push点的数组
  this.coordArr.push([e.layerX,e.layerY])
  // 判断这是一个框的第几个点
  let point = this.coordArr.length%4
  // 保存数组length
  let length = this.coordArr.length
  switch(point){
    // 四的倍数的点
    case 0:
      if(this.coordArr.length!==0){
        // 连接第四个点与第三个点
        this.drawLine(this.coordArr[length-1][0],this.coordArr[length-1][1],this.coordArr[length-2][0],this.coordArr[length-2][1])
        // 连接第四个点与第一个点
        this.drawLine(this.coordArr[length-1][0],this.coordArr[length-1][1],this.coordArr[length-4][0],this.coordArr[length-4][1])
      }
      break;
    // 每个框的第一个点
    case 1:
      // 第一个点只需要画一个点
      this.contextArea.fillRect(e.layerX,e.layerY,2,2)
      break;
    case 2:
    // 连接第二个点与第一个点
      this.drawLine(this.coordArr[length-1][0],this.coordArr[length-1][1],this.coordArr[length-2][0],this.coordArr[length-2][1])
      break;
    case 3:
    // 连接第三个点与第二个点
      this.drawLine(this.coordArr[length-1][0],this.coordArr[length-1][1],this.coordArr[length-2][0],this.coordArr[length-2][1])
      break;
  }
}

```
