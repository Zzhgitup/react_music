import styled from 'styled-components';
/* 外部插入样式 */
export const FootderWrapper = styled.div`
  height: 325px;
  position: relative;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  .footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    ${(props) => props.theme.mixin.wrapv1}
    width: 980px;
    margin: 0 auto;
    .entry {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 33px;
      .minsoa {
        margin-left: 0;
      }
      .mixsoa1 {
        margin-right: 0px;
      }
      li {
        width: 45px;
        margin-left: 80px;
        text-align: center;
        color: #666;
        .entry_img {
          background: url('https://s2.music.126.net/style/web2/img/foot_enter_new2.png?2d8210a6048a81bac392bc3545a760b1')
            no-repeat;
          background-size: 220px 220px;
          display: block;
          float: none;
          width: 45px;
          height: 45px;
          margin: 0 auto;
        }
        .ei1 {
          background-position: -170px -5px;
          &:hover {
            background-position: -5px -115px;
          }
        }
        .ei2 {
          background-position: -5px -170px;
          &:hover {
            background-position: -60px -170px;
          }
        }
        .ei3 {
          background-position: -5px -60px;
          &:hover {
            background-position: -60px -5px;
          }
        }
        .ei4 {
          background-position: -60px -60px;
          &:hover {
            background-position: -115px -5px;
          }
        }
        .ei5 {
          background-position: -115px -115px;
          &:hover {
            background-position: -5px -5px;
          }
        }
        .ei6 {
          background-position: -170px -115px;
          &:hover {
            background-position: -60px -115px;
          }
        }
        .ei7 {
          background-position: -170px -60px;
          &:hover {
            background-position: -115px -60px;
          }
        }
        .entry_span {
          display: inline-block;
          width: 100px;
          margin-top: 10px;
          margin-left: -27.5px;
          font-weight: 400;
          font-size: 12px;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    .copyright {
      span {
        margin-right: 15px;
        margin-top: 20px;
      }
    }
    .report {
      margin-top: 30px;
      span {
        margin-right: 15px;
        margin-top: 20px;
      }
    }
    .info {
      span {
        display: inline-block;
        margin-right: 15px;
        margin-top: 20px;
      }
    }
  }
  #g_backtop {
    background-image: url('https://s2.music.126.net/style/web2/img/sprite.png?5d7185e3bcf3689fdf85c55a88db7f50');
    text-decoration: underline;
    color: #333;
    cursor: pointer;
    background-position: -325px -47px;
    display: block;
    position: fixed;
    text-indent: -9999px;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background-position: -265px -47px;
  }
`;
