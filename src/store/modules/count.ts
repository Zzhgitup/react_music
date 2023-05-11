// store/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '张三',
    age: 1000
  },
  reducers: {}
});

// Action creators are generated for each case reducer function
export default counterSlice.reducer;
