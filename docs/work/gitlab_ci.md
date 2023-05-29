# 注册流程

```bash
# 进入容器
docker exec -it 2cf383d71a08 /bin/bash

# 注册
gitlab-runner register

http://192.168.1.11/
docker restart

# 配置存储路劲


# 进入groot路径
cd /opt/dockerfile/groot
# 重新打包
docker build -t node:groot .

```
/srv/gitlab-runner/

<!-- 配置ssh -->

ssh-copy-id -i ~/.ssh/id_rsa.pub root@xxx.xx.xx.xx 配置地址
