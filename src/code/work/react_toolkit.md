# react 项目中配置 toolkit

```js

import { configureStore } from '@reduxjs/toolkit'; // 注册 store
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
// The store has been created with these options:
// - reducer对象里的所有属性会经 combineReducers()合成
// - redux-thunk 和 redux-logger 被添加到中间件里
// - Redux DevTools 拓展插件在生产模式下会自动屏蔽
// - 中间件、reduxBatch还有 Chrome 开发者工具增强器会自动组合到一起
/features/counter/counterSlice.js
```

### Redux Toolkit 在它的 reducer 内部使用了 Immer

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit 内部使用了 Immer库，所以可以直接对 state上的进行修改
      // Immer 是一个采用 COW(写入时复制)策略的库，此时更改的只是 state 的临时副本
      // 只有当mutation真正完成时，才会生成一个新的 state。
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 这个是异步函数的编写示例，基于 redux-thunk，
// 在函数内部可以进行异步操作，在异步完成后可以触发 action
// 类似 Vuex 里面的进行异步操作的 action
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// 类似 Vuex 里面的 mapGetters
// 用于从 state 里面抽取特定的字段，或者做数据过滤
// 可以写在业务代码，不一定要写在当前的文件里
export const selectCount = (state) => {
  return state.counter.value;
};

export default counterSlice.reducer;
```

### Hook 组件怎么调用

::: code-tabs#shell
@tab react

```react

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

```

:::

### Class Component 如何调用

```js
import React, { Component } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
import { connect } from "react-redux";
import styles from "./Counter.module.css";

class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementAmount: 2,
    };
  }

  setIncrementAmount(num) {
    this.setState({
      incrementAmount: +num,
    });
  }

  render() {
    const { incrementAmount } = this.state;
    const { count, increment, decrement, incrementByAmount, incrementAsync } =
      this.props;
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => increment()}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}
          >
            -
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => this.setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => incrementAsync(Number(incrementAmount) || 0)}
          >
            Add Async
          </button>
        </div>
      </div>
    );
  }
}

// 类似 Vuex 中的 mapGetters
const mapStateToProps = (state) => {
  const { value } = state.counter;
  return {
    count: value,
  };
};

// 类似 Vuex中的 mapActions 以及 mapMuatations
const mapDispatchToProps = () => {
  return {
    decrement: () => decrement(),
    increment: () => increment(),
    incrementByAmount: (payload) => incrementByAmount(payload),
    incrementAsync: (payload) => incrementAsync(payload),
  };
};

// connect 也可以使用 decorator的语法
// 直接写在组件上
export default connect(
  mapStateToProps,
  mapDispatchToProps() // 传入之后通过 props引用变量及方法
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
