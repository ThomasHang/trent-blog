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
//导入模块
const fs = require('fs');

fs.readFile('./观书有感.txt', (err, data) => {
  if (err) {
    console.log('读取失败');
    return;
  }
  console.log(data.toString())
});

```

### readFileSync 同步读取

```bash
//导入模块
const fs = require('fs');
let data = fs.readFileSync(./观书有感.txt)
console.log(data.toString())

```

### createReadStream 异步读取

### 读取文件的应用场景

- 电脑开机
- 程序运行
- 编辑器打开文件
- 查看图片
- 播放视屏
- 播放音乐
- git 查看日志
- 上传文件
- 查看聊天记录

### 文件流式读取

```bash
// 1.导入模块
const fs = require('fs');

// 2.创建读取流对象
let rs = fs.createReadStream('./观书有感.txt');

// 3.版定data事件 chunk 块儿 大块儿
rs.on('data', (chunk) => {
  console.log(chunk.length);
});

// 4. end可选事件
re.on('end', () => {
  console.log('读取完成');
});

```

### 练习 复制文件

文件大小 74.9MB,大文件流式效率高，小文件两个都差不多

- 方式一 readFile

```bash
const fs = require('fs');
const process= require("process")

// 读取文件内容
let data = fs.readFileSync('./观书有感.txt');
// 写入文件
fs.writeFileSync('./观书有感_2.txt',data);
console.log(process.memoryUsage()) // 消耗内存 100.57MB

```

- 方式二 流式操作

```bash
const fs = require('fs');
const process= require("process")
let rs = fs.createReadStream('./观书有感.txt');
// 创建写入流
const ws = fs.createWriteStream('./观书有感_3.txt', rs);
// 绑定data事件
rs.on('data', (chunk) => {
  console.log(chunk.length);
  ws.write(chunk);
});
console.log(process.memoryUsage()) // 消耗内存 39.05MB

//快速实现复制
re.pipe(ws)
```

## 三、文件重命名与移动

在 Node.js 中，我们可以使用`rename`或`renameSync`来移动或重命名`文件或文件夹`
语法：
fs.rename(oldPath,newPath,callback)
fs.renameSync(oldPath,newPath)

参数说明:

- oldPath 文件当前的路径
- newPath 文件新的路径
- callback 操作后的回调

代码示例：

```bash
const fs = require('fs');
fs.rename('./观书有感.txt', './观书有感呀.txt', (err) => {
  if (err) throw err;
  console.log("移动完成")
});
```

## 四、文件删除

在 Node.js 中，我们可以使用`unlink`或`unlinkSync`来删除文件

语法：
fs.unlink(path,callback)
fs.unlinkSync(path)

参数说明:

- path 文件路径
- callback 操作后的回调

代码示例：

```bash
const fs = require('fs');
fs.unlink('./观书有感呀.txt', (err) => {
  if (err) throw err;
  console.log("删除成功")
});

//调用rm方法 14.4 rmSync
fs.rm('./观书有感呀.txt', (err) => {
  if (err) throw err;
  console.log("删除成功")
});
```

## 五、文件夹操作

在 Node.js 中，我们可以使用`mkdir`或`mkdirSync`来创建文件夹

语法：
fs.mkdir(path,callback)
fs.mkdirSync(path)

参数说明:

- path 文件夹路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

```bash
const fs =require("fs")
fs.mkdir("./test",err=>{
    if(err){
        console.log("创建失败")
        return
    }
    console.log("创建成功")
})

// 递归创建
fs.mkdir('./a/b/c', {recursive:true},(err) => {
  if (err) {
    console.log('创建失败');
    return;
  }
  console.log("创建成功")
})

// 读取文件夹
fs.readdir('./test', (err,data) => {
  if (err) {
    console.log('读取失败');
    return;
  }
  console.log('读取成功');
  console.log(data,"sss")
});

// 删除文件夹
fs.rmdir('./test', { recursive: true }, (err) => {
  if (err) {
    console.log(err, 'sss');
    console.log('删除失败');
    return;
  }
  console.log('删除成功');
});

// 推荐使用rm
fs.rm('./a', { recursive: true }, (err) => {
    if (err) {
      console.log(err, 'sss');
      console.log('删除失败');
      return;
    }
    console.log('删除成功');
  });

```

## 六、查看资源状态

在 Node.js 中，我们可以使用`stat`或`statSync`来创建文件夹

语法：
fs.stat(path[,options],callback)
fs.mkdirSync(path[,options])

参数说明:

- path 文件夹路径
- options 选项配置(可选)
- callback 操作后的回调

代码示例：

```bash
const fs = require('fs');
fs.stat('./2021-05.pdf', (err, data) => {
  if (err) {
    console.log('操作失败');
    return;
  }
  console.log('操作成功');

  console.log(data);
// 检测是否是文件
  console.log(data.isFile());
// 检测是否是文件夹
  console.log(data.isDirectory());

});

```

## 七、相对路径问题
- 相对路径
  - `./座右铭.txt`当前目录下的座右铭.txt 
  - `座右铭.txt` 等效于上面的写法
  - `../座右铭.txt` 当前目录的上一级目录的座右铭.txt
- 相对路径
  -  `D:/Program Files` windows系统下的绝对路径
  -  `/usr/bin` Linx系统下的绝对路径

## 八、 __dirname

## 九、练习

批量改名
