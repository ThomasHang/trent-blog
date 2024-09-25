---
date: 2023-11-17
title: Git
tag: git
icon: git
---

- [官网地址](https://git-scm.com/)

### 查看

- 工作区的状态：git status
- 查看修改内容：git diff

### 版本回退

- git reset --hard HEAD^

### 历史

- 查看提交历史：git log
- 查看命令历史：git reflog

### 分支

- 查看分支：git branch
- 创建分支：git branch `name`
- 切换分支：git checkout `name`
- 创建+切换分支：git checkout -b `name`
- 合并某分支到当前分支：git merge `name`
- 删除分支：git branch -d `name`

### 暂存

- 暂存：git stash
- 恢复暂存：git stash pop 或 git stash apply

### 标签

- 推送一个本地标签：git push origin `tagname`
- 推送全部未推送过的本地标签：git push origin --tags
- 删除一个本地标签：git tag -d `tagname`
- 删除一个远程标签：git push origin :refs/tags/`tagname`

### 撤销操作

- 撤销最近的合并（未 push）：git reset --hard HEAD~1
- 撤销已 push 的合并：git revert -m 1 `merge-commit-hash`
- 撤销最后一次提交（保留更改）：git reset HEAD~1
- 撤销最后一次提交（丢弃更改）：git reset --hard HEAD~1

### 远程仓库操作

- 添加远程仓库：git remote add origin `repository-url`
- 查看远程仓库：git remote -v
- 从远程仓库拉取：git pull origin `branch-name`
- 推送到远程仓库：git push origin `branch-name`

### 配置

- 设置全局用户名：git config --global user.name "Your Name"
- 设置全局邮箱：git config --global user.email "your.email@example.com"
- 查看配置：git config --list

### 忽略文件

- 创建 .gitignore 文件来指定要忽略的文件和目录

### 别名

- 设置别名：git config --global alias.`shortcut` `command`
  例如：git config --global alias.co checkout

### 修改最后一次提交

- 修改最后一次提交信息：git commit --amend
- 向最后一次提交添加文件：git add `file` && git commit --amend --no-edit

### 查看文件历史

- 查看特定文件的修改历史：git log -p `file`
- 查看谁修改了文件的哪一行：git blame `file`

### Cherry-pick

- 将指定的提交应用到当前分支：git cherry-pick `commit-hash`
- 将多个提交应用到当前分支：git cherry-pick `commit-hash1` `commit-hash2`
- 在 cherry-pick 时不自动提交：git cherry-pick -n `commit-hash`
- 解决冲突后继续 cherry-pick：git cherry-pick --continue
- 放弃当前的 cherry-pick 操作：git cherry-pick --abort
