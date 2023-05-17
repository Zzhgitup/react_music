import React, { memo } from 'react';
import { FC, ReactNode, useRef, ElementRef, useState } from 'react';
import { BannerWrapper, BannerControl, Bannerleft, BannerRight } from './style';
import { useAppselect } from '@/store';
import { Carousel } from 'antd';
import classNames from 'classnames';
interface Props {
  childern?: ReactNode;
}
const Topbanner: FC<Props> = () => {
  //组件内数据-------------
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const divRef = useRef(null);
  //更改页数
  const onChange = (currentSlide: number) => {
    setCurrentIndex(currentSlide);
    console.log(currentSlide);
  };
  //当前页
  const [currentIndex, setCurrentIndex] = useState(0);
  //组件内数据-------------
  //组件需要外部数据----------------
  const { banner } = useAppselect((state) => ({
    banner: state.recommed.banner
  }));
  const bgImage = banner[currentIndex] && banner[currentIndex].imageUrl;
  //----------------------
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2" ref={divRef}>
        <Bannerleft>
          <Carousel
            effect="fade" //淡入淡出的效果
            ref={bannerRef}
            afterChange={onChange}
            autoplay
            autoplaySpeed={2000}
          >
            {banner.map((item: any) => {
              if (item.imageUrl == null) {
                return;
              }
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
            <ul className="dots">
              {banner.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('item', {
                        active: currentIndex === index
                      })}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </Carousel>
        </Bannerleft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={() => bannerRef.current?.prev()}></button>
          <button className="btn right" onClick={() => bannerRef.current?.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};
export default memo(Topbanner);
