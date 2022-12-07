> 系统信息
```bash
cat /etc/issue  #查看系统信息
```




> 安装php7.3
```bash
  sudo apt-get install software-properties-common
  sudo add-apt-repository ppa:ondrej/php
  sudo apt-get update
  sudo apt-get install -y php7.3
  sudo apt-get install -y php7.3-fpm (使用service管理服务)

  php -v #测试
```

> php安装依赖
```bash
  # 查看当前依赖
  php -m
  # 安装依赖
  apt-get install php7.3-xxx

  # 查看php.ini文件位置
  php --ini


  # 备注：在php.ini中注释或者下载，也不知道哪个好使
```


> 安装apache
```bash
  # 安装
  apt update
  apt install apache2
  # 防火墙
  ufw app list
  ufw allow "apache"
  ufw status
  # 检查web服务器
  systemctl status apache2

  # 重启
  service apache2 restart
  # 更改apache默认路径
  /etc/apache2/sites-available  000-default.conf --> DocumentRoot与VirtualHost
  /etc/apache2 --> ports.conf配置监听的端口
```




> php与apache的位置
```bash
  php:"etc/php/7.3/cli/php.ini"
  apache:"etc/apache2/apache.conf"
```



> nginx
```bash
  # 启动
  /etc/init.d/nginx start
  # 重启
  nginx -s reload
  # 退出
  nginx -s quit
  # 查看进程
  ps -ef|grep nginx
  # 杀掉进程
  kill -QUIT 527
```


> 服务器配置
```bash
chmod 777 discuz #更改权限，777可写
```





> mysql配置
```bash
  # 查看mysql状态（是否是启动中）
  systemctl status mysql
  # 登录，回车后再输入密码
  mysql -u username -p
  # 设置root用户可以在任意ip登录
  update user set host="%" where user = 'root';
  # 退出mysql
  quit
```



## linux命令
```bash
service --status-all #查看所有服务

```



## docker安装discuz
### 拉取
+ docker pull ccr.ccs.tencentyun.com/discuzq/dzq:latest
### 映射端口
+ docker run -d -p 8080:80 -p 443:443 ccr.ccs.tencentyun.com/discuzq/dzq:latest
### 注意点
数据库用户名&&密码必须为root

[docker安装discuz](https://www.cnblogs.com/weblm/p/15002058.html)