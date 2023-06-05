import { createSlice } from '@reduxjs/toolkit';
import { Root } from './type';
interface Iplay {
  current_sing: Root;
}
const initialState: Iplay = {
  current_sing: {
    songs: [
      {
        name: '我记得',
        id: 1974443814,
        pst: 0,
        t: 0,
        ar: [{ id: 6731, name: '赵雷', tns: [], alias: [] }],
        alia: [],
        pop: 100,
        st: 0,
        rt: '',
        fee: 8,
        v: 5,
        crbt: null,
        cf: '',
        al: {
          id: 150127127,
          name: '署前街少年',
          picUrl: 'https://p2.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg',
          tns: [],
          pic_str: '109951167805892385',
          pic: 109951167805892380
        },
        dt: 329891,
        h: { br: 320000, fid: 0, size: 13198150, vd: -50155, sr: 44100 },
        m: { br: 192000, fid: 0, size: 7918907, vd: -47545, sr: 44100 },
        l: { br: 128000, fid: 0, size: 5279286, vd: -45763, sr: 44100 },
        sq: { br: 1581400, fid: 0, size: 65211331, vd: -50153, sr: 44100 },
        hr: null,
        a: null,
        cd: '01',
        no: 5,
        rtUrl: null,
        ftype: 0,
        rtUrls: [],
        djId: 0,
        copyright: 1,
        s_id: 0,
        mark: 8192,
        originCoverType: 1,
        originSongSimpleData: null,
        tagPicList: null,
        resourceState: true,
        version: 5,
        songJumpInfo: null,
        entertainmentTags: null,
        awardTags: null,
        single: 0,
        noCopyrightRcmd: null,
        mst: 9,
        cp: 2708856,
        rtype: 0,
        rurl: null,
        mv: 0,
        publishTime: 1661702400000
      }
    ],
    privileges: [
      {
        id: 1974443814,
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
        freeTrialPrivilege: { resConsumable: false, userConsumable: false, listenType: null },
        chargeInfoList: [
          { rate: 128000, chargeUrl: null, chargeMessage: null, chargeType: 0 },
          { rate: 192000, chargeUrl: null, chargeMessage: null, chargeType: 1 },
          { rate: 320000, chargeUrl: null, chargeMessage: null, chargeType: 1 },
          { rate: 999000, chargeUrl: null, chargeMessage: null, chargeType: 1 }
        ]
      }
    ],
    code: 200
  }
};
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
});

export default playerSlice.reducer;
