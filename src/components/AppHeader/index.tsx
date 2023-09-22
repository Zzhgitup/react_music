import React, { memo } from 'react';
import { FC, ReactNode, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Input } from 'antd';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="content"
      >
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
          <Link to="/login" className="login">
            登录
          </Link>
        </HeaderRight>
      </motion.div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};
export default memo(Appheader);
