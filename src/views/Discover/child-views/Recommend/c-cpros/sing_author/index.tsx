import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Contarin } from './style';
import SectionHeadv2 from '@/components/SectionHeadv2';
interface Props {
  childern?: ReactNode;
}
const SingAuthor: FC<Props> = () => {
  return (
    <Contarin>
      <SectionHeadv2 title="入驻歌手" morePath="/discover/artist" />
    </Contarin>
  );
};
export default memo(SingAuthor);
