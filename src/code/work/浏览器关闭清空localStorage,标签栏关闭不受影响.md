---
title: 浏览器关闭清空localStorage,标签栏关闭不受影响
tag: work
---


## 使用 Cookie 解决方案

为了在浏览器关闭时清空 `localStorage`，而在标签栏关闭时保持数据不受影响，我们可以借助 Cookie 来实现。

---

### 第一步：设置 Cookie

通过设置一个标志位的 Cookie 来判断浏览器的生命周期。

#### 特性说明
1. **数据大小限制**：Cookie 数据不能超过 4KB。
2. **持久性**：在过期时间之前，Cookie 始终有效。
3. **自动传递**：Cookie 数据会在请求时自动传递到服务器（如果路径匹配）。

#### 实现代码

以下是一个通用的设置 Cookie 函数：

```js
function setCookie(name, value, seconds) {
  seconds = seconds || 0; // 如果没有设置时间，默认不设置过期时间
  let expires = "";
  if (seconds !== 0) {
    // 设置 Cookie 的生存时间
    const date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = `${name}=${escape(value)}${expires}; path=/`; // 转码后赋值
}

// 示例：通常在登录页设置一个标志位
setCookie("type", 1);
````

### 第二步：判断 Cookie 并处理 localStorage

```js
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";"); // 分割 Cookie 字符串
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim(); // 去除前后空格
    if (c.indexOf(nameEQ) === 0) {
      // 匹配 Cookie 名
      return unescape(c.substring(nameEQ.length, c.length)); // 解码并返回值
    }
  }
  return null; // 未找到返回 null
}

// 检查是否存在指定的 Cookie
if (!getCookie("type")) {
  // 没有 Cookie 表示新会话，清空 localStorage 并跳转到首页
  localStorage.clear();
  history.push("/"); // 或 window.location.href = "/";
}
```


### 总结

1.  使用 Cookie 记录浏览器会话状态，通过其有效期判断是否清空 `localStorage`。
1.  Cookie 的小容量特性适合保存轻量级标志位。
1.  此方案能够实现浏览器关闭时清空 `localStorage`，同时避免因标签关闭导致的数据丢失问题。