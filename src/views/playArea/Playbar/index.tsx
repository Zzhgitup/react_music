import React, { memo, useState, useRef, useEffect } from 'react';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { ScendtoF } from '@/utils';
import { Playbarwarrap, BarOperator, BarPlayInfo, BarControl } from './style';
import { useAppselect } from '@/store';
import { getSongURL } from './server/inedx';
interface Props {
  childern?: ReactNode;
}
const Playbar: FC<Props> = () => {
  const { curr_song } = useAppselect((state) => ({
    curr_song: state.playeer.current_sing.songs[0]
  }));
  const [process, setprocess] = useState<number>(10);
  const [currentime, setCurrentime] = useState<number>(0);
  const [isplay, setIsPlaying] = useState<boolean>(true);
  const [ischange, setischange] = useState<boolean>(false);
  const [Duration, setDuration] = useState<number>(0);
  const audio = useRef<HTMLAudioElement>(null);
  //播放按钮功能
  function handleClick() {
    console.log('播放');
    setIsPlaying(!isplay);
    isplay ? audio.current?.pause() : audio.current?.play();
    //播放状态取反
  }

  //暂停回调
  function Pause() {
    setIsPlaying(false);
  }
  //播放回调
  function Play() {
    setIsPlaying(true);
  }
  //点击进度条
  function setChange(num: number) {
    console.log(num); //进度百分比
    const current = ((num / 100) * Duration) / 1000;
    setCurrentime(current); //更改时间当前播放时间
    audio.current && (audio.current.currentTime = current);
    setprocess(num); //更改进度条位置
    setischange(false); //松开改变滑动状态
  }
  //拖动事件
  function handleChanging(num: number) {
    setischange(true);
    setprocess(num);
    setCurrentime(((num / 100) * Duration) / 1000); //设置时间
  }
  //更新事件
  function TimerUpdate() {
    if (!ischange) {
      const currenttime: number = audio.current?.currentTime as number;
      console.log(currenttime);
      const propress2: number = ((currenttime * 1000) / Duration) * 100;
      setprocess(propress2);
      setCurrentime(currenttime);
    }
  }
  /* 副作用函数 */
  useEffect(() => {
    const playAudio = async () => {
      //改成异步函数
      if (audio.current) {
        try {
          const res = await getSongURL(curr_song.id);
          audio.current.src = res.data[0].url;
          await audio.current.play();
          setIsPlaying(true);
          console.log('播放成功');
        } catch (error) {
          setIsPlaying(false);
          console.log('播放失败');
        }
      }
    };
    playAudio();
    setDuration(curr_song.dt);
  }, [curr_song]); //组件挂在后执行一次，curr_song 更新执行
  return (
    <Playbarwarrap className="sprite_playbar ">
      <div className="content wrap-v2">
        {/* 控制 */}
        <BarControl isplaying={isplay}>
          <button className="btn sprite_playbar prev"></button>
          <button
            onClick={() => {
              handleClick();
            }}
            className="btn sprite_playbar play"
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        {/* 播放区 */}
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img src={curr_song.al.picUrl + '?param=34y34'} alt="" />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{curr_song.name}</span>
              <span className="singer-name">{curr_song?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                tooltip={{ open: false }}
                value={process}
                step={0.1}
                onChange={(num: number) => {
                  handleChanging(num);
                }}
                onAfterChange={(num) => {
                  setChange(num);
                }}
              />
              <div className="time">
                <span className="current">{ScendtoF(currentime)}</span>
                <span className="divider">/</span>
                <span className="duration">{ScendtoF(Duration / 1000)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        {/* 操作区 */}
        <BarOperator>
          <div className="left">
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
        <audio
          ref={audio}
          src=""
          onPause={Pause}
          onPlay={Play}
          onTimeUpdate={() => {
            TimerUpdate();
          }}
        ></audio>
      </div>
    </Playbarwarrap>
  );
};
export default memo(Playbar);
