> Dockerfile(可以自定义名称)

```Dockerfile
FROM ubuntu:latest
RUN  apt-get update && \
         DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.9 python3-pip python3.9-dev
ADD test.py /
CMD ["python3","test.py"]
```

> FROM `基础镜像`
1. 基础镜像的选择，应体积小，适用并且选择固定版本

> RUN `执行命令`
1. 将多行命令放在一个RUN里面可减少打包的层数

> COPY与ADD:复制文件到镜像中
1. COPY index.js /app/index.js `复制app目录中的文件`
2. ADD index.zip /app/ `复制文件并解到app目录下`
*WORKDIR可以指定所有文件操作的根目录，当配合ADD使用时就是自动添加到某一目录下并解压*


> 参数
1. ENV: 指定dockerfile的全局变量，`使用:${name}`
*镜像基础信息中会包含此属性*
1. arg: 指定dockerfile的全局变量，`使用:${name}`
*镜像基础信息中不会包含此属性，打包时可以使用--build-arg更改dockerfile中的变量*

>CMD
1. 默认执行CMD命令