import styled from 'styled-components';
interface IBarcontrolProps {
  isplaying: boolean;
}
export const Playbarwarrap = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;
export const BarPlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -248px;
          &::after {
            display: none;
          }
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;
interface IBarOperator {
  mode: number;
}
export const BarOperator = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.mode) {
          case 0:
            return '-66px -248px';
          case 1:
            return '-66px -344px';
          case 2:
            return '-3px -344px';
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`;
export const BarControl = styled.div<IBarcontrolProps>`
  display: flex;
  align-items: center;
  .prev,
  .next {
    cursor: pointer;
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: -2px -131px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;
    background-position: -2px ${(props) => (props.isplaying ? '-165px' : '-204px')};
  }

  .next {
    background-position: -82px -131px;
  }
`;
