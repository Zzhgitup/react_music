import { getSongURL } from '@/views/playArea/Playbar/server/inedx';
export function playcount(count: number): string {
  const str = count.toString();
  return str.length <= 4 ? str : str.substring(0, 4) + '万';
}
export function getImageSize(str: string, width: number, height: number = width): string {
  return `${str}?param=${width}x${height}`;
}
export function getStorry() {
  const scrollY = window.scrollY;
  return scrollY;
}
export function ScendtoF(num: any) {
  /*   let remainder: any = 0;
  let minuteTime: any = 0;
  if (num >= 60) {
    minuteTime = (num / 60).toFixed();
    remainder = (num % 60).toFixed(0);
  } else {
    minuteTime = '0';
    remainder = num.toFixed(0);
  }
  if (remainder < 10) {
    remainder = '0' + remainder;
  }
  if (minuteTime < 10) {
    minuteTime = '0' + minuteTime;
  }
  return `${minuteTime}:${remainder}`; */
  const minutes = Math.floor(num / 60);
  const seconds = Math.floor(num % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}
export function getSong_URL(id: any) {
  getSongURL(id).then((res) => {
    console.log(res.data[0].url);
    return res.data[0].url;
  });
}
