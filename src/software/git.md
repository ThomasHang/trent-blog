---
date: 2023-11-17
title: git 常用指令
tag: git
---

### 查看

- 工作区的状态：git status
- 查看修改内容：git diff

### 版本回退

- git reset --hard HEAD^

### 历史

- 查看提交历史：git log

- 查看命令历史 git reflog

### 分支

- 查看分支: git branch

- 创建分支: git branch `name`

- 切换分支: git checkout `name`

- 创建+切换分支: git checkout -b `name`

- 合并某分支到当前分支: git merge `name`

- 删除分支: git branch -d `name`

### 暂存

- 暂存：git stash ，回到现场 git stash pop 或者 git stash apply

### tag

- 命令 git push origin `tagname` 可以推送一个本地标签；

- 命令 git push origin --tags 可以推送全部未推送过的本地标签；

- 命令 git tag -d `tagname` 可以删除一个本地标签；

- 命令 git push origin :refs/tags/`tagname` 可以删除一个远程标签。
