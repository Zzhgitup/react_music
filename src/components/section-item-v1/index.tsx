import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
import { playcount } from '@/utils'; //数据转换 整数 转万
interface Props {
  childern?: ReactNode;
  info: any;
}
//歌单组件
const Item_music_card: FC<Props> = (props) => {
  const { info } = props;
  return (
    <Container>
      <div className="cover-top">
        <img src={info.picUrl + '?param=140x140'} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {playcount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </Container>
  );
};
export default memo(Item_music_card);
