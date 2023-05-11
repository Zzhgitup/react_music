// 引入依赖的库
import { configureStore } from '@reduxjs/toolkit'; // 用于创建 Redux store 的工具函数
import counterSlice from './modules/count'; // 引入自定义的 Redux slice
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'; // 引入 React Redux 中的 useSelector 和 TypedUseSelectorHook
// 创建 Redux store
export const store = configureStore({
  reducer: {
    counter: counterSlice // 将自定义的 Redux slice 作为 counter reducer 添加到 store 中
  }
});
// 推导出 RootState 类型，即 Redux store 中的 state 类型
export type RootState = ReturnType<typeof store.getState>;

// 使用 TypedUseSelectorHook 函数签名推导出 useAppselect 函数，用于从 Redux store 中获取 state
export const useAppselect: TypedUseSelectorHook<RootState> = useSelector;

// 推导出 AppDispatch 类型，即 Redux store 中的 dispatch 函数类型
export type AppDispatch = typeof store.dispatch;
export const appshallowEqual = shallowEqual;
export const usedispatch: () => AppDispatch = useDispatch;
