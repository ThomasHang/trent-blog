# ssh 操作

## 配置 ssh 长连接

- ssh-copy-id -i ~/.ssh/id_rsa.pub root@xxx.xx.xx.xx 配置地址

### 1.客户端生成公私钥

- 本地客户端生成公私钥：（一路回车默认即可）

```bash
ssh-keygen
```

- 上面这个命令会在用户目录.ssh 文件夹下创建公私钥

```bash
cd ~/.ssh
ls
```

### 2.上传公钥到服务器

- 这里测试用的服务器地址为：192.168.235.22
- 用户为：root

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.235.22
```

- 上面这条命令是写到服务器上的 ssh 目录下去了

```bash
cd ~/.ssh
vim authorized_keys

```

- 可以看到客户端写入到服务器的 id_rsa.pub （公钥）内容。

### 3.测试免密登录

- 客户端通过 ssh 连接远程服务器，就可以免密登录了。

```bash
ssh root@192.168.235.22
```
