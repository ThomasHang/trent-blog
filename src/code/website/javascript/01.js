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

    // 定义 resolve 函数，用于将状态从 pending 变为 fulfilled，并保存成功的值
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => callback());
      }
    };
    // 定义 reject 函数，用于将状态从 pending 变为 rejected，并保存失败的原因
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };
    // 执行执行器函数，并将 resolve 和 reject 函数作为参数传递进去
    try {
      executor(resolve, reject);
    } catch (error) {
      // 如果执行器函数抛出异常，则将状态变为 rejected，并保存失败的原因
      reject(error);
    }
  }

  // 定义 then 方法，用于注册成功和失败的回调函数
  then(onFulfilled, onRejected) {
    // 如果成功回调函数没有传入，则使用默认函数，将成功的值向下传递
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // 如果失败回调函数没有传入，则使用默认函数，将失败的原因向下传递
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 返回一个新的 Promise
    return new MyPromise((resolve, reject) => {
      // 根据当前状态来执行相应的回调函数
      if (this.state === "fulfilled") {
        // 使用 setTimeout 将回调函数放入下一个宏任务中执行，以确保异步执行
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            // 如果返回值是一个 Promise，则等待其状态变更
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.state === "rejected") {
        // 使用 setTimeout 将回调函数放入下一个宏任务中执行，以确保异步执行
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            // 如果返回值是一个 Promise，则等待其状态变更
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.state === "pending") {
        // 如果当前状态为 pending，则将回调函数添加到对应的列表中
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              // 如果返回值是一个 Promise，则等待其状态变更
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              // 如果返回值是一个 Promise，则等待其状态变更
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
  }

  // 定义 catch 方法，用于注册失败的回调函数
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
