import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const home: FC<Props> = () => {
  return <div>home</div>;
};
export default memo(home);
