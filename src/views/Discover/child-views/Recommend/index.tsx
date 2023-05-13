import { Hyrequire } from '@/service';
import React, { memo, useEffect, useState } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}

interface Mybanner {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any;
  monitorClickList: any;
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  adDispatchJson: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  song: any;
  scm: string;
  bannerBizType: string;
}

const recommend: FC<Props> = () => {
  const [banner, setbanner] = useState<Mybanner[]>([]);
  //这个类似于componentsDidMount
  //-----------------------------
  useEffect(() => {
    Hyrequire.myrequest({
      url: '/banner'
    }).then((res) => {
      console.log(res);
      setbanner(res.banners);
    });
  }, []);
  //-----------------------------
  return (
    <div>
      {banner.map((e) => {
        return <div key={e.imageUrl}>{e.encodeId}</div>;
      })}
    </div>
  );
};
export default memo(recommend);
