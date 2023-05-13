import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const Artist: FC<Props> = () => {
  return <div>Artist</div>;
};
export default memo(Artist);
