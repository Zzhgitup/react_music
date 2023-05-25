import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
import Area_header from '@/components/area-header';
import { area_headerdata3 } from '@/assets/data/local-data';
import { useAppselect } from '@/store';
import Rankitem_child from '../Rankitem_child';
interface Props {
  childern?: ReactNode;
}
const RankItem: FC<Props> = () => {
  const { Rankitem2 } = useAppselect((state) => ({
    Rankitem2: state.recommed.Ranking
  }));
  return (
    <Container>
      {/* 顶部导航 */}
      <Area_header {...area_headerdata3} />
      {/* 主容器 */}
      <div className="rankcontain">
        {Rankitem2.map((item) => {
          return <Rankitem_child sing_Date={item} key={item.id} />;
        })}
      </div>
    </Container>
  );
};
export default memo(RankItem);
