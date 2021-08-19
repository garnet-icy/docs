> demo

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

+ `copy`:复制文件到镜像中
