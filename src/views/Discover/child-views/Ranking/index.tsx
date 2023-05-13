import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const Ranking: FC<Props> = () => {
  return <div>Ranking</div>;
};
export default memo(Ranking);
