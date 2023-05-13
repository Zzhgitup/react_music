import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const sing: FC<Props> = () => {
  return <div>sing</div>;
};
export default memo(sing);
