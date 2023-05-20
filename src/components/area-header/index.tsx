import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Header_v1div } from './style';
import { Link } from 'react-router-dom';
interface Props {
  childern?: ReactNode;
  title: string;
  keywords?: any[];
  morePath?: string;
  moretext?: string;
}
const Area_header: FC<Props> = (props: Props) => {
  const { title = '', keywords = [], morePath = '/', moretext = '更多' } = props;
  return (
    <Header_v1div className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link to={morePath as string}>{moretext}</Link>
        <i className="icon sprite_02"></i>{' '}
      </div>
      {/* {keywords.length == 0 ? (
        ''
      ) : (
        <div className="right">
          <Link to={morePath as string}>{moretext}</Link>
          <i className="icon sprite_02"></i>{' '}
        </div>
      )} */}
    </Header_v1div>
  );
};
export default memo(Area_header);
