import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const recommend: FC<Props> = () => {
  return <div>Recommed</div>;
};
export default memo(recommend);
