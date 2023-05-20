import React, { ElementRef, memo, useRef } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
import { Carousel } from 'antd';
import Area_header from '@/components/area-header';
import { useAppselect } from '@/store';
import Albums_item from '@/components/albums-item-v1';
import { area_headerdata2 } from '@/assets/data/local-data';
interface Props {
  childern?: ReactNode;
}
const New_albind: FC<Props> = () => {
  const albumRef = useRef<ElementRef<typeof Carousel>>(null);
  const { albums } = useAppselect((state) => ({
    albums: state.recommed.albums
  }));
  return (
    <Container>
      <Area_header {...area_headerdata2}></Area_header>
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={() => albumRef.current?.prev()}></div>
        <div className="album">
          <Carousel ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {albums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <Albums_item key={item.id} itemData={item} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => albumRef.current?.next()}></div>
      </div>
    </Container>
  );
};
export default memo(New_albind);
