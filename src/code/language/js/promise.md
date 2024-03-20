---
title: 如何理解promise
tag: js
---

### Promise 是什么？

Promise 是 JavaScript 中一种用于处理异步操作的对象。它代表了一个异步操作的最终完成或失败，并且可以返回其结果值或错误原因。

### 解决了什么问题？

Promise 主要解决了传统回调函数（callback）所带来的问题，尤其是在处理多个异步操作时出现的回调地狱（callback hell）情况。传统的回调函数嵌套结构使得代码难以阅读、理解和维护，而 Promise 则通过提供一种更加优雅的方式来处理异步操作，使得代码结构更加清晰、易于理解和维护。

### Promise 的三种状态是什么？它们分别是什么意思？

Pending（进行中）：初始状态，表示操作尚未完成，也没有失败。
Fulfilled（已完成）：表示操作成功完成。
Rejected（已拒绝）：表示操作失败。

### 你能列举一些 Promise 的方法吗？它们各自的作用是什么？

Promise.resolve(value):
创建一个已解决的 Promise 对象，并返回指定的值。如果该值是一个 Promise，则直接返回这个 Promise。

Promise.reject(reason):
创建一个已拒绝的 Promise 对象，并返回一个给定的 reason（拒绝原因）。

Promise.prototype.then(onFulfilled, onRejected):
添加解决（fulfilled）和拒绝（rejected）状态的回调函数到 Promise 对象，并返回一个新的 Promise 对象。onFulfilled 是当 Promise 解决时执行的函数，onRejected 是当 Promise 拒绝时执行的函数。

Promise.prototype.catch(onRejected):
添加一个拒绝状态的回调函数到 Promise 对象，用于捕获 Promise 中的错误。

Promise.prototype.finally(onFinally):
添加一个在 Promise 对象无论状态如何都会执行的回调函数，无论是解决还是拒绝，都会执行 onFinally 函数。

Promise.all(iterable):
将多个 Promise 实例包装成一个新的 Promise 实例。当所有的 Promise 实例都解决（fulfilled）时，返回的 Promise 实例也会解决，且返回的结果是一个包含所有 Promise 结果的数组；当任何一个 Promise 实例拒绝（rejected）时，返回的 Promise 实例也会拒绝，且返回的是第一个拒绝的 Promise 的结果。

Promise.race(iterable):
将多个 Promise 实例包装成一个新的 Promise 实例。当其中任何一个 Promise 实例解决（fulfilled）或拒绝（rejected）时，返回的 Promise 实例也会解决或拒绝，且返回结果与首个完成的 Promise 实例的结果相同。

Promise.allSettled(iterable) (ES2020):
将多个 Promise 实例包装成一个新的 Promise 实例。该方法会等待所有的 Promise 实例都已解决（无论成功还是失败）后再返回。返回的结果是一个数组，每个元素表示对应的 Promise 实例的结果

### Promise 的链式调用？它是如何实现的？

Promise 的链式调用是通过在 then() 方法中返回新的 Promise 实例来实现的，每个 then() 方法都会返回一个新的 Promise 对象，从而实现对异步操作的串联。

在链式调用中，每个 then() 方法都会返回一个新的 Promise 对象，这个 Promise 对象的状态取决于 then() 方法中的回调函数的执行结果：如果回调函数中返回一个值（非 Promise），则新的 Promise 对象将会进入解决状态，并以该值作为解决值；如果回调函数中抛出异常或返回一个拒绝的 Promise，则新的 Promise 对象将会进入拒绝状态，并以抛出的异常或拒绝的 Promise 的结果作为拒绝原因；如果回调函数中返回一个解决的 Promise，则新的 Promise 对象将会与该 Promise 对象状态保持一致。这种链式调用的机制使得我们可以通过串联多个 then() 方法来依次处理异步操作的结果，而不必嵌套多层回调函数，从而避免了传统回调函数中的回调地狱问题。

### Promise 的错误处理

1. 如何捕获 Promise 中的错误吗？
   可以通过 catch() 方法或在 then() 方法的第二个参数中传入回调函数来捕获 Promise 中的错误。另外，也可以在链式调用的末尾通过 catch() 方法来捕获整个链中任何一个 Promise 实例的错误。

2. 有哪些方法可以处理 Promise 的错误？
   使用 catch() 方法：catch() 方法用于捕获 Promise 中的错误，并进行相应的处理。
   在 then() 方法中传入第二个参数作为错误处理函数：可以在 then() 方法的第二个参数中传入一个回调函数，用于处理 Promise 中的错误。
   在链式调用的末尾使用 catch() 方法：在链式调用的末尾通过 catch() 方法来捕获整个链中任何一个 Promise 实例的错误。

3. Promise 的错误会传播到哪里？
   Promise 的错误会沿着 Promise 链向上传播，直到被捕获和处理。如果 Promise 链中的某个 Promise 实例发生了拒绝（rejected），且没有被任何 catch() 方法或在 then() 方法中传入的错误处理函数捕获和处理，那么错误将会向上传播，直到被最近的 catch() 方法捕获，或者直到达到全局的未捕获错误处理函数（如浏览器中的 window.onerror）。

### Promise 和其他异步编程模式的比较：

1. Promise 与回调函数相比有哪些优势？
   Promise 可以更清晰地表达异步操作的状态和结果，使代码结构更加清晰和易读。
   Promise 可以避免回调地狱（callback hell）的问题，通过链式调用来处理多个异步操作，代码结构更加扁平化。
   Promise 提供了统一的错误处理机制，可以更方便地捕获和处理异步操作中的错误。
2. Promise 与 async/await 相比有什么不同？
   async/await 是基于 Promise 的语法糖，使得异步操作的编写更加像同步代码，更加直观和易读。
   async/await 可以更方便地处理 Promise 的链式调用，避免了使用 then() 方法和 catch() 方法的复杂性。
   async/await 可以更方便地使用 try-catch 语句来捕获和处理异步操作中的错误，使得错误处理更加简洁和易用。

### 进阶问题：

1. 你了解 Promise 的实现原理吗？可以简要描述一下吗？
   Promise 的实现原理涉及到状态管理、回调函数的注册和调用、错误处理等方面。简单来说，Promise 内部维护了一个状态（pending、fulfilled、rejected）以及相应的结果值或错误原因。当 Promise 被创建时，它处于 pending 状态，可以通过 resolve() 方法将其状态转变为 fulfilled，或者通过 reject() 方法将其状态转变为 rejected。Promise 通过链式调用的方式来处理异步操作，每个 then() 方法都会返回一个新的 Promise 对象，从而实现对异步操作的串联。在执行过程中，Promise 会依次执行注册的回调函数，并根据回调函数的执行结果来更新 Promise 的状态和结果值。另外，Promise 还提供了错误处理机制，可以通过 catch() 方法来捕获 Promise 中的错误。至于具体的实现细节，则可以参考各种 Promise 的 polyfill 或实现库。

2. 你知道 Promise 的终止（Cancellation）机制吗？如何实现 Promise 的取消？
   在标准的 Promise 规范中，并没有提供原生的 Promise 取消机制。因为一旦创建了 Promise，它就会立即执行，无法取消。但可以通过一些特殊的实现来实现 Promise 的取消。一种常见的做法是，通过控制 Promise 中的异步操作，在外部维护一个变量来标识是否需要取消 Promise 的执行，当取消时，可以通过一些手段来终止异步操作的执行，并将 Promise 的状态设置为取消状态，然后根据需要调用相应的回调函数或执行后续的处理。另外，还可以借助于一些第三方库或实现来实现 Promise 的取消机制，例如使用 AbortController 来取消 fetch 请求等。

### 你在项目中是如何使用 Promise 的？能分享一些具体的场景吗？

### 手写一个 promise

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
