import React, { Fragment, memo } from 'react';
import { FC, ReactNode } from 'react';
import { Contrain } from './style';
interface Props {
  childern?: ReactNode;
  hotRadios?: any[];
}
const SectionHot: FC<Props> = (props) => {
  const hotRadios = props.hotRadios;
  return (
    <Contrain>
      {hotRadios?.map((item, index) => {
        return (
          <Fragment key={index}>
            <div className="item">
              <div className="imgbox">
                <img className="imgsrc" src={item.picUrl} alt="" />
              </div>
              <div className="textspan">
                <a href={item.url}>{item.name}</a>
                <span>{item.position}</span>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Contrain>
  );
};
export default memo(SectionHot);
