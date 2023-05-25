import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
interface Props {
  childern?: ReactNode;
  sing_Date: any;
}
const Rankitem_child: FC<Props> = (props) => {
  const { sing_Date } = props;
  console.log(sing_Date);
  return (
    <Container>
      <div className="header">
        <div className="image">
          <a href="javascritpt:;" className="sprite_cover"></a>
          <img src={sing_Date.coverImgUrl + '?param=100y100'} alt="" />
        </div>
        <div className="image_title">
          <a className="image_title_a" href="">
            {sing_Date.name}
          </a>
          <div className="image_title_button">
            <a href="javascript:;" className="sprite_02 playbt"></a>
            <a href="javascript:;" className="sprite_02 addbt"></a>
          </div>
        </div>
      </div>
      <div className="list">
        <ul className="Rank_list">
          {sing_Date.tracks.slice(0, 10).map((item: any, index: any) => {
            return (
              <li key={item.id}>
                <span className={index < 3 ? 'Rank_color' : ''}>{index + 1}</span>
                <a href="" className="Rank_list_a">
                  {item.name}
                </a>
                <div className="oper">
                  <a href="" className="sprite_02 playbt"></a>
                  <a href="" className="sprite_icon2 iconadd"></a>
                  <a href="" className="sprite_02 fileadd"></a>
                </div>
              </li>
            );
          })}
          <div className="more">
            <a href="/discover/ranking">查看全部{'>'}</a>
          </div>
        </ul>
      </div>
      <div className="footer"></div>
    </Container>
  );
};
export default memo(Rankitem_child);
