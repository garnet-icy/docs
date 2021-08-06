## <center>记录打包错误和解决办法</center>

**electron-forge**



1. npm run make(electron-forge make) 打包报错Cannot find the package "electron".
```
  npm uninstall electron
  cnpm install electron
  npm run make
```
2. 报错 An unhandled rejection has occurred inside Forge
3. 删除 node_modules
```
  cnpm install
  npm run make
```