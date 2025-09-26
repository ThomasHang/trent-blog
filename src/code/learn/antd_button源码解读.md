# antd_button 源码解读

## 样式处理

- classNames

```jsx
import React from "react";
import classNames from "classnames";

const Button = ({ primary, size, disabled, children }) => {
  const btnClass = classNames("btn", {
    "btn-primary": primary,
    "btn-large": size === "large",
    "btn-small": size === "small",
    "btn-disabled": disabled,
  });

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
};
```

理解： btn-primary，通过外部传入一个属性 primary，来控制这个样式。  
换种写法：style={{background:primary?'#000':'#fff'}},上面的写法是一种语法糖，将这种写法转换成这种写法。可读性好。  
我现在写的好多组件都是用三元运算符，来判断，以后写组件可以用这种语法糖。

## typescript

```tsx
export interface BaseButtonProps {
  type?: ButtonType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?: boolean | { delay?: number; icon?: React.ReactNode };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: { icon: string };
  styles?: { icon: React.CSSProperties };
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type" | "color"
>;

export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes {
  href?: string;
  htmlType?: ButtonHTMLType;
  autoInsertSpace?: boolean;
}

function getLoadingConfig(
  loading: BaseButtonProps["loading"]
): LoadingConfigType {
  if (typeof loading === "object" && loading) {
    let delay = loading?.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay,
    };
  }

  return {
    loading: !!loading,
    delay: 0,
  };
}
```

1、MergedHTMLAttributes 类型的构成

- 交叉类型 (&):
  - React.HTMLAttributes<HTMLElement>: 所有 HTML 元素的通用属性
  - React.ButtonHTMLAttributes<HTMLElement>: <button> 元素的额外属性
  - React.AnchorHTMLAttributes<HTMLElement>: <a> 元素的额外属性
- Omit 工具类型：
  - 从合并后的类型中排除 "type" 和 "color" 属性
  - Omit<T, K> 会创建一个新类型，从类型 T 中移除指定的属性 K

2、export interface ButtonProps extends BaseButtonProps, MergedHTMLAttributes

- 定义了一个 ButtonProps 类型 继承 BaseButtonProps、MergedHTMLAttributes、添加了三个额外属性

3、BaseButtonProps['loading']

- 是 TypeScript 的 索引访问类型，表示访问 BaseButtonProps 接口中 loading 属性的类型。
- 提取复杂类型的子类型，避免重复定义
- 这样写好维护，只要源头变了，这里会自动同步更新
