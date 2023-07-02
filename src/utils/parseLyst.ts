export interface Ires {
  time: number;
  content: string;
}
export default function parseLyst(str: string) {
  const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/g;
  const res: Ires[] = [];
  const resArr = str.split(/\n/g);
  for (const item of resArr) {
    const a = reg.exec(item) as any[];
    if (!a) continue;
    const getmillisecond = parseInt(a[1]) * 60 * 1000 + parseInt(a[2]) * 1000 + parseInt(a[3]);
    res.push({ time: getmillisecond, content: item.split(']')[1] });
  }
  return res;
}
