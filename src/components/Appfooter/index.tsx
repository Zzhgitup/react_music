import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { FootderWrapper } from './style';
interface Props {
  childern?: ReactNode;
}
const Appfooter: FC<Props> = () => {
  return (
    <FootderWrapper>
      <div className="footer">
        <h2>页尾页面的结构</h2>
      </div>
    </FootderWrapper>
  );
};
export default memo(Appfooter);
