import styled from 'styled-components';
/* 外部插入样式 */
export const FootderWrapper = styled.div`
  .footer {
    ${(props) => props.theme.mixin.wrapv1}
  }
`;
