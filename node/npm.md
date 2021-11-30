## <center>npm (Node Package Manager)</center>

**node.js标准的软件包管理工具**

> npm 与 npx

```
  npx是npm的高级版本
  简化了npm命令的复杂度
```
> npx
1. 避免全局安装，可临时安装依赖包，部分只使用一次的依赖包可使用npx，避免污染全局
2. **执行路径更简单，自动加载node_modules中依赖包，不用指定$PATH**
3. 特殊参数 --no-install 强制使用本地模块， --ignore-existing 忽略本地使用远程包
4. 使用非当前版本的node，npx node@x.xx -v
5. 执行任意url源码 `npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32`，远程代码必须是一个模块，即必须包含package.json和入口脚本。




> npm命令
1. npm i xxx --save   `下载到node_modules中，写入package.json的dependencies中`
2. npm i xxx --save-dev   `下载到node_modules中，写入package.json的devDependencies中`
3. npm i xxx   `下载到node_modules中，不写入package.json`
4. npm update  `更新npm`
4. npm update *package-name*  `更新package包`

> devDependencies与dependencies的区别

  1. devDependencies:开发环境依赖，比如webpack等打包时需要的工具

  2. dependencies:生产环境依赖，比如axios、jQuery等项目运行时需要的工具

  3. 如果我们只是单纯的做项目，那么我们可简单地认为生产环境和开发环境做为一种友善的提示，实质没有什么区别；但是，如果在发布npm包的时候，两种环境安装方式是有很大区别的！！！


  4. 在发布npm包的时候，本身dependencies下的模块会作为依赖，一起被下载；devDependencies下面的模块就不会自动下载了；但对于项目而言，npm install 会自动下载devDependencies和dependencies下面的模块。


> npm 对安装包的优化
1. 安装位置

    `npm install` : node_modules

    `npm install -g` : 全局的位置

    `npm root -g` : 查看全局安装保存的位置


> 安装可执行文件

安装可执行文件后，会在node_modules中添加.bin文件夹，可用`./node_modules/.bin/<package-name>`命令执行，也可使用`npx <package-name>`执行，`npx cowsay -l`查看cowsay可用命令


> package.json
1. 依赖版本为`~1.1.1`时，可能会安装`1.1.2`
2. 依赖版本为`^1.1.1`时，可能会安装`1.1.2`与`1.2.0`,向上补充
1. 依赖版本为`1.1.1`时，只能安装`1.1.1`

> package-lock.json
1. 包含下载包的所有依赖项信息，package.json没有依赖的详细信息
2. 当使用npm update时，文件中的依赖版本也会更新
3. 修正package.json中的问题，固化版本


> 查看当前项目依赖的版本
1. `npm list -g` 全局依赖的版本
2. `npm list --depth=0` 顶层依赖
3. `npm list <package-name>`或`npm view <package-name> version` 查看包版本
3. `npm view <package-name> versions` 查看包历史版本