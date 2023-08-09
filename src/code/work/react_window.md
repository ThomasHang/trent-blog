# checkbox 数量多，全选操作引起卡顿

## 前言

最近有个需求，需要渲染大量的 checkbox 选择框，原方案直接使用的 for 循环，全选操作后，因为同时要选中大量数据，需要等待 5~8 秒左右，甚至 15s，特别影响用户体验。

react-window 是热门的虚拟滚动库。提供了多种可复用的组件，用于展示列表、网格和表格数据。

### 前置知识：

1. useCallback

- 返回一个 memoized 回调函数。
- 把内联回调函数及依赖项数组作为参数传入  useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如  shouldComponentUpdate）的子组件时，它将非常有用。

2. memoized:
   概念：使用一组参数初次调用函数时，缓存参数和计算结果，当再次使用相同的参数调用该函数时，直接返回相应的缓存结果。
3. [Set](https://es6.ruanyifeng.com/#docs/set-map#Set)概念：它类似于数组，但是成员的值都是唯一的，没有重复的值。这次用到了set的 
   - add()：添加某个值，返回 Set 结构本身。
   - delete()：删除某个值，返回一个布尔值，表示删除是否成功。
   - has()：返回一个布尔值，表示该值是否为Set的成员。

### 实现

上代码

```jsx
import React, { useState, useCallback, useEffect } from "react";
import { Checkbox } from "antd";
import { VariableSizeList } from "react-window";

const VirtualCheckboxList = ({
  data, //包含了复选框的数据，每个条目都是对象，包含了value和label属性。
  itemHeight, //表示每个复选框行的高度。
  height, // 表示整个组件的高度。
  width, //表示整个组件的宽度。
  onChange, // 用于在复选框状态变化时调用的父组件函数，当复选框被选中或取消选中时，调用该函数更新父组件的状态。
  checkedList, // 当前选中的值，默认值
  style, //定义的样式
}) => {
// 定义了一个状态钩子checkedItems，并设置默认值为空集合new Set()，用于表示当前选中的复选框。
  const [checkedItems, setCheckedItems] = useState(new Set());

/**
 * 定义一个回调函数 处理当复选框被选中或取消选中时的逻辑
 * 使用了new Set()和delete()和add()方法来添加或删除选中的复选框
 * 并通过setCheckedItems方法来更新checkedItems状态
 */
  const handleCheckboxChange = useCallback(
    (id) => {
      const newCheckedItems = new Set(checkedItems);
      if (newCheckedItems.has(id)) {
        newCheckedItems.delete(id);
      } else {
        newCheckedItems.add(id);
      }
      setCheckedItems(newCheckedItems);
      onChange([...newCheckedItems]); 
    },
    [checkedItems, onChange]
  );

/**
 * 监听 checkedList属性变化时，更新checkedItems 状态
 */
  useEffect(() => {
    setCheckedItems(new Set(checkedList));
  }, [checkedList]);

/**
 * 获取data[index]中包含的每个复选框对象
 * 根据checkedItems中的值来判断复选框是否被选中
 * 并将每个复选框和其对应的标签渲染到Checkbox组件中
 * 
 */
  const handleRenderRow = useCallback(
    ({ index, style }) => {
      const item = data[index];
      const isChecked = checkedItems.has(item.value);
      return (
        <div key={item.value} style={style}>
          <Checkbox
            checked={isChecked}
            onChange={() => handleCheckboxChange(item.value)}
            value={item.value}
          >
            {item.label}
          </Checkbox>
        </div>
      );
    },
    [checkedItems, data, handleCheckboxChange]
  );

  return (
    <div style={{ paddingLeft: "15px" }}>
      <Checkbox.Group
        style={{ height: height, width, overflowY: "auto" }}
        value={[...checkedItems]}
      >
        <VariableSizeList
          height={height}
          itemCount={data.length}
          itemSize={() => itemHeight}
          width={width}
        >
          {handleRenderRow}
        </VariableSizeList>
      </Checkbox.Group>
    </div>
  );
};
export default VirtualCheckboxList;
```

- 使用useCallback 效果
![virtuallist01.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e3ef16f2cea4de5b9e720a43731a213~tplv-k3u1fbpfcp-watermark.image?)
- 未使用
![virtuallist03.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b6a26f1b8014dbb838a17a86c012d07~tplv-k3u1fbpfcp-watermark.image?)

### 结语
核心还是，组件如何进行性能优化，阻止不必要的render。


### 项目地址：[codesandbox](https://codesandbox.io/s/virtuallist-srjl5w)
