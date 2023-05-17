import React, { memo } from 'react';
import { FC, ReactNode, useEffect } from 'react';
//轮播图组件
import TopBanner from './c-cpros/Top-banner';
import { fetchBannerDatw } from './store/recomment';
import { usedispatch } from '@/store';
interface Props {
  childern?: ReactNode;
}
const recommend: FC<Props> = () => {
  const dispatch = usedispatch(); //hook;
  useEffect(() => {
    dispatch(fetchBannerDatw());
  }, []);
  return (
    <div>
      <TopBanner />
    </div>
  );
};
export default memo(recommend);
