/**
 * 地物对象的像素尺寸
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#size
 */
export declare class Size {
  className: string;
  width: number;
  height: number;
  /**
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} isRound optional, default false，设置为 true 时对宽和高四舍五入
   */
  constructor(width: number, height: number, isRound?: boolean);
  /**
   * 获取像素横坐标
   * @return {number}
   */
  getWidth(): number;
  /**
   * 获取像素纵坐标
   * @return {Number}
   */
  getHeight(): number;
  /**
   * 以字符串形式返回尺寸大小对象
   *
   * @returns {string}
   */
  toString(): string;
  /**
   * 将尺寸大小对象转为数组
   * 文档中未提及，但是存在。
   * @returns {[number, number]}
   */
  toArray(): [number, number];
}

export default Size;
