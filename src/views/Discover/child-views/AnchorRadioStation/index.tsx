import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const AnchorRadioStation: FC<Props> = () => {
  return <div>AnchorRadioStation</div>;
};
export default memo(AnchorRadioStation);
