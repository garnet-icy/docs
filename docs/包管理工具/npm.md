## <center>npm (Node Package Manager)</center>


> npm 与 npx

```
  npx是npm的高级版本
  简化了npm命令的复杂度
```
> npx优点
1. 避免全局安装，可临时安装依赖包，部分只使用一次的依赖包可使用npx，避免污染全局
2. 执行路径更简单，自动加载node_modules中依赖包，不用指定$PATH
3. 特殊参数 --no-install 强制使用本地模块， --ignore-existing 忽略本地使用远程包
4. 使用非当前版本的node，npx node@x.xx -v
5. 执行github源码 ```npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32```，远程代码必须是一个模块，即必须包含package.json和入口脚本。
