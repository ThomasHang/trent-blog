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
