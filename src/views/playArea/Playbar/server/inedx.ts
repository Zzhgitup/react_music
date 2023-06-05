import { Hyrequire2 } from '@/service';
export const getSongURL = (id: any) => {
  return Hyrequire2.get({
    url: `/song/url?id=${id}`,
    data: {}
  });
};
