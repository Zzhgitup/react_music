import React, { Suspense, memo } from 'react';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
interface Props {
  childern?: ReactNode;
}
//使用泛型进行
const Discover: FC<Props> = () => {
  return (
    <div>
      <div className="dav"></div>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
