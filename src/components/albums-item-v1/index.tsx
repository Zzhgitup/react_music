import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
import { getImageSize } from '@/utils';
interface Props {
  childern?: ReactNode;
  itemData: any;
}
const Albums_item: FC<Props> = (props) => {
  const { itemData } = props;
  return (
    <Container>
      <div className="album-image">
        <img src={getImageSize(itemData.picUrl, 120)} alt="" />
        <a className="cover sprite_cover">{itemData.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </Container>
  );
};
export default memo(Albums_item);
