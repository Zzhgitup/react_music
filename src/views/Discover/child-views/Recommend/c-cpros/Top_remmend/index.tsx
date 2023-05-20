import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
import { area_headerdata } from '@/assets/data/local-data';
import Area_header from '@/components/area-header';
import Item_music_card from '@/components/section-item-v1';
import { useAppselect } from '@/store';
interface Props {
  childern?: ReactNode;
}
const Top_remmend: FC<Props> = () => {
  //读取store中的数据
  const { hotRecommends } = useAppselect((state) => ({
    hotRecommends: state.recommed.hotrecommend
  }));
  return (
    <Container>
      {/* 头部link */}
      <Area_header {...area_headerdata}></Area_header>
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((item) => {
          return <Item_music_card info={item} key={item.id}></Item_music_card>;
        })}
      </div>
    </Container>
  );
};
export default memo(Top_remmend);
