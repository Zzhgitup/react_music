import React, { memo } from 'react';
import { FC, ReactNode, useEffect } from 'react';
//轮播图组件
import TopBanner from './c-cpros/Top-banner';
import { ReacommendSection } from './style';
import {
  fetchBannerDatw,
  hotrecommend,
  fetchAlbums,
  fetchHotsong,
  fetchsettleSingers
} from './store/recomment';
import { usedispatch } from '@/store';
import Top_remmend from './c-cpros/Top_remmend';
import New_albind from './c-cpros/New_albind';
import Rankitem from './c-cpros/Rankitem';
import User_login from './c-cpros/user_login';
import Sing_author from './c-cpros/sing_author';
interface Props {
  childern?: ReactNode;
}
const recommend: FC<Props> = () => {
  const dispatch = usedispatch(); //hook;
  useEffect(() => {
    dispatch(fetchBannerDatw());
    dispatch(hotrecommend(8));
    dispatch(fetchAlbums());
    dispatch(fetchHotsong());
    dispatch(fetchsettleSingers());
  }, []);
  return (
    <div>
      {/* 轮播图 */}
      <TopBanner />
      <ReacommendSection className="wrap-v2">
        <div className="left">
          {/* 热门推荐 */}
          <Top_remmend />
          {/* 新碟上架 */}
          <New_albind />
          {/* 榜单 */}
          <Rankitem />
        </div>
        <div className="rigth">
          <User_login />
          <Sing_author />
        </div>
      </ReacommendSection>
    </div>
  );
};
export default memo(recommend);
