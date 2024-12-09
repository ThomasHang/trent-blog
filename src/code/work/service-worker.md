# 配置 service-worker

在 public 中创建 sw.js 文件，里面写上如下代码：

```js
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");
  self.skipWaiting(); // 强制立即激活
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activated");
  return self.clients.claim(); // 获取控制权
});

self.addEventListener("fetch", (event) => {
  // 可在此进行缓存处理，当前只是转发请求
  event.respondWith(fetch(event.request));
});

// 监听 Service Worker 更新事件
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
```

在 index.jsx 中添加如下代码：

```jsx
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js", { updateViaCache: "none" })
      .then((registration) => {
        console.log(
          "[Service Worker] Registered with scope:",
          registration.scope
        );

        // 监听更新
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // 说明已有 Service Worker 控制页面，检测到更新
                console.log(
                  "[Service Worker] New content available, please refresh."
                );
                // 可提示用户刷新
                alert("发现新版本，刷新页面以加载最新内容！");
              } else {
                // 首次安装 Service Worker
                console.log("[Service Worker] Content cached for offline use.");
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error("[Service Worker] Registration failed:", error);
      });
  });
}
```


原本想通过这种方式来检测页面版本更新，发现不可行