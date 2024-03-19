---
title: 如何理解promise
tag: js
---

### 概念

- Promise 是一个对象，它代表了一个异步操作的最终完成或者失败

- 异步操作：JavaScript 中的异步操作是指不会立即返回结果的操作，而是在稍后某个时刻返回结果。例如，从服务器获取数据、读取文件等。

- Promise 对象：Promise 是 JavaScript 中用于处理异步操作的对象。它代表了一个异步操作的最终完成或失败，并且允许你在异步操作完成后进行相应的处理。

- 状态：Promise 可以处于三种状态之一：
  Pending（进行中）：初始状态，表示操作尚未完成，也没有失败。
  Fulfilled（已完成）：表示操作成功完成。
  Rejected（已拒绝）：表示操作失败。

- Promise 的方法：Promise 对象有一些方法，最常见的是 then() 方法。它接收两个参数：成功时的回调函数和失败时的回调函数。这些回调函数将在异步操作完成或失败时被调用。

- 链式调用：Promise 支持链式调用，这意味着你可以依次调用多个异步操作，并在每个操作完成后执行下一个操作。这通过在 then() 方法中返回新的 Promise 实现

### 手写一个 promise

::: 手写一个 promise
@tab js

```js
class MyPromise {
  constructor() {
    //初始状态为 pending
    this.state = "pending"; //默认pending fulfilled rejected
    // 用于保存成功时的值
    this.value = undefined;
    // 用于保存失败时的原因
    this.reason = undefined;
    // 用于保存成功回调函数列表
    this.onResolvedCallbacks = [];
    // 用于保存失败回调函数列表
    this.onRejectedCallbacks = [];

     const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.onResolvedCallbacks.forEach((callback) => callback());
    }
  }
  reject(reason) {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach((callback) => callback());
    }
  }
  }


  all() {}
}
```

:::

### 面试常问？

1. 基础概念理解：

- 你能解释 Promise 是什么吗？它解决了什么问题？

promise 是 JavaScript 中一种用于处理异步操作的对象。它代表了一个异步操作的最终完成或失败，并且可以返回其结果值或错误原因。

Promise 主要解决了传统回调函数（callback）所带来的问题，尤其是在处理多个异步操作时出现的回调地狱（callback hell）情况。传统的回调函数嵌套结构使得代码难以阅读、理解和维护，而 Promise 则通过提供一种更加优雅的方式来处理异步操作，使得代码结构更加清晰、易于理解和维护。

具体而言，Promise 解决了以下问题：

回调地狱（Callback Hell）：多个嵌套的回调函数导致代码难以阅读和维护。
异步操作的结果处理：传统的回调函数难以处理异步操作的结果，而 Promise 可以更方便地处理异步操作的成功或失败，并进行后续的处理。
错误处理：Promise 提供了统一的错误处理机制，使得错误可以被捕获并进行适当的处理，而不会导致整个应用崩溃或出现未处理的异常。

Promise 的三种状态是什么？它们分别是什么意思？
Promise 的基本用法是怎样的？

1. Promise 方法：
   你能列举一些 Promise 的方法吗？它们各自的作用是什么？
   Promise 的 then() 和 catch() 方法分别用来做什么？

2. Promise 链式调用：
   你了解 Promise 的链式调用吗？它是如何实现的？
   如何在 Promise 链中传递数据？
   如何处理 Promise 链中的错误？
3. Promise 的错误处理：
   你知道如何捕获 Promise 中的错误吗？有哪些方法可以处理 Promise 的错误？
   Promise 中的错误会传播到哪里？

4. 异步编程：
   Promise 如何帮助管理异步代码？
   你能举例说明 Promise 在异步编程中的应用吗？
   Promise 和其他异步编程模式的比较：
   Promise 与回调函数相比有哪些优势？
   Promise 与 async/await 相比有什么不同？

5. 进阶问题：
   你了解 Promise 的实现原理吗？可以简要描述一下吗？
   你知道 Promise 的终止（Cancellation）机制吗？如何实现 Promise 的取消？

6. 应用场景：

你在项目中是如何使用 Promise 的？能分享一些具体的场景吗？
