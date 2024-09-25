---
date: 2024-09-25
title: gitlab ci 配置
tag: gitlab
# icon: git
---

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
2. 也可以把下面的命令保存到一个.sh 结尾的脚本里，然后 sh xxx.sh 运行该文件

::: code-tabs#shell

@tab 运行

```bash
docker stop webgis
docker rm webgis
docker build -t webgis:(自定义版本号) .
docker run --name webgis -p 10088:80 -itd webgis:(自定义版本号，前后两个一样)

```

@tab 打包

```bash
docker build -t enbo:latest .
docker save -o /opt/server/docker_front/enbo-res/(自定义名称).tar enbo:latest

```

:::

## 目前项目中实现了代码推送通知 打包 部署 部署路径通知

```yml
image: node:groot

variables:
  pro_upload_path: /mnt/enbo-groot/
  images: $CI_COMMIT_REF_NAME
  author: $CI_COMMIT_AUTHOR
  message: $CI_COMMIT_MESSAGE
  description: $CI_COMMIT_DESCRIPTION

stages:
  - notify-update
  - build
  - deploy
  - notifiy

cache:
  paths:
    - node_modules/
    - ~/.cache/yarn
notify_info:
  stage: notify-update
  script:
    - 'curl -H "Content-type: application/json" -d "{\"msgtype\":\"markdown\", \"markdown\": {\"title\":\"代码推送提醒\", \"text\":\"资源管理平台\n > ${author} push to $CI_COMMIT_BRANCH\n > ${message} ${description}\"}}" "https://oapi.dingtalk.com/robot/send?access_token=${dingding_token}"'

deploy_to_build:
  stage: build
  only:
    - tags
    - develop
    - test
    - feature-docker
  script:
    - yarn

# 正式环境部署
deploy_to_master:
  stage: deploy
  only:
    - tags
  script:
    - cd src/utils/
    - nameVersion=$(echo $CI_COMMIT_SHA | cut -c1-6)
    - sed -i "1s~.*~const commitVersion=\"$nameVersion\"~" index.js
    - cd ..
    - cd ..

    - CI=false npm run build
    - mkdir no_web
    - mkdir has_web
    - cp -r build/* no_web
    - cp -r build/* has_web
    - rm -rf no_web/web
    - rm -rf build
    - mkdir $images
    - mv has_web $images
    - mv no_web $images
    - tar -czvf $images.tar.gz $images
    - cp -r $images.tar.gz $pro_upload_path

# local环境部署
deploy_to_dev_server:
  stage: deploy
  script:
    - cd src/utils/
    - nameVersion=$(echo $CI_COMMIT_SHA | cut -c1-6)
    - sed -i "1s~.*~const commitVersion=\"$nameVersion\"~" index.js
    - cd ..
    - cd ..

    - export PROJECT_VERSION=$(node -pe "require('./package.json').version")
    - CI=false npm run build
    - scp -o StrictHostKeyChecking=no -r ./build root@$dev_host:/opt/server/docker_front/enbo-res
    - ssh -o StrictHostKeyChecking=no root@$dev_host "cd /opt/server/docker_front/enbo-res&&rm -rf enbo && mv build enbo && docker stop enboweb && docker rm enboweb && docker build -t enbo:$PROJECT_VERSION .&& docker run --name enboweb -p 9083:80 -itd enbo:$PROJECT_VERSION"
  rules:
    - if: '$CI_COMMIT_BRANCH == "develop"'
      when: on_success

# test环境部署
deploy_to_test_server:
  stage: deploy
  script:
    - cd src/utils/
    - nameVersion=$(echo $CI_COMMIT_SHA | cut -c1-6)
    - sed -i "1s~.*~const commitVersion=\"$nameVersion\"~" index.js
    - cd ..
    - cd ..

    - export PROJECT_VERSION=$(node -pe "require('./package.json').version")
    - CI=false npm run build
    - scp -o StrictHostKeyChecking=no -r ./build root@$test_host:/opt/server/docker_front/enbo-res
    - ssh -o StrictHostKeyChecking=no root@$test_host "cd /opt/server/docker_front/enbo-res&&rm -rf enbo && mv build enbo && docker stop enboweb && docker rm enboweb && docker build -t enbo:$PROJECT_VERSION .&& docker run --name enboweb -p 9083:80 -itd enbo:$PROJECT_VERSION"
  rules:
    - if: '$CI_COMMIT_BRANCH == "test"'
      when: on_success

# 正式环境通知
deploy_to_notifiy:
  stage: notifiy
  only:
    - tags
  script:
    - 'curl -H ''Content-type: application/json'' -d ''{"msgtype":"text", "text": {"content":"资源管理平台正式包已更新完成,请前往该路径\\\\192.168.1.6\\enbo\\项目发布包\\资源管理平台\\gis-主分支"}}'' https://oapi.dingtalk.com/robot/send?access_token=$dingding_token'

# local环境通知
deploy_to_dev_notifiy:
  stage: notifiy
  script:
    - 'curl -H ''Content-type: application/json'' -d ''{"msgtype":"text", "text": {"content":"资源管理平台local已更新"}}'' https://oapi.dingtalk.com/robot/send?access_token=$dingding_token'
  rules:
    - if: '$CI_COMMIT_BRANCH == "develop"'
      when: on_success

# test环境通知
deploy_to_test_notifiy:
  stage: notifiy
  script:
    - 'curl -H ''Content-type: application/json'' -d ''{"msgtype":"text", "text": {"content":"资源管理平台test已更新"}}'' https://oapi.dingtalk.com/robot/send?access_token=$dingding_token'
  rules:
    - if: '$CI_COMMIT_BRANCH == "test"'
      when: on_success
```
