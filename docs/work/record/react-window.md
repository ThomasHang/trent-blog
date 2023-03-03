<!--
 * @Author: 储天航 1193983801@qq.com
 * @Date: 2023-03-03 15:42:59
 * @LastEditors: 储天航 1193983801@qq.com
 * @LastEditTime: 2023-03-03 17:40:46
 * @FilePath: \trent-blog\docs\work\record\react-window.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 虚拟列表

## 前言

最近有个需求，需要渲染大量的 checkbox 选择框，原方案直接使用的 for 循环，全选操作后，因为同时要选中大量数据，需要等待 5~8 秒左右，甚至 15s，特别影响用户体验。

react-window 是热门的虚拟滚动库。提供了多种可复用的组件，用于展示列表、网格和表格数据。

### 前置知识：

1.useCallback
 
- 返回一个 memoized 回调函数。
- 把内联回调函数及依赖项数组作为参数传入  useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如  shouldComponentUpdate）的子组件时，它将非常有用。
- 
2. memoized:
  概念：使用一组参数初次调用函数时，缓存参数和计算结果，当再次使用相同的参数调用该函数时，直接返回相应的缓存结果。
3. new Set()概念：Set集合，ES6标准中提供Set构造函数来创建集合，它是一种无重复元素的列表
    - 添加元素add
   ```js
   let list = new Set()
   list.add(1)
   ```
  

### 实现

上代码

```js
import React, { useState, useCallback, useEffect } from "react";
import { Checkbox } from "antd";
import { VariableSizeList } from "react-window";

const VirtualCheckboxList = ({
  data,
  itemHeight,
  height,
  width,
  onChange,
  checkedList,
  checkRef
}) => {
  const [checkedItems, setCheckedItems] = useState(new Set());

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

  useEffect(() => {
    setCheckedItems(new Set(checkedList));
  }, [checkedList]);

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
        ref={checkRef}
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

### 项目地址：[codesandbox](https://codesandbox.io/s/frosty-farrell-2fu7hp)
