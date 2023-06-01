import styled from 'styled-components';
export const Contrain = styled.div`
  .item {
    margin-top: 20px;
    display: flex;
    .imgbox {
      width: 40px;
      height: 40px;
      box-shadow: 0 0 1px #333333 inset;
      margin-right: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .textspan {
      height: 40px;
      width: 160px;
      a {
        margin-bottom: 9px;
      }
      span {
        display: inline-block;
        width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
