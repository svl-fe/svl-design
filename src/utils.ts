/**
 *  16位颜色转rgba
 */
export const hex2rgba = (hexColor: string | undefined, alpha: number) => {
  if (!hexColor) {
    return hexColor;
  }
  const rgb = [1, 3, 5].map((h) => parseInt(hexColor.substring(h, h + 2), 16));
  return `rgba(${rgb?.[0]},${rgb?.[1]},${rgb?.[2]},${alpha})`;
};
