import styled from 'styled-components';
export const Container = styled.div`
  width: 230px;
  height: 472px;
  .header {
    height: 120px;
    padding: 20px 0 0 19px;
    .image {
      position: relative;
      width: 80px;
      height: 80px;
      float: left;
      display: inline-block;
      img {
        width: 80px;
        height: 80px;
      }
      a {
        background-position: -145px -57px;
        width: 80px;
        height: 80px;
        position: absolute;
      }
    }
    .image_title {
      float: left;
      width: 116px;
      margin: 6px 0 0 10px;
      .image_title_a {
        font-size: 16px;
        font-weight: 600;
      }
      .image_title_button {
        margin-top: 10px;
        .playbt {
          background-position: -267px -205px;
          width: 22px;
          height: 22px;
          &:hover {
            background-position: -267px -235px;
            width: 22px;
            height: 22px;
          }
        }
        .addbt {
          background-position: -300px -207px;
          width: 20px;
          height: 19px;
          &:hover {
            background-position: -300px -237px;
            width: 20px;
            height: 19px;
          }
        }
        a {
          display: block;
          float: left;
          width: 22px;
          height: 22px;
          margin-right: 10px;
          text-indent: -9999px;
        }
      }
    }
  }
  .list {
    .Rank_list {
      height: 319px;
      margin-left: 50px;
      line-height: 32px;
      li {
        vertical-align: middle;
        position: relative;
        height: 32px;
        .oper {
          position: absolute;
          top: 0px;
          right: 40px;
          display: none;
          float: right;
          width: 82px;
          margin-top: 7px;
          .playbt {
            background-position: -267px -268px;
            width: 17px;
            height: 17px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .iconadd {
            background-position: 1px -698px;
            width: 17px;
            height: 17px;
            &:hover {
              background-position: -21px -698px;
            }
          }
          .fileadd {
            background-position: -297px -268px;
            width: 17px;
            height: 17px;
            &:hover {
              background-position: -297px -288px;
            }
          }
          a {
            float: left;
            width: 17px;
            height: 17px;
            margin-right: 10px;
          }
        }
        &:hover .oper {
          display: block;
        }
        &:hover .Rank_list_a {
          width: 100px;
        }
        .Rank_color {
          color: red;
        }
        span {
          float: left;
          position: relative;
          width: 35px;
          height: 32px;
          margin-left: -35px;
          text-align: center;
          color: #666;
          font-size: 16px;
        }
        .Rank_list_a {
          float: left;
          width: 170px;
          height: 32px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
      .more {
        clear: both;
        height: 32px;
        margin-right: 32px;
        text-align: right;
        line-height: 32px;
        a {
          float: left;
          width: 170px;
          height: 32px;
        }
      }
    }
  }
`;
