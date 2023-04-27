<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-03-30 13:39:34
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-04-27 18:34:44
 * @FilePath: \trent-blog\docs\work\gitlab_ci.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
注册流程

```bash
# 进入容器
docker exec -it 2cf383d71a08 /bin/bash

# 注册
gitlab-runner register

docker restart

# 配置存储路劲


# 进入groot路径
cd /opt/dockerfile/groot
# 重新打包
docker build -t node:groot .

```
