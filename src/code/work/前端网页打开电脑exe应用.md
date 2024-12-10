---
title: 浏览器中打开本地 EXE 应用
tag: work
---


## 背景

在某些特定业务场景中，需要通过浏览器触发并打开本地的 EXE 应用程序。实现这一功能通常需要借助协议注册和注册表操作。

---

## 实现步骤

### 1. 注册自定义协议
通过操作注册表，为目标 EXE 应用注册一个自定义协议。例如，注册一个 `openw://` 协议，以便浏览器调用该协议时触发对应的应用。

#### 示例
- 自定义协议的名称：`openw://`
- 目标 EXE 应用路径：`C:\Program Files\MyApp\myapp.exe`

以下是在 Windows 系统中操作注册表的步骤：
1. 打开注册表编辑器（`regedit`）。
2. 在 `HKEY_CLASSES_ROOT` 下新建一个键值，例如 `openw`。
3. 设置以下内容：
   - 默认值：协议描述（如 `URL:MyApp Protocol`）
   - 增加字符串值 `URL Protocol`，其值为空。
4. 在 `shell\open\command` 中设置默认值为 EXE 的完整路径，例如：


> **注意**：编辑注册表存在风险，请提前备份重要数据。

---

### 2. 前端实现调用自定义协议

以下是一个 React 组件的示例代码，通过点击图标触发自定义协议调用：

```jsx
import React from "react";
import { Icon } from "antd";
import styles from "./index.less";

export default function OpenApplication() {
const handleClick = () => {
 // 调用自定义协议
 window.location.href = "openw://";
};

return (
 <div className={styles.container}>
   <div className={styles.icon_container}>
     <Icon
       type="appstore" // 图标类型
       className={styles.icon}
       onClick={handleClick}
     />
   </div>
 </div>
);
}
```

### 3. 注意事项

1.  **权限问题**

    -   注册表修改通常需要管理员权限。
    -   用户必须在本地安装目标 EXE 应用并确保路径正确。

1.  **浏览器兼容性**

    -   不同浏览器对自定义协议的支持可能有所不同。推荐使用常见现代浏览器（如 Chrome、Edge）。
    -   某些浏览器可能会拦截协议调用，需提前告知用户调整设置。

1.  **安全性**

    -   自定义协议存在一定安全风险，例如被恶意应用利用。因此，应确保协议仅调用可信程序，并做好路径校验。

1.  **跨平台问题**

    -   此方案仅适用于 Windows 系统。对于其他操作系统（如 macOS 和 Linux），需寻找类似的实现方式。