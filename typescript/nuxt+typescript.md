# nuxt中typescript的使用方式
## page界面中
+ script标签中使用lang="ts"
### data
`name:number = ''`
+ 属性定义必须有数据类型
+ 数据类型可以为自定义的接口类型
+ 数组类型声明也为Object
### methods
```js
  initBaseConfig(){
    getBaseConfig()
      .then(res => {
        (this as any).baseConfigInfo = res
      })
      .catch(err => {})
  }
```
+ this的使用，用断言防止报错
+ 参数必须定义类型


## api接口层
```js
export function uploadFirmware(data:object) {
  return request ({
    method:'post',
    url:'/upgrade',
    data:data
  })
}
```
+ 文件名为.ts
+ 有参数时必须声明参数类型