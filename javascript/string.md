> 截取字符串
1. string.slice(start,end)  // 下标，start为负数时反向，end可选
1. string.substr(start,length)  // 下标与长度，start为负数时反向，length可选
1. string.substring(from,to)  // 下标，start为负数时返回整串，length可选，返回结果包含from，不包含to


> 重复
1. repeat(n) // 返回字符串重复n次

> 正则方法
```js
  replace(searchVal,newVal) // 该方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
  let str = 'asdasdasd'
  str.replace("a", "z") // 输出结果：zsdasdasd
  str.replace(/a/g, "z") // 输出结果：zsdzsdzsd


  match(Regexp) //该方法用于在字符串内检索指定的值

  str = 'asdasd' //'asdasd'
  str.match(/a/) // ['a', index: 0, input: 'asdasd', groups: undefined]
```