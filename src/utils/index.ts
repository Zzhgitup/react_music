export function playcount(count: number): string {
  const str = count.toString();
  return str.length <= 4 ? str : str.substring(0, 4) + '万';
}
export function getImageSize(str: string, width: number, height: number = width): string {
  return `${str}?param=${width}x${height}`;
}
