import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getbanner, gethot, getnewalbum } from '../serves/recommend';
export const fetchBannerDatw = createAsyncThunk('recommend/Banner', async (args, { dispatch }) => {
  const res = await getbanner();
  dispatch(changeRecommend(res.banners));
  /* return res; */
});
export const hotrecommend = createAsyncThunk(
  'recommed/hotrecommec',
  async (ages: number, { dispatch }) => {
    const res = await gethot(ages);
    console.log(res.result);
    dispatch(changeHot(res));
  }
);
//异步获取store albums
export const fetchAlbums = createAsyncThunk('albums/albums', async (args, { dispatch }) => {
  const res = await getnewalbum();
  console.log(res);
  dispatch(changeAlbums(res.albums));
});
interface HotRoot {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}
//duibanner进行类型规范
interface IRecommendState {
  banner: any[];
  hotrecommend: HotRoot[];
  albums: any[];
}
//写出store储存的内容
const initialState: IRecommendState = {
  banner: [],
  hotrecommend: [],
  albums: []
};
//生成actions
const Recommend = createSlice({
  name: 'recommed',
  initialState,
  reducers: {
    changeRecommend(state, { payload }) {
      state.banner = payload;
    },
    changeHot(state, { payload }) {
      state.hotrecommend = payload.result;
    },
    changeAlbums(state, { payload }) {
      state.albums = payload;
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
export const { changeHot, changeRecommend, changeAlbums } = Recommend.actions;
export default Recommend.reducer;
