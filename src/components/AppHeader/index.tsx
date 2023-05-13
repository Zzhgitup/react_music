import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface Props {
  childern?: ReactNode;
}
const Appheader: FC<Props> = () => {
  return (
    <div id="headernav">
      <Link to="discover">发现音乐</Link>
      <Link to="mine">我的音乐</Link>
      <Link to="focus">关注</Link>
      <Link to="download">下载</Link>
    </div>
  );
};
export default memo(Appheader);
