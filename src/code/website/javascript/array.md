---
title: 数组
author: trent
date: 2024-11-18 23:11:12
---

## 添加/删除元素

1. push()

向数组末尾添加一个或多个元素，返回新数组的长度。

```js
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

2. pop()

移除数组最后一个元素，返回该元素。

```js
let arr = [1, 2, 3];
arr.pop(); // [1, 2]
```

3. unshift()

数组开头添加一个或多个元素，返回新数组的长度。

```js
let arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
```

4. shift()

移除数组第一个元素，返回该元素。

```js
let arr = [1, 2, 3];
arr.shift(); // [2, 3]
```

5. splice(start,deleteCount,...items)

`splice 方法会改变原始数组。`

添加、删除或替换元素。

- 删除元素

```js
let myArray = [1, 2, 3, 4, 5];
let removed = myArray.splice(1, 2); // 从索引1开始，删除2个元素
console.log(myArray); // 输出: [1, 4, 5]
console.log(removed); // 输出: [2, 3]
```

- 添加元素

```js
let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 0, 'a', 'b'); // 从索引2开始，不删除任何元素，插入'a'和'b'
console.log(myArray); // 输出: [1, 2, 'a', 'b', 3, 4, 5]
```

- 替换元素

```js
let myArray = [1, 2, 3, 4, 5];
myArray.splice(1, 2, 'x', 'y'); // 从索引1开始，删除2个元素，并插入'x'和'y'
console.log(myArray); // 输出: [1, 'x', 'y', 4, 5]
```

## 查找/检索

1. indexof()

返回指定元素的第一个索引，找不到返回 -1。

```js
[1, 2, 3].indexOf(2); // 1
```

2. lastIndexOf

返回指定元素的最后一个索引，找不到返回 -1。

```js
[1, 2, 3, 2].lastIndexOf(2); // 3
```

3. includes()

检查数组是否包含某个值，返回布尔值。

```js
[1, 2, 3].includes(2); // true
```

4. find(callback)

返回满足条件的第一个元素，没有返回 undefined。

```js
[1, 2, 3].find((x) => x > 1); // 2
```

5. findIndex(callback)

返回满足条件的第一个元素的索引，没有返回 -1。

```js
[(1, 2, 3)].findIndex((x) => x > 1); // 1
```

## 遍历

1. forEach(callback)

遍历数组，不返回新数组。

```js
[1, 2, 3].forEach((x) => console.log(x));
map(callback);
```

2、遍历数组，返回新数组。

```js
[1, 2, 3].map((x) => x * 2); // [2, 4, 6]
filter(callback);
```

3、过滤数组，返回满足条件的新数组。

```js
[1, 2, 3].filter((x) => x > 1); // [2, 3]
```

## 排序

1. sort(compareFunction)

对数组排序（默认按字符串 Unicode 顺序）。

```js
[3, 1, 2].sort(); // [1, 2, 3]
[3, 1, 2].sort((a, b) => b - a); // [3, 2, 1]
```

2. reverse()

反转数组

```js
[1, 2, 3].reverse(); // [3, 2, 1]
```

## 组合

1. concat()

合并数组，返回新数组。

```js
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

2. join(separator)

将数组元素转换为字符串并用分隔符连接。

```js
[1, 2, 3].join('-'); // "1-2-3"
```

3. slice(start, end)

返回从 start 到 end 的子数组（不包括 end）。

```js
[1, 2, 3].slice(1, 3); // [2, 3]
```

## 计算

1. reduce(callback, initialValue)

逐步累积数组的值。

```js
[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
```

2. reduceRight(callback, initialValue)

与 reduce 类似，但从右向左累积。

```js
[1, 2, 3].reduceRight((sum, x) => sum + x, 0); // 6
```

## 其他

1. flat(depth)

将嵌套数组“拉平”。

```js
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

2. flatMap(callback)
   遍历并扁平化一层。

```js
[1, 2, 3].flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

3. some(callback)
   是否至少有一个元素满足条件。

```js
[1, 2, 3].some((x) => x > 2); // true
```

4. every(callback)

是否所有元素都满足条件。

```js
[1, 2, 3].every((x) => x > 0); // true
```

5. fill(value, start, end)
   用指定值填充数组的一部分。

```js
[1, 2, 3].fill(0, 1, 3); // [1, 0, 0]
```

6. Array.isArray()
   判断是否为数组。

```js
Array.isArray([1, 2, 3]); // true
```
