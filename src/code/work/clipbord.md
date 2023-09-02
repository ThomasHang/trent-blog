# 把普通的div 变成可编辑

handleContentChange函数用于处理当带有contentEditable属性的div元素内容发生更改时的操作。

这个函数应该被绑定到div元素的onBlur和onKeyPress事件上，以确保在div元素失去焦点或用户按下回车键时进行内容的更新和保存。示例如下：

::: react-demo div

```js
import React, { useRef } from 'react';

function MyComponent() {
  const myDiv = useRef(null);

  const handleContentChange = () => {
    const content = myDiv.current.innerHTML;
    const images = myDiv.current.getElementsByTagName('img');

    fetch('http://example.com/api', {
      method: 'POST',
      body: JSON.stringify({ content, images }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div
      ref={myDiv}
      contentEditable={true}
      onBlur={handleContentChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // 防止在div元素中按下回车键时自动换行
          myDiv.current.blur(); // 使div元素失去焦点，触发handleContentChange函数
        }
      }}
    >
      <p>这是一个可编辑的div元素。</p>
      <img src="/path/to/image1.jpg" alt="Image 1" />
      <img src="/path/to/image2.jpg" alt="Image 2" />
    </div>
  );
}
```
:::

在这个示例中，handleContentChange函数绑定到了onBlur事件上，以处理div元素失去焦点时内容的更新和保存。onKeyPress事件绑定了一个匿名函数，以在用户按下回车键时防止自动换行，并调用blur()使div元素失去焦点，以触发handleContentChange函数。