# element-table 部分问题
> 双层表格
```js
// 指定子列表的字段名，hasChildren必须为true
:tree-props="{children:'ipcList', hasChildren: true}"
// 列表唯一主键，当没有可以区别的主键时，使用函数处理
:row-key="filterRowKey"

// methods
filterRowKey(row) {
  return row.type?row.id+'ipc':row.id
}
```