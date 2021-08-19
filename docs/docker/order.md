> 镜像的增删改
```bash
docker container run <image name>  #新建容器

docker container ls  #查看正在运行的容器

docker container ls -a  #查看所有的容器

docker container stop <name/id>  #停止容器

docker container ps -qa #查看所有的容器id

docker container stop $(docker container ps -qa)  #批量停止容器

docker container rm <name/id>  #删除容器

docker container rm $(docker container ps -qa)  #批量删除容器

docker container rm <name/id> -f  #强制删除正在运行的容器

docker system prune -f #清除不使用的镜像
```

> docker端口映射
```bash
# 本地端口:容器端口
docker container run -p 80:80 <name>
```

> attached与detached模式
1. attached模式在前台运行，运行时此窗口不能进行其他操作。detached模式在后台运行
```bash
docker run -d -p 80:80 nginx  #触发detach模式
docker container logs <id/name> #detach模式下查看log
docker container logs -f <id/name> #detach模式下持续打印log
```


> 容器的交互模式（容器支持交互时）
1. 退出交互时是否退出容器（以Ubuntu为例子）

    ```bash
    docker container run -it ubuntu sh  #退出会停止容器
    docker exec -it ubuntu sh  #退出不会停止容器

    exit  #退出
    ```



> 镜像
```bash
docker image  #查看image参数
docker image inspect <name/id>  #查看镜像信息
docker image rm <name/id>  #删除镜像
docker image pull <imageName>  #拉取镜像
docker image save busybox:latest -o mybusybox.image  #导出镜像的配置，busybox:latest是镜像名称+版本号， -o代表输出，mybusybox.image是导出后镜像的名字。
docker image load -i <url>  #导入镜像
```


> 创建自己的镜像
```bash
#目录下要包含Dockerfile文件和要创建镜像所依赖的文件
docker image build -t <name> <path> #第一次执行时间较长
docker run <name>
```


> 上传dockerhub
1. 更改命名规则，名称为 `dockerId/imageName`

    docker image tag `oldName newName`

2. 上传

    docker login
    docker image push `imageName`