<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-08-02 15:34:23
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-10-18 17:38:04
 * @FilePath: \trent-blog\src\work\gitlab_ci.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# gitlab 注册流程

```bash
# 进入容器
docker exec -it 2cf383d71a08 /bin/bash

# 注册
gitlab-runner register

http://192.168.1.11/

# 再输入对应的key

# 重启容器
docker restart


# 配置ci config
/srv/gitlab-runner/

# 配置存储路劲

```

## 更新 docker 容器

```bash
# 进入groot路径
cd /opt/dockerfile/groot
# 重新打包
docker build -t node:groot .
```

## node 镜像中假如需要运行 docker 命令的话

- 在当前 node 镜像中安装 docker(不推荐)
- 在 gitlab ci 配置文件中加入 映射 docker
- 换成 docker 镜像 然后安装 node

## gitlab-ci 中遇到 ci 报错，容器已经删了的情况，

- docker run --name webgis_old -itd enbo:RES_dev-sz-lg
- docker run --name 需要启动的容器名 -itd 现有的容器

## 运行容器

- docker run -d --name <容器名称> <镜像名称>

## 遇到需要修改前端配置文件的情况

- docker cp <本地文件路径> <容器名称>:<目标容器路径>
- docker cp /opt/server/docker_front/enbo-res/enbo/web enboweb:/usr/share/nginx/html/enbo/

## 验证文件是否成功拷贝

- docker exec -it <容器名称> ls <目标容器路径>

## 自定义 sh 安装和打包文件

1. 可以选择一步步敲命令
2. 也可以把下面的命令保存到一个.sh结尾的脚本里，然后sh xxx.sh 运行该文件

::: code-tabs#shell

@tab 运行

```bash
docker stop webgis
docker rm webgis
docker build -t webgis:1.4.2 .
docker run --name webgis -p 10088:80 -itd webgis:1.4.2

```

@tab 打包

```bash
docker build -t enbo:latest .
docker save -o /opt/server/docker_front/enbo-res/(自定义名称).tar enbo:latest

```

:::
