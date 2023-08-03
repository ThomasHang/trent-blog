<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-08-02 15:34:23
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-08-02 15:34:29
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

## 配置 ssh 长连接

- ssh-copy-id -i ~/.ssh/id_rsa.pub root@xxx.xx.xx.xx 配置地址
  

## node 镜像中假如需要运行docker 命令的话
- 在当前node 镜像中安装docker(不推荐)
- 在gitlab ci 配置文件中加入 映射docker
- 换成docker 镜像 然后安装node




## gitlab-ci 中遇到ci报错，容器已经删了的情况，
- docker run --name webgis_old -itd  enbo:RES_dev-sz-lg  
- docker run --name 需要启动的容器名 -itd 现有的容器    

