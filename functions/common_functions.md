> 数组数据每四个形成一个新数组
```js
let originArr;
let allArr =[]
let newArr =[]
for (let i = 1; i <= originArr.length; i++) {
  // 每当index为4的倍数时，往新数组里push临时数组的值，然后清空临时数组
  newArr = newArr.concat(originArr[i - 1])
  if (i % 4 == 0) {
    allArr.push(newArr)
    newArr = []
  }
}
return newArr;
```