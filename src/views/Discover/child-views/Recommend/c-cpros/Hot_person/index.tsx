import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Contrain } from './style';
import SectionHeadv2 from '@/components/SectionHeadv2';
import SectionHot from '@/components/SectionHot';
import { hotRadios } from '@/assets/data/local-data';
interface Props {
  childern?: ReactNode;
}
const Home_preson: FC<Props> = () => {
  return (
    <Contrain>
      <SectionHeadv2 title="热门主播" />
      <SectionHot hotRadios={hotRadios} />
    </Contrain>
  );
};
export default memo(Home_preson);
