# 在 react 项目中配置 toolkit

Redux Toolkit 是官方推荐的 Redux 状态管理工具，简化了 Redux 的配置过程，提供了更易用的开发工具和默认中间件。

---

## 配置 `Store`

使用 `configureStore` 创建 Redux 的 `store`：

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

### `configureStore` 的特点：

- 自动调用 `combineReducers()` 合并多个 reducer。
- 默认集成 `redux-thunk` 和开发工具插件，生产环境下自动屏蔽开发工具。
- 可轻松扩展中间件和增强器。

## 创建 `Slice`

使用 `createSlice` 创建一个 `slice`，它包含了 reducer 和 action。

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // 内部使用 Immer，允许直接修改 state
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // payload 为传入的参数
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 异步操作示例（redux-thunk）
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// 从 state 中提取值
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
```

## 在 Hook 组件中使用

`useSelector` 和 `useDispatch` 是 React-Redux 提供的 Hook，用于访问状态和分发操作。

### 示例代码：

```js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount); // 从 Redux store 中获取值
  const dispatch = useDispatch(); // 获取 dispatch 方法
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
```

## 在 Class 组件中使用

`connect` 函数可以将 Redux 状态和分发方法映射到组件的 props。

### 示例代码：

```js
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";

class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { incrementAmount: 2 };
  }

  setIncrementAmount(num) {
    this.setState({ incrementAmount: +num });
  }

  render() {
    const { incrementAmount } = this.state;
    const { count, increment, decrement, incrementByAmount, incrementAsync } =
      this.props;

    return (
      <div>
        <div>
          <button onClick={() => increment()}>+</button>
          <span>{count}</span>
          <button onClick={() => decrement()}>-</button>
        </div>
        <div>
          <input
            value={incrementAmount}
            onChange={(e) => this.setIncrementAmount(e.target.value)}
          />
          <button
            onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
          >
            Add Amount
          </button>
          <button onClick={() => incrementAsync(Number(incrementAmount) || 0)}>
            Add Async
          </button>
        </div>
      </div>
    );
  }
}

// 将 Redux 状态映射到 props
const mapStateToProps = (state) => ({
  count: state.counter.value,
});

// 将 Redux action 映射到 props
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
  incrementAsync: (amount) => dispatch(incrementAsync(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassComponent);
```

### 为了解决工作中，遇到 redux 页面刷新后丢失数据

- 主要解决，老项目路由，网站跳转时，之前的数据丢失。

```js
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//定义持久化配置
const persistConfig = { key: "root", storage };
//创建持久化reducer
const persistedReducer = persistReducer(persistConfig, globalReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    mapOverlay: mapOverlay,
    global: persistedReducer,
    common: common,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persister = persistStore(store);

export { store, persister };

/**
 *   全局global model
 *   支持数据持久化，
 *   一般情况下最好不要使用该model，除非你需要数据持久化
 *   目前最存储了路由以及网页配置的信息
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserApi } from "@/api";
import {
  homePage,
  menusResourceSlider,
  menusdealhistorymgSlider,
} from "@/constants/menus";

export const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    webConfig: {}, //全局属性
    deptMenuAuthCodeList: [], // Added deptMenuList to the initial state
    topMenus: [], //顶部路由
    resourceMenus: [], //资源管理左侧路由
    historyMenus: [], // 系统管理
  },
  reducers: {
    setWebConfig: (state, action) => {
      // 通过 action.payload 更新 webConfig
      state.webConfig = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handling the fulfilled action of getDeptMenuList
    builder.addCase(getDeptMenuList.fulfilled, (state, action) => {
      state.deptMenuAuthCodeList = action.payload;
      const newRouters = renderNewRoute(action.payload);
      state.topMenus = newRouters.top;
      state.resourceMenus = newRouters.resource;
      state.historyMenus = newRouters.history;
      //需要跳转网页newRouters.top[0].path
    });
  },
});

export const getDeptMenuList = createAsyncThunk(
  "global/getDeptMenuList",
  async (value, { rejectWithValue }) => {
    try {
      const { success, pageValueList, authValueList } =
        await UserApi.getUserAuth();
      if (success) {
        window.localStorage.setItem("auth-page", JSON.stringify(pageValueList));
        window.localStorage.setItem("auth-role", JSON.stringify(authValueList));
        return pageValueList;
      }
    } catch (error) {
      return rejectWithValue("网络异常");
    }
  }
);

//根据页面权限码生成新的路由
const renderNewRoute = (authCodeList) => {
  const userDeptId = localStorage.getItem("enbo-deptid"); //用户所属部门id
  //第一步 先处理原先的3个路由,过滤没有权限的页面
  const filteredHomePage = homePage.filter((x) =>
    authCodeList.includes(Number(x.authId))
  );
  const filteredResourcePage = menusResourceSlider
    .map((page) => ({
      ...page,
      sub: page.sub.filter(
        (subPage) =>
          authCodeList.includes(Number(subPage.authId)) ||
          (subPage.deptId && subPage.deptId.includes(parseInt(userDeptId)))
      ),
    }))
    .filter((page) => page.sub.length > 0);

  const filteredOperatePage = menusdealhistorymgSlider
    .map((page) => ({
      ...page,
      sub: page.sub.filter(
        (subPage) =>
          authCodeList.includes(Number(subPage.authId)) ||
          (subPage.deptId && subPage.deptId.includes(parseInt(userDeptId)))
      ),
    }))
    .filter((page) => page.sub.length > 0);

  //第二步 组合新的路由,提供页面所需的格式,增加标题和图标
  const topPage = [
    filteredHomePage.length > 0 ? filteredHomePage[0] : [],
    filteredResourcePage.length > 0
      ? handleTopTitle(filteredResourcePage)[0]
      : [],
    filteredOperatePage.length > 0
      ? handleTopTitle(filteredOperatePage)[0]
      : [],
  ].flat();

  const menuPage = {
    top: topPage,
    resource: filteredResourcePage,
    history: filteredOperatePage,
  };
  return menuPage;
};

// 处理标题
const handleTopTitle = (list = []) => {
  return list.map((item) => {
    if (item && item.sub) {
      if (item.index === "2") {
        return { ...item.sub[0], title: "资源管理", icon: "top_resource_mg" };
      } else {
        return { ...item.sub[0], title: item.title, icon: "top_deal_history" };
      }
    }
    return item.sub[0];
  });
};

export const { setWebConfig } = GlobalSlice.actions;

export default GlobalSlice.reducer;
```
