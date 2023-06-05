import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const PlayMusic: FC<Props> = () => {
  return <div></div>;
};
export default memo(PlayMusic);
