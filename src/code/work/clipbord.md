# 可编辑的 `div`

`handleContentChange` 函数用于处理带有 `contentEditable` 属性的 `div` 元素内容发生更改时的操作，通常包括更新和保存用户编辑的内容。

此函数应绑定到 `div` 元素的 `onBlur` 和 `onKeyPress` 事件，以确保在元素失去焦点或用户按下回车键时触发内容保存逻辑。

---

### 示例代码

以下是一个示例，通过 `React` 实现一个可编辑的 `div`：

::: react-demo 可编辑的 div

```jsx
import React, { useRef } from "react";

function MyComponent() {
  const myDiv = useRef(null);

  // 处理内容更改并保存
  const handleContentChange = () => {
    const content = myDiv.current.innerHTML; // 获取当前内容
    const images = Array.from(myDiv.current.getElementsByTagName("img")).map(
      (img) => img.src // 提取所有图片的路径
    );

    // 向服务器发送内容和图片数据
    fetch("http://example.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, images }),
    })
      .then((response) => response.json())
      .then((data) => console.log("数据保存成功：", data))
      .catch((error) => console.error("保存失败：", error));
  };

  return (
    <div
      ref={myDiv}
      contentEditable={true} // 启用可编辑属性
      onBlur={handleContentChange} // 失去焦点时触发保存
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          event.preventDefault(); // 阻止回车键的默认行为（换行）
          myDiv.current.blur(); // 失去焦点，触发 `onBlur` 保存内容
        }
      }}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        minHeight: "50px",
        borderRadius: "4px",
        outline: "none",
      }}
    >
      <p>这是一个可编辑的 `div` 元素。</p>
      <img src="/path/to/image1.jpg" alt="Image 1" />
      <img src="/path/to/image2.jpg" alt="Image 2" />
    </div>
  );
}

export default MyComponent;
```

:::

### 功能说明

1. 内容更新
   - 当用户编辑 div 内容并失去焦点时，handleContentChange 会获取 innerHTML，以及所有嵌入图片的路径，并将数据发送到服务器。

2.回车键处理

-默认情况下，在 contentEditable 元素中按下回车键会插入新行。 -通过阻止默认行为并调用 blur()，可以模拟回车键作为保存操作。

3.样式支持 -为了更好的用户体验，可以添加边框和适当的间距等样式，使编辑区域清晰可见。
