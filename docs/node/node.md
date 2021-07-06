## <center>node简述</center>
> V8引擎
1. 浏览器使用import，而nodejs使用require
2. nodejs无DOM与BOM，V8引擎提供运行环境，DOM由浏览器提供
3. 其他浏览器引擎 fireFox:SpiderMonkey,Safair:JavascriptCore

> process
1. 不用引入
2. node环境的环境变量 process.env.NODE_ENV


> 导入与导出
1. module.exports xxx，将对象抛出，可以在另一个文件中直接引入对象
2. exports.xxx = xxx，作为抛出对象的一个属性抛出，被引入时引入的是含有所有被抛出对象的对象