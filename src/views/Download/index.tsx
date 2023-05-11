import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
//使用泛型进行
const Download: FC<Props> = () => {
  return <div>telpmate</div>;
};
export default memo(Download);
