# react 复习知识点

## 基础概念

### jsx?

- 作用：JSX 是一种语法糖，可以在 JavaScript 中直接写 HTML 风格的标签。React 使用 JSX 来描述 UI。
- 转换过程：JSX 最终会被 Babel 编译成 React.createElement 函数调用的形式。理解这种转换可以帮助你更好地掌握 JSX 背后的机制。
- 嵌套规则：JSX 允许嵌套结构，但每个组件必须返回一个单一的父元素。
- 表达式嵌入：可以在大括号{}中嵌入任何有效的 JavaScript 表达式（如变量、运算符等），但是不能直接写对象。可以考虑使用...props 展开操作来传递对象。

1. createElement 用法 ？  
   React.createElement(type, props, ...children)
   type：元素类型，可以是字符串、函数、类等。
   props：元素的属性对象。
   children：元素的子元素，可以是字符串、数字、React 元素、数组等

- [官网例子](https://react.dev/reference/react/createElement)

```jsx
import { createElement } from "react";

function Greeting({ name }) {
  return createElement(
    "h1",
    { className: "greeting" },
    "你好",
    createElement("i", null, name),
    "。欢迎！"
  );
}
```

- 项目实际例子  
  1.获取视频元素：通过 document.getElementById 获取包含视频的 DOM 元素。

  2.获取视频尺寸：获取视频的高度和宽度，以便为画布设置相同的尺寸。
  创建画布：使用 document.createElement 创建一个新的 canvas 元素。
  设置样式：将画布的样式设置为绝对定位，以确保它覆盖在视频上方。
  添加到 DOM：将创建的 canvas 元素添加到视频的容器中，使其可见。

  3.创建画布：使用 document.createElement 创建一个新的 canvas 元素。

  4.设置样式：将画布的样式设置为绝对定位，以确保它覆盖在视频上方。

  5.添加到 DOM：将创建的 canvas 元素添加到视频的容器中，使其可见。

```jsx
// ... 省略的代码 ...
createCanvas = () => {
  const videoBox = document.getElementById("videoBox");
  const video = document.querySelector("video"); // 确保选择了视频元素

  if (video) {
    const videoHeight = video.clientHeight;
    const videoWidth = video.clientWidth;

    // 创建并设置 canvas 样式
    let canvas = document.createElement("canvas");
    canvas.height = videoHeight;
    canvas.width = videoWidth;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "100"; // 确保 canvas 位于视频上层

    videoBox.appendChild(canvas);
  }
};

// ... 省略的代码 ...
return (
  <div>
    <video id="videoBox" />
  </div>
);
```

### 组件

1. 函数组件 vs 类组件?

   - 函数组件：使用 React 16.8 及更高版本的 Hooks 后，函数组件可以处理状态和生命周期事件。函数组件结构简单、写法简洁。
   - 类组件：传统方式，通常用于复杂组件，因为它更适合管理多个生命周期事件。不过现在 React 提倡使用 Hooks 和函数组件。

2. 组件复用?
   在 React 中，高阶组件（Higher-Order Components，HOCs）和 Render Props 都是用于复用组件逻辑的方式。然而，它们有不同的使用场景和实现方式。

- 高阶组件 (HOCs)
  HOC 是一个模式，它是一个函数，接收一个组件并返回一个新的组件。这种模式可以用来抽象出一些通用的功能，如数据获取、权限控制等，并将这些功能应用到任何需要它们的组件上。

  特点：

  - 它不是一个 React 组件，而是一个提升（enhance）其他组件的“组件制造器”。
  - 可以修改 props 或 state，甚至可以改变组件的类型。
  - 可以用来包装多个组件，提供统一的功能接口。
  - 通常用来处理组件间的状态共享、生命周期方法调用等逻辑层面的问题。

  使用场景：

  - 当你需要为很多组件提供相同的行为时。
  - 当你需要包装第三方组件并添加额外的行为时。
  - 当你需要改变组件的 props 或 state 时。

  例子

  - 先假定有一个第三方的日期选择组件叫做 DatePicker,它是一个基本的日期选择器，用户可以选择一个日期。

  ```jsx
  import React from "react";

  class DatePicker extends React.Component {
    render() {
      return <input type="date" {...this.props} />;
    }
  }
  ```

  - 现在，我们希望创建一个增强版的日期选择器，它会在用户选择日期时记录下来，并且有一个默认的日期。为此，我们可以创建一个高阶组件（HOC）来包装这个第三方组件，并添加我们的行为：

  ```jsx
  import React from "react";

  function withDateLogging(DatePicker) {
    return class EnhancedDatePicker extends React.Component {
      state = {
        selectedDate: null,
      };

      handleDateChange = (event) => {
        const date = event.target.value;
        console.log(`Date selected: ${date}`);
        this.setState({ selectedDate: date });
      };

      render() {
        const { selectedDate } = this.state;
        return <DatePicker {...this.props} onChange={this.handleDateChange} />;
      }
    };
  }

  const EnhancedDatePicker = withDateLogging(DatePicker);

  class App extends React.Component {
    render() {
      return <EnhancedDatePicker />;
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  在这个例子中，withDateLogging 是一个高阶组件，它接收一个日期选择器组件，并返回一个新的增强版日期选择器组件。新的组件包含了默认日期设置的功能，并且在用户选择日期时记录日期。

  这样，我们就可以重用第三方的日期选择器组件，同时添加了我们自己的行为，比如记录日期选择事件和设置默认日期。

  这是使用 HOC 来增强第三方组件的一个常见场景，尤其是在你需要扩展现有组件功能的时候。这种方法不仅保持了原有组件的功能完整性，还允许你在不改动原组件源码的情况下增加新特性。

- Render Props
  是另一种组件之间复用逻辑的方式。它涉及使用一个 prop，该 prop 的名字是 render，并且它的值是一个函数。当父组件调用子组件时，它会传递这个函数作为 render prop 的值，而子组件负责调用这个函数来渲染内容。

  特点：

  - 子组件通过 props 接受一个名为 render 的函数。
  - render prop 通常用来渲染子组件的内容，它可以在父组件中定义。
  - 这种模式更加灵活，因为它允许动态地决定渲染什么。

  使用场景：

  - 当你需要有条件地渲染不同类型的子组件时。
  - 当你需要在不同层级的组件中共享代码时。
  - 当你需要从父组件传递任意的 props 给子组件时。

平常用的最多的应该是 Render Props，复习时多看下高阶组件使用场景

3. 组合和继承  
   React 推崇组合优于继承，即通过组件嵌套、props.children、props 传递等方式来扩展组件，而非类继承。

如果一个值可以基于现有的 props 或 state 计算得出，不要把它作为一个 state，而是在渲染期间直接计算这个值。

### Props 和 State

1.Props：props 是组件对外提供的接口，组件的输入是不可变的，且是自顶向下流动（父组件传递给子组件）。

2.State：state 是组件的内部状态。使用 setState 更新状态会触发重新渲染。特别注意 setState 的合并行为（对象形式）和异步特性。

3.不可变数据：React 推荐使用不可变数据结构，避免直接修改 state（如 this.state.data.push(...)），而是通过构造新对象/数组的方式更新数据，以确保数据的可追踪性和更好的性能。

### 生命周期方法

- 初始化阶段：类组件的 constructor 方法通常用来初始化状态和绑定事件。
- 挂载阶段：
  componentDidMount：组件第一次渲染完成后执行，通常用于数据获取、订阅事件、操作 DOM 等初始化任务。
- 更新阶段：
  componentDidUpdate：当组件的 props 或 state 发生变化时执行，可以用来处理依赖于更新的副作用操作。
  shouldComponentUpdate：返回一个布尔值，控制组件是否重新渲染（性能优化点），可以通过 React.memo 实现函数组件的相同效果。
- 卸载阶段：
  componentWillUnmount：当组件从 DOM 中移除时执行，常用于清理计时器、取消订阅等。
  注意：了解生命周期方法的调用顺序，特别是当父组件重新渲染、子组件生命周期如何触发。

### 事件处理

- 事件绑定：在 React 中事件名采用驼峰命名法（如 onClick），绑定时推荐使用箭头函数或.bind(this)来确保 this 的正确指向。
- 事件冒泡与阻止：可以通过 event.stopPropagation()来阻止事件冒泡。React 事件是在合成事件系统中实现的，可以更高效地处理事件。
- 事件对象：React 事件的对象不同于原生事件对象，且支持事件池。异步调用事件属性可能需要手动持久化事件对象，如调用 event.persist()。

### 条件渲染

- if-else 语句：可以使用&&短路运算符、三元运算符来实现条件渲染。

- 组件渲染判断：条件渲染通常用来动态展示/隐藏组件，比如根据用户登录状态渲染不同的页面。

- 动态 CSS 样式：通过条件渲染动态添加类名或内联样式，有助于实现灵活的样式控制。
