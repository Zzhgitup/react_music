import { Hyrequire } from '@/service';
//获取轮播图
export function getbanner() {
  return Hyrequire.get({
    url: '/banner'
  });
}
//获取热门推荐
export function gethot(limit?: number) {
  return Hyrequire.get({
    url: `/personalized?limit=${limit}`
  });
}
//获取新品推荐
export function getnewalbum(offset = 0, limit = 10) {
  return Hyrequire.get({
    url: `/album/newest`,
    params: {
      offset,
      limit
    }
  });
}
//获取飙升榜单
export function getsoaring(id: number) {
  return Hyrequire.get({
    url: `/playlist/detail?id=${id}`
  });
}
