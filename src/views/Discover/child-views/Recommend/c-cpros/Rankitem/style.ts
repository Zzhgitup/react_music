import styled from 'styled-components';

export const Container = styled.div`
  .rankcontain {
    height: 472px;
    margin-top: 20px;
    background: url(${require('@/assets/img/recommend-top-bg.png')});
    display: flex;
    & :last-child {
      width: 228px;
    }
  }
`;
