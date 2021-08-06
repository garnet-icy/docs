## 使用electron-forge初始化一个项目
1. npm i -g electron-forge
2. electron-forge init vue-project --template=vue
3. yarn start 启动项目
4. 报错required is not defined
5. 增加配置
  ```json
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  ```
