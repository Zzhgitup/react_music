import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Contarin } from './style';
import SectionHeadv2 from '@/components/SectionHeadv2';
import { useAppselect } from '@/store';
interface Props {
  childern?: ReactNode;
}
const SingAuthor: FC<Props> = () => {
  const { settleSingers } = useAppselect((state) => ({
    settleSingers: state.recommed.settleSingers
  }));
  return (
    <Contarin>
      <SectionHeadv2 title="入驻歌手" morePath="/discover/artist" />
      <div className="singer-list">
        {settleSingers.map((item) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={item.img1v1Url + '?param=62y62'} alt="" />
              <div className="info">
                <div className="singer">{item.name}</div>
                <div className="desc">{item.alias.join('') || item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="">申请成为网易音乐人</a>
      </div>
    </Contarin>
  );
};
export default memo(SingAuthor);
