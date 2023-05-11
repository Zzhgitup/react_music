import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const Artist: FC<Props> = () => {
  return <div>telpmate</div>;
};
export default memo(Artist);
