---
title: 浏览器打开电脑exe应用
tag: work
---

- 操作注册表
- 将所需打开的应用放进去

```js
import React from "react";
import { Icon } from "antd";
import styles from "./index.less";

export default function OpenApplication() {
  const handleClick = () => {
    window.location.href = "openw://";
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <Icon
          type="bianzu"
          className={styles.icon}
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}
```
