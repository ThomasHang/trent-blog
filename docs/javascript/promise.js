/*
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-02-09 13:26:47
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-02-13 13:14:04
 * @FilePath: \trent-blog\docs\javascript\promise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const PENDING = "PENDING";
const FULFLLED = "FULFILLED";
const REJECTED = "REJECTED";

class Cpromise {
  constructor(excuter) {
    //默认状态为pending
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;

    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

    //调用此方法是正确的
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFLLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    //调用此方法是失败的
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      //立即执行,将 resolve 和 reject 函数传给使用者
      excuter(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFLLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if (this.status === PENDING) {
      console.log("pending");
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });

      this.onRejectedCallbacks.push(() => {
        onRejected(this.value);
      });
    }
  }
}

const promise = new Cpromise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 1000);
}).then(
  (data) => {
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);
