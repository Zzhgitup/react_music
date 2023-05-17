import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getbanner } from '../serves/recommend';
export const fetchBannerDatw = createAsyncThunk('recommend/Banner', async (args, { dispatch }) => {
  const res = await getbanner();
  console.log(res);
  dispatch(changeRecommend(res.banners));
  /* return res; */
});
//duibanner进行类型规范
interface IRecommendState {
  banner: any[];
}
//写出store储存的内容
const initialState: IRecommendState = {
  banner: []
};
const Recommend = createSlice({
  name: 'recommed',
  initialState,
  reducers: {
    changeRecommend(state, { payload }) {
      state.banner = payload;
    }
  }

  /* 这是一种方式 通过extraReducers 
   extraReducers(builder) {
    builder
      .addCase(fetchBannerDatw.pending, () => {
        console.log('peding');
      })
      .addCase(fetchBannerDatw.fulfilled, (state, action) => {
        console.log(action.payload);
        state.banner = action.payload.banners;
      })
      .addCase(fetchBannerDatw.rejected, () => {
        console.log('rejected');
      });
  } */
});
//暴露出reducer
export const { changeRecommend } = Recommend.actions;
export default Recommend.reducer;
