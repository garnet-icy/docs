# nginx配置下载文件

```conf
location /download {
    alias   C:/Users/ez_user/Desktop/IMG/SGAI;
    autoindex on;              #显示文件列表
    # autoindex_exact_size on; #显示文件确切大小
    # autoindex_localtime on;  #显示文件时间
}
```

# 其他命令
`windows nginx目录下`
```bash
 taskkill /F /IM nginx.exe  # 停止所有nginx服务
```