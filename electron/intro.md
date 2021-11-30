## 打包配置
1. 安装 electron-packager
2. script中配置打包命令
  ```json
    "make": "electron-packager ./ electron-quick-start（项目名） --platform=win32 --arch=x64 --out=./dist  --app-version 1.0.0 --overwrite --icon=./myicon.ico"
    // 图标名称，入口文件夹，出口文件夹，图标，项目名称
  ```

1. 安装electron-forge
2. npm run start
3. 具体问题参见[log.md](log.md)
4. package.json electronPackageConfig配置项


## 渲染进程与主进程

> 主进程：main.js
+ 一个electron应用只有一个主进程
+ 一个页面就是一个渲染进程
