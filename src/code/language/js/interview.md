---
title: 面试题
tag: js
---

1. var let const 的区别？

- var
  - 声明的变量具有函数作用域或全局作用域。
  - 可以被重新赋值，并且可以被重新声明。
  - 由于它具有函数作用域，可能会导致变量提升问题。

```js
var x = 10;
var x = 20; // 合法的
x = 30; // 合法的
```

- let:
  - 声明的变量具有块级作用域。
  - 可以被重新赋值，但不可以被重新声明。
  - 不存在变量提升问题。

```js
let y = 10;
y = 20; // 合法的
let y = 30; // SyntaxError: Identifier 'y' has already been declared
```

- const:
  - 声明的是一个常量，一旦被赋值就不能再被修改。
  - 具有块级作用域，不能被重新声明或重新赋值。
  - 声明时必须初始化。

```js
const z = 10;
z = 20; // TypeError: Assignment to constant variable.
const z = 30; // SyntaxError: Identifier 'z' has already been declared
```

2. 函数作用域？

函数作用域是指在 JavaScript 中，变量的作用域范围由函数定义的位置确定。在函数作用域内声明的变量只在该函数内部可见，外部无法访问。

- 变量的可见性：在函数内部定义的变量在函数外部是不可见的，这意味着外部无法直接访问函数内部的变量。

- 变量的生命周期：函数作用域的变量生命周期与函数调用的生命周期相关联。当函数调用结束时，函数内部定义的变量通常会被销毁，这称为变量的回收。

- 作用域链：JavaScript 使用词法作用域，也称为静态作用域。在函数嵌套的情况下，内部函数可以访问外部函数的变量，但外部函数无法访问内部函数的变量。这种变量访问规则是通过作用域链来实现的，作用域链会沿着函数的定义层级逐级向上查找变量。

```js
function outerFunction() {
  var outerVar = 'I am from outer function';

  function innerFunction() {
    var innerVar = 'I am from inner function';
    console.log(outerVar); // 内部函数可以访问外部函数的变量
  }

  innerFunction(); // 在外部函数内部调用内部函数
  console.log(innerVar); // 这里会报错，因为内部变量无法在外部访问
}

outerFunction();
```

在这个例子中，innerVar 变量只在 innerFunction 函数内部可见，无法在外部访问。而 outerVar 变量在 outerFunction 函数内部声明，在整个函数内都是可见的。

3. 块级作用域

- 块级作用域是指由一对花括号 {}（通常是代码块）所包围的区域，在这个区域内声明的变量只在该区域内有效，超出这个区域就无法访问。
  使用 let 和 const 声明的变量具有块级作用域，这意味着它们只在最近的一对花括号内有效。例如：

```js
function example() {
  if (true) {
    let x = 10;
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }

  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined
}
```

4. js 数据类型
   数据类型分为两类：原始数据类型和引用数据类型。

- 原始数据类型：
  字符串（String）：用于表示文本数据，例如 "hello"。
  数字（Number）：用于表示数值，可以是整数或浮点数，例如 10 或 3.14。
  布尔值（Boolean）：用于表示 true 或 false。
  undefined：表示一个未定义的值，通常在声明变量但未初始化时使用。
  null：表示空值或不存在的值。
  Symbol：在 ES6 中引入的一种数据类型，表示唯一的值。
- 引用数据类型：
  对象（Object）：用于存储多个值的集合，可以是键值对的集合，也可以是函数等。
  数组（Array）：特殊的对象，用于存储按顺序排列的值的集合。
  函数（Function）：也是对象的一种，用于执行特定任务的代码块。

