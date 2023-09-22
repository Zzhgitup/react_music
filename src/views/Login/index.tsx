import React, { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Container } from './style';
interface Props {
  childern?: ReactNode;
}
const Login: FC<Props> = () => {
  return <Container>登录页面</Container>;
};
export default memo(Login);
