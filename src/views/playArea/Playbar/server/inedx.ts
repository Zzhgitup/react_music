import { Hyrequire2 } from '@/service';
export const getSongURL = (id: any) => {
  return Hyrequire2.get({
    url: `/song/url?id=${id}`,
    data: {}
  });
};
export const getSong_detile = (id: number) => {
  return Hyrequire2.get({
    url: `/song/detail?ids=${id}`
  });
};
export const getSong_text = (id: number) => {
  return Hyrequire2.get({
    url: `/lyric?id=${id}`
  });
};
