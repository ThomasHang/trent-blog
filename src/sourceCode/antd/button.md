---
title: antd 源码学习——button
tag: antd
timeline: true
---

### 当前使用的 npm 库

- classnames

  - 地址：`https://github.com/JedWatson/classnames#readme`
  - 用途：主要功能是帮助动态地拼接 CSS 类名。在前端开发中，我们经常需要根据某些条件来动态添加或移除 CSS 类名，以实现样式的变化

- rc-util
  - 地址：`http://github.com/react-component/util`
  - 用途：工具库提供了许多实用的功能，如自定义 React Hook、DOM 相关操作、工具函数

### typescript

- omit: 是一个通用的类型工具，用于创建一个新类型，从给定的类型中排除指定的属性。
  - 用法：逗号前是原始类型，后面是需要剔除的类型

```ts
type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type"
>;
// 定义了一个类型名为MergedHTMLAttributes。
// 1、React.HTMLAttributes<HTMLElement>：这是 React 提供的一个类型，它包含了所有 HTML 元素的通用属性，例如 className、style、onClick 等。
// 2、React.ButtonHTMLAttributes<HTMLElement>：这是 React 提供的另一个类型，它包含了按钮元素（<button>）特有的属性，比如 type、disabled 等。
// 3、React.AnchorHTMLAttributes<HTMLElement>：同样是 React 提供的类型，它包含了超链接元素（<a>）特有的属性，比如 href、target 等。
// 4、最后排除了MergedHTMLAttributes 类型就包含了所有 HTML 元素和按钮元素以及超链接元素的属性，但排除了 type 属性
```

- Index Signature: 是 TypeScript 中用于描述对象类型的一种特殊语法。它允许你定义对象中可以使用的索引类型和对应的值类型。

```ts
// 举个例子，假设你声明了一个索引签名为字符串类型的对象，值类型为数字：
interface NumberDictionary {
  [index: string]: number;
}
const myDict: NumberDictionary = {
  one: 1,
  two: 2,
  three: 3,
};
console.log(myDict["two"]); // 输出 2
// 在这个例子中，NumberDictionary 对象的索引属性类型为字符串，值类型为数字。因此，当你使用这个对象时，如果你尝试将字符串键映射到字符串以外的值类型，就会导致类型错误：
const dict: NumberDictionary = {
  one: 1,
  two: "two", // 这里会报错，因为"two"对应的值类型应为数字而不是字符串
};
```

### 理解写法

```ts
type LoadingConfigType = {
  loading: boolean;
  delay: number;
};

// 获取button loading 配置
function getLoadingConfig(
  loading: BaseButtonProps["loading"]
): LoadingConfigType {
  //loading参数，返回的类型为LoadingConfigType，BaseButtonProps 这里面定义的loadingy为 loading?: boolean | { delay?: number }; 意味关是布尔类型或者传进来一个对象
  if (typeof loading === "object" && loading) {
    //判断loading有没有并且否为对象
    let delay = loading?.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay,
    };
  }
//如果没有则返回 false ，delay 也是默认值
  return {
    loading: !!loading,
    delay: 0,
  };
}
```
