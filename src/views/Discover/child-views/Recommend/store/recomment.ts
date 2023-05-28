import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getbanner, gethot, getnewalbum, getsoaring, getArtistList } from '../serves/recommend';
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
//获取飙升榜单 and and and
const idarr = [19723756, 3779629, 2884035];
export const fetchHotsong = createAsyncThunk('soaring/sing', async (args, { dispatch }) => {
  const promises: Promise<any>[] = [];
  for (let i = 0; i < 3; i++) {
    promises.push(getsoaring(idarr[i]));
  }
  Promise.all(promises).then((res) => {
    //讲三个数据同时放进去  提取数据
    const newres = res.map((item) => item.playlist);
    dispatch(changesoaring(newres));
  });
});
//入住歌手
export const fetchsettleSingers = createAsyncThunk('eSingers/sing', async (args, { dispatch }) => {
  const res = await getArtistList(5001, 5);
  // dispatch()
  dispatch(changeSettleSingerAction(res.artists));
  console.log('歌手', res);
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
  settleSingers: any[];
  Ranking: any[];
  /*   hotsong: any;
  Gentleman: any;
  original: any; */
}
//写出store储存的内容
const initialState: IRecommendState = {
  banner: [],
  hotrecommend: [],
  albums: [],
  settleSingers: [],
  Ranking: [] //榜单数据集合
  /*   hotsong: [], //飙升榜
  Gentleman: [], //新歌榜
  original: [] //原创榜 */
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
    },
    changesoaring(state, { payload }) {
      state.Ranking = payload;
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSingers = payload;
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
export const { changeHot, changeRecommend, changeAlbums, changesoaring, changeSettleSingerAction } =
  Recommend.actions;
export default Recommend.reducer;
