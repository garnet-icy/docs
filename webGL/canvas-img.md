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