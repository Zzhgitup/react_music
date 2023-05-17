import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { headertitle } from '@/assets/data/local-data';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
interface Props {
  childern?: ReactNode;
}
const Appheader: FC<Props> = () => {
  function titlelist(item: any) {
    if (item.path) {
      return (
        <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : '')}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.href} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headertitle.map((item) => {
              return (
                <div className="select-item" key={item.title}>
                  {titlelist(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};
export default memo(Appheader);
