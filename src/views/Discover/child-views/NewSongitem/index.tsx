import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
interface Props {
  childern?: ReactNode;
}
const NewSongitem: FC<Props> = () => {
  return <div>NewSongitem</div>;
};
export default memo(NewSongitem);
