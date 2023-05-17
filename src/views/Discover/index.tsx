import React, { Suspense, memo } from 'react';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Discoverdiv } from './style';
import { NavLink } from 'react-router-dom';
import { recommend } from '@/assets/data/local-data';
interface Props {
  childern?: ReactNode;
}
//使用泛型进行
const Discover: FC<Props> = () => {
  return (
    <Discoverdiv>
      <div className="top">
        <div className="nav wrap-v1">
          {recommend.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </Discoverdiv>
  );
};
export default memo(Discover);
