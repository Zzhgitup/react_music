// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './modules/count';
export const store = configureStore({
  reducer: {
    counter: counterSlice
  }
});
//从store中自动推断类型
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
