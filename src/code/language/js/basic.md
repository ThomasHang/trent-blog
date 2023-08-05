<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-08-04 15:08:06
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-08-05 17:40:42
 * @FilePath: \trent-blog\src\code\javascript\basic.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 基础

## 名词解释

- 形参：是定义函数的时候列举的变量。

- 实参：是调用函数的时候传递给函数的值。

- arguments

- 可选链运算符(?.):允许读取位f于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。
::: code-tabs#shell
@tab js 
```js
//不使用可选链的话，需要判断obj中是否有first
let nestedProp = obj.first && obj.first.second;
//使用
let nestedProp = obj.first?.second;

```
:::

- 空值合并操作符(??):是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
::: code-tabs#shell
@tab js 
```js
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

const valA = nullValue ?? "valA 的默认值";
const valB = emptyText ?? "valB 的默认值";
const valC = someNumber ?? 0;

console.log(valA); // "valA 的默认值"
console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）
console.log(valC); // 42

```
:::

- indexof