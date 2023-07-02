import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* import { Root } from './type'; */
import { getSong_detile, getSong_text } from '../server/inedx';
import parseLyst, { Ires } from '@/utils/parseLyst';
import type { RooStatetype0 } from '@/store';
export const getsong = createAsyncThunk<void, number, { state: RooStatetype0 }>(
  'get/song',
  async (id: number, { dispatch, getState }) => {
    const playlist = getState().playeer.PlaysingList as any[];
    const findindex = playlist?.findIndex((item) => item.songs[0].id === id);
    if (findindex == -1) {
      //未找到
      const res = await getSong_detile(id);
      //获取一下歌词
      const res2 = await getSong_text(id);
      const Lyric = parseLyst(res2.lrc.lyric);
      console.log(Lyric); //获取歌词
      dispatch(changesong(res));
      dispatch(changeIsongText(Lyric));
      const palylist = [...playlist];
      palylist.push(res);
      dispatch(changePlaysingList(palylist));
      dispatch(changePlaysingIndex(palylist.length - 1));
    } else {
      //找到
      const song = playlist && playlist[findindex];
      //改变当前歌曲
      dispatch(changesong(song));
      const res2 = await getSong_text(id);
      const Lyric = parseLyst(res2.lrc.lyric);
      dispatch(changeIsongText(Lyric));
      //改变索引
      dispatch(changePlaysingIndex(findindex));
    }
  }
);
export const changeCurrentSong = createAsyncThunk<void, boolean, { state: RooStatetype0 }>(
  'changeCurrentSong',
  async (isNext: boolean, { dispatch, getState }) => {
    const playlist = getState().playeer.PlaysingList as any[];
    const index: number = getState().playeer.PlaysingIndex as number;
    const mode = getState().playeer.mode;
    let newindex = 0;
    if (mode == 0) {
      newindex = Math.floor(Math.random() * playlist.length);
    } else {
      newindex = isNext ? index + 1 : index - 1;
    }
    if (newindex < 0) newindex = playlist.length - 1;
    if (newindex > playlist.length - 1) newindex = 0;
    playlist && dispatch(changesong(playlist[newindex]));
    dispatch(changePlaysingIndex(newindex));
    const res2 = await getSong_text(playlist[newindex].songs[0].id);
    const Lyric = parseLyst(res2.lrc.lyric);
    dispatch(changeIsongText(Lyric));
  }
);
interface Iplay {
  current_sing?: any;
  IsongText?: Ires[];
  SongIndex?: number;
  PlaysingList?: any[];
  PlaysingIndex?: number;
  mode: number; //0 随机播放  1 单曲循环  2 顺序播放
}
const initialState: Iplay = {
  current_sing: {},
  IsongText: [],
  SongIndex: 0,
  mode: 2,
  PlaysingIndex: 0,
  PlaysingList: [
    {
      songs: [
        {
          name: '罗生门（Follow）',
          id: 1456890009,
          pst: 0,
          t: 0,
          ar: [
            {
              id: 33259235,
              name: '梨冻紧',
              tns: [],
              alias: []
            },
            {
              id: 13112601,
              name: 'Wiz_H张子豪',
              tns: [],
              alias: []
            }
          ],
          alia: [],
          pop: 100,
          st: 0,
          rt: '',
          fee: 8,
          v: 38,
          crbt: null,
          cf: '',
          al: {
            id: 91237927,
            name: '罗生门（Follow）',
            picUrl: 'https://p1.music.126.net/yN1ke1xYMJ718FiHaDWtYQ==/109951165076380471.jpg',
            tns: [],
            pic_str: '109951165076380471',
            pic: 109951165076380460
          },
          dt: 243754,
          h: {
            br: 320000,
            fid: 0,
            size: 9752735,
            vd: -48129,
            sr: 48000
          },
          m: {
            br: 192000,
            fid: 0,
            size: 5851679,
            vd: -45527,
            sr: 48000
          },
          l: {
            br: 128000,
            fid: 0,
            size: 3901151,
            vd: -43878,
            sr: 48000
          },
          sq: {
            br: 923788,
            fid: 0,
            size: 28147247,
            vd: -48121,
            sr: 48000
          },
          hr: {
            br: 1693305,
            fid: 0,
            size: 51593929,
            vd: -48124,
            sr: 48000
          },
          a: null,
          cd: '01',
          no: 1,
          rtUrl: null,
          ftype: 0,
          rtUrls: [],
          djId: 0,
          copyright: 0,
          s_id: 0,
          mark: 536879168,
          originCoverType: 1,
          originSongSimpleData: null,
          tagPicList: null,
          resourceState: true,
          version: 38,
          songJumpInfo: null,
          entertainmentTags: null,
          awardTags: null,
          single: 0,
          noCopyrightRcmd: null,
          mst: 9,
          cp: 0,
          rtype: 0,
          rurl: null,
          mv: 0,
          publishTime: 0
        }
      ],
      privileges: [
        {
          id: 1456890009,
          fee: 8,
          payed: 0,
          st: 0,
          pl: 128000,
          dl: 0,
          sp: 7,
          cp: 1,
          subp: 1,
          cs: false,
          maxbr: 999000,
          fl: 128000,
          toast: false,
          flag: 6,
          preSell: false,
          playMaxbr: 999000,
          downloadMaxbr: 999000,
          maxBrLevel: 'hires',
          playMaxBrLevel: 'hires',
          downloadMaxBrLevel: 'hires',
          plLevel: 'standard',
          dlLevel: 'none',
          flLevel: 'standard',
          rscl: null,
          freeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
            listenType: null
          },
          chargeInfoList: [
            {
              rate: 128000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 0
            },
            {
              rate: 192000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 320000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 1999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            }
          ]
        }
      ],
      code: 200
    },
    {
      songs: [
        {
          name: '苦茶子',
          id: 1922888354,
          pst: 0,
          t: 0,
          ar: [
            {
              id: 36772893,
              name: 'Starling8',
              tns: [],
              alias: []
            },
            {
              id: 31002901,
              name: 'MoreLearn 27',
              tns: [],
              alias: []
            },
            {
              id: 51613721,
              name: 'FIVESTAR',
              tns: [],
              alias: []
            }
          ],
          alia: [],
          pop: 100,
          st: 0,
          rt: '',
          fee: 8,
          v: 34,
          crbt: null,
          cf: '',
          al: {
            id: 151125530,
            name: '埋汰',
            picUrl: 'https://p1.music.126.net/VjXYNoGC3lXajZDs0r35XQ==/109951167852652412.jpg',
            tns: [],
            pic_str: '109951167852652412',
            pic: 109951167852652420
          },
          dt: 170796,
          h: {
            br: 320000,
            fid: 0,
            size: 6834285,
            vd: -28627,
            sr: 48000
          },
          m: {
            br: 192000,
            fid: 0,
            size: 4100589,
            vd: -26051,
            sr: 48000
          },
          l: {
            br: 128000,
            fid: 0,
            size: 2733741,
            vd: -24447,
            sr: 48000
          },
          sq: {
            br: 874962,
            fid: 0,
            size: 18680116,
            vd: -28623,
            sr: 48000
          },
          hr: {
            br: 1643665,
            fid: 0,
            size: 35091633,
            vd: -28597,
            sr: 48000
          },
          a: null,
          cd: '01',
          no: 1,
          rtUrl: null,
          ftype: 0,
          rtUrls: [],
          djId: 0,
          copyright: 0,
          s_id: 0,
          mark: 536879168,
          originCoverType: 1,
          originSongSimpleData: null,
          tagPicList: null,
          resourceState: true,
          version: 34,
          songJumpInfo: null,
          entertainmentTags: null,
          awardTags: null,
          single: 0,
          noCopyrightRcmd: null,
          mst: 9,
          cp: 0,
          rtype: 0,
          rurl: null,
          mv: 0,
          publishTime: 1650297600000
        }
      ],
      privileges: [
        {
          id: 1922888354,
          fee: 8,
          payed: 0,
          st: 0,
          pl: 128000,
          dl: 0,
          sp: 7,
          cp: 1,
          subp: 1,
          cs: false,
          maxbr: 999000,
          fl: 128000,
          toast: false,
          flag: 6,
          preSell: false,
          playMaxbr: 999000,
          downloadMaxbr: 999000,
          maxBrLevel: 'hires',
          playMaxBrLevel: 'hires',
          downloadMaxBrLevel: 'hires',
          plLevel: 'standard',
          dlLevel: 'none',
          flLevel: 'standard',
          rscl: null,
          freeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
            listenType: null
          },
          chargeInfoList: [
            {
              rate: 128000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 0
            },
            {
              rate: 192000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 320000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 1999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            }
          ]
        }
      ],
      code: 200
    },
    {
      songs: [
        {
          name: '把回忆拼好给你',
          id: 1403318151,
          pst: 0,
          t: 0,
          ar: [
            {
              id: 14312549,
              name: '王贰浪',
              tns: [],
              alias: []
            }
          ],
          alia: [],
          pop: 100,
          st: 0,
          rt: '',
          fee: 8,
          v: 19,
          crbt: null,
          cf: '',
          al: {
            id: 83305009,
            name: '把回忆拼好给你',
            picUrl: 'https://p1.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg',
            tns: [],
            pic_str: '109951164485969446',
            pic: 109951164485969440
          },
          dt: 381000,
          h: {
            br: 320001,
            fid: 0,
            size: 15243015,
            vd: -41846,
            sr: 44100
          },
          m: {
            br: 192001,
            fid: 0,
            size: 9145826,
            vd: -39239,
            sr: 44100
          },
          l: {
            br: 128001,
            fid: 0,
            size: 6097232,
            vd: -37537,
            sr: 44100
          },
          sq: {
            br: 885198,
            fid: 0,
            size: 42157601,
            vd: -41840,
            sr: 44100
          },
          hr: null,
          a: null,
          cd: '01',
          no: 1,
          rtUrl: null,
          ftype: 0,
          rtUrls: [],
          djId: 0,
          copyright: 0,
          s_id: 0,
          mark: 8192,
          originCoverType: 1,
          originSongSimpleData: null,
          tagPicList: null,
          resourceState: true,
          version: 19,
          songJumpInfo: null,
          entertainmentTags: null,
          awardTags: null,
          single: 0,
          noCopyrightRcmd: null,
          rtype: 0,
          rurl: null,
          mst: 9,
          cp: 0,
          mv: 0,
          publishTime: 1573660800000
        }
      ],
      privileges: [
        {
          id: 1403318151,
          fee: 8,
          payed: 0,
          st: 0,
          pl: 128000,
          dl: 0,
          sp: 7,
          cp: 1,
          subp: 1,
          cs: false,
          maxbr: 999000,
          fl: 128000,
          toast: false,
          flag: 4,
          preSell: false,
          playMaxbr: 999000,
          downloadMaxbr: 999000,
          maxBrLevel: 'lossless',
          playMaxBrLevel: 'lossless',
          downloadMaxBrLevel: 'lossless',
          plLevel: 'standard',
          dlLevel: 'none',
          flLevel: 'standard',
          rscl: null,
          freeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
            listenType: null
          },
          chargeInfoList: [
            {
              rate: 128000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 0
            },
            {
              rate: 192000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 320000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            }
          ]
        }
      ],
      code: 200
    },
    {
      songs: [
        {
          name: '唯一',
          id: 1807799505,
          pst: 0,
          t: 0,
          ar: [
            {
              id: 12676697,
              name: '告五人',
              tns: [],
              alias: []
            }
          ],
          alia: [],
          pop: 100,
          st: 0,
          rt: '',
          fee: 1,
          v: 23,
          crbt: null,
          cf: '',
          al: {
            id: 120954841,
            name: '运气来得若有似无',
            picUrl: 'https://p2.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg',
            tns: [],
            pic_str: '109951165585701063',
            pic: 109951165585701060
          },
          dt: 270760,
          h: {
            br: 320000,
            fid: 0,
            size: 10832769,
            vd: -4566,
            sr: 48000
          },
          m: {
            br: 192000,
            fid: 0,
            size: 6499713,
            vd: -1928,
            sr: 48000
          },
          l: {
            br: 128000,
            fid: 0,
            size: 4333185,
            vd: -137,
            sr: 48000
          },
          sq: {
            br: 756174,
            fid: 0,
            size: 25592787,
            vd: -4559,
            sr: 48000
          },
          hr: {
            br: 1525028,
            fid: 0,
            size: 51614731,
            vd: -4565,
            sr: 48000
          },
          a: null,
          cd: '01',
          no: 5,
          rtUrl: null,
          ftype: 0,
          rtUrls: [],
          djId: 0,
          copyright: 1,
          s_id: 0,
          mark: 536879104,
          originCoverType: 1,
          originSongSimpleData: null,
          tagPicList: null,
          resourceState: true,
          version: 23,
          songJumpInfo: null,
          entertainmentTags: null,
          awardTags: null,
          single: 0,
          noCopyrightRcmd: null,
          mst: 9,
          cp: 22036,
          rtype: 0,
          rurl: null,
          mv: 0,
          publishTime: 1609344000000
        }
      ],
      privileges: [
        {
          id: 1807799505,
          fee: 1,
          payed: 0,
          st: 0,
          pl: 0,
          dl: 0,
          sp: 0,
          cp: 0,
          subp: 1,
          cs: false,
          maxbr: 999000,
          fl: 0,
          toast: false,
          flag: 260,
          preSell: false,
          playMaxbr: 999000,
          downloadMaxbr: 999000,
          maxBrLevel: 'hires',
          playMaxBrLevel: 'hires',
          downloadMaxBrLevel: 'hires',
          plLevel: 'none',
          dlLevel: 'none',
          flLevel: 'none',
          rscl: null,
          freeTrialPrivilege: {
            resConsumable: true,
            userConsumable: false,
            listenType: null
          },
          chargeInfoList: [
            {
              rate: 128000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 192000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 320000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            },
            {
              rate: 1999000,
              chargeUrl: null,
              chargeMessage: null,
              chargeType: 1
            }
          ]
        }
      ],
      code: 200
    }
  ]
};
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changesong(state, { payload }) {
      state.current_sing = payload;
    },
    changeIsongText(state, { payload }) {
      state.IsongText = payload;
    },
    saveSongIndex(state, { payload }) {
      state.SongIndex = payload;
    },
    changePlaysingIndex(state, { payload }) {
      state.PlaysingIndex = payload;
    },
    changePlaysingList(state, { payload }) {
      state.PlaysingList = payload;
    },
    changemode(state, { payload }) {
      state.mode = payload;
    }
  }
});
export const {
  changesong,
  changeIsongText,
  saveSongIndex,
  changePlaysingIndex,
  changePlaysingList,
  changemode
} = playerSlice.actions;
export default playerSlice.reducer;
