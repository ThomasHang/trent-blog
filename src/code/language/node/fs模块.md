# fs 模块

## 文件系统

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

## fs 模块 异步与同步

- 同步写入

```bash
fs.writeFileSync('./data.txt', 'test');

```

## fs 追加写入

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

# fs 流式写入

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
