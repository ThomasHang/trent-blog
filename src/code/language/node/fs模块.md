# fs 模块

## 一、文件写入

### writeFile 异步写入

- 需求：新建一个文件，座右铭.txt,写入内容，三人行,则必有我师焉

1、导入 fs 模块
2、写入文件

```bash
const fs = require('fs');

fs.writeFile('./座右铭.txt', '三人行,则必有我师焉', (err) => {
  //err 写入失败：错误对象 写入成功：null
  if (err) {
    console.log('写入失败');
    return;
  }
  console.log("写入成功")
});

```

### writeFileSync 同步写入

- 同步写入

```bash
fs.writeFileSync('./data.txt', 'test');

```

### appendFile/appendFileSync 追加写入

1、导入 fs 模块
2、调用 appendFile

```bash
const fs = require('fs');

fs.writeFile('./座右铭.txt', '三人行,则必有我师焉', (err) => {
  //err 写入失败：错误对象 写入成功：null
  if (err) {
    console.log('写入失败');
    return;
  }
  console.log("写入成功")
});

fs.appendFile('./座右铭.txt', ',择其善者而从之,其不善者而改之', (err) => {
  //   //err 写入失败：错误对象 写入成功：null
  if (err) {
    console.log('写入失败~');
    return;
  }
  console.log('写入追加成功');
});

fs.appendFileSync('./座右铭.txt', '\r\n温故而知新,可以为师矣');
```

### createWriteStream 流式写入

- 需求：观书有感.txt

```bash
# 1. 导入模块
const fs= require("fs")

# 2. 创建写入流
const ws = fs.createWriteStream('./观书有感.txt');

# 3. write
ws.write("半亩方塘一鉴开，")
ws.write("天光云影共徘徊。")
ws.write("问渠那得清如许？")
ws.write("为有源头活水来。")

# 4. 关闭通道
ws.close

# 结果：
# 半亩方塘一鉴开，
# 天光云影共徘徊。
# 问渠那得清如许？
# 为有源头活水来。
```

### 写入文件的场景

- 下载文件
- 安装文件
- 保存程序日志、如 git
- 编辑器保存文件
- 视频录制

`当需要持久化保存数据的时候，应该想到文件写入`

## 二、文件读取

### readFile 异步读取

fs.readFile(path,[option],callback)

参数说明：

- path 文件路径
- options 选项配置
- callback 回调函数

返回值 undefind

代码示例：

```bash


```

### readFileSync 异步读取

### createReadStream 异步读取
