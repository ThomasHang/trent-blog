# 操作 buffer

### buffer 与字符串的转换

```bash
let buf_4= Buffer.from([105,108,111,118,101,121,111,117])

console.log(buf_4.toString())//默认使用utf-8
# iloveyou
```

### buffer 的读写 通过中阔号的方式 来读取写入 []

```bash
let buf= Buffer.from("hello")
# 读取单个元素查看，并转成二进制
console.log(buf[0].toString(2))
# 01101000

# 写入值
console.log(buf) #原先的值
# <Buffer 68 65 6c 6c 6f>
# 开始修改值
 buf[0]=95
 console.log(buf.toString())
#  _ello
```

### 溢出

- 8 个二进制位 存储的数据最大为 255

```bash
let buf= Buffer.from("hello")
buf[0]=361 #舍弃高位的数字

361 转成二进制 值为 0001 0110 1001
# 在node中为转成为
# 0001 0110 1001 => 0110 1001
```

### 中文

```bash
let buf= Buffer.from("你好")
console.log(buf)
# <Buffer e4 bd a0 e5 a5 bd>
```
