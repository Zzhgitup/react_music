import { Hyrequire } from '@/service';
//获取轮播图
export function getbanner() {
  return Hyrequire.get({
    url: '/banner'
  });
}
