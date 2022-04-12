# element-ui中的数据校验
> 常规校验

`prop&v-model&ruleItem 三个地方的字段应该完全一样，model字段应该跟绑定数据的对象一致`

template
```html
<!--  -->
<el-form :model="data">
  <el-form-item
    prop="type"
    label="类型"
  >
    <el-select v-model="data.type" clearable placeholder="请选择类型">
      <el-option
        v-for="(item,index) in typeList"
        :label="item.name"
        :value="item.id"
        :key="index"
      ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item
    prop="name"
    label="类型"
  >
    <el-input v-model="name">
    </el-input>
  </el-form-item>
</el-form>
```
js
```js
// 方法一（配置校验）validator字段
let data = [
  rules : [
    type: [
      {
        required: true,
        message: '算法包不能为空',
        trigger: 'blur'
      }
    ],
    name:[
      {
        validator:this.checkName,
        trigger:'blur'
      }
    ]
  ]
]


// 方法二（函数校验）
methods:{
  // 不用value是因为value值不一定是实时的当前数据
  checkName(rule,value,callback){
    if(this.data.name==null){
      return callback(new Error('姓名内容不能为空'))
    }else{
      return callback()
    }
  },
}
```