<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-09-05 08:52:04
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-09-05 14:21:16
 * @FilePath: \trent-blog\src\read\每天5分钟玩转docker.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
---
title: 每天5分钟玩转docker
tag: docker
---

## 第 2 章容器技术

### 什么是容器

- 容器是一种轻量级、可移植、自包含的软件打包技术，使应用程序可以在几乎任何地方以相同的方式运行。

- 容器由两部分组成：（1）应用程序本身；（2）依赖：比如应用程序需要的库或其他软件容器在 Host 操作系统的用户空间中运行，与操作系统的其他进程隔离

### Why——为什么需要容器

- 容器使软件具备了超强的可移植能力

### How——容器是如何工作的

1. Docker 架构

- Docker 的核心组件包括：
  - Docker 客户端：Client
  - Docker 服务器：Docker daemon
  - Docker 镜像：Image (ps:可将 Docker 镜像看成只读模板，通过它可以创建 Docker 容器。)
  - Registry (Registry 是存放 Docker 镜像的仓库，Registry 分私有和公有两种。)
  - Docker 容器：Container (Docker 容器就是 Docker 镜像的运行实例)

## 第 3 章 Docker 镜像

### 3.1.2 base 镜像

- base 镜像有两层含义：
  - 不依赖其他镜像，从 scratch 构建；
  - 其他镜像可以以之为基础进行扩展。
