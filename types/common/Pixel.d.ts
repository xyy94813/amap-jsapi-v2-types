/**
 * 像素坐标，确定地图上的一个像素点。
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#pixel
 */
export declare class Pixel {
  className: string;
  x: number;
  y: number;
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {boolean} isRound 默认为 false，true 时将对 x 和 y 四舍五入。文档中未提及。
   */
  constructor(x: number, y: number, isRound?: boolean);
  /**
   * 获取像素横坐标
   * @return {Number}
   */
  getX(): number;
  /**
   * 获取像素纵坐标
   * @return {Number}
   */
  getY(): number;
  /**
   * 以字符串形式返回像素坐标对象
   *
   * @returns {string}
   */
  toString(): string;
  /**
   * 当前像素坐标与传入像素坐标是否相等
   * @param {Pixel} point
   * @returns {boolean}
   */
  equals(point: Pixel): boolean;
  /**
   * 基于 (0，0) 的夹角。
   * 文档中未提及，但是存在。
   */
  direction(): number | null;
  /**
   * 像素乘以一个系数，返回一个新的像素对象。
   * 文档中未提及，但是存在。
   *
   * @param {Number} num 系数
   * @param {Boolean} noWrap
   * @return {Pixel}
   */
  multiplyBy(num: number, noWrap?: boolean): Pixel;
  /**
   * 将像素坐标四舍五入，返回新的像素对象
   * 文档中未提及，但是存在。
   */
  round(): Pixel;
  /**
   * 与另一个像素相减。
   * 文档中未提及，但是存在。
   *
   * @param {Pixel} other
   * @param {boolean} isRound 默认 false，true 时将对 x 和 y 四舍五入
   */
  subtract(other: Pixel, isRound?: boolean): Pixel;
  /**
   * 返回像素坐标的数组形式.
   * 文档中未提及，但是存在。
   */
  toArray(): [number, number];
  /**
   * 返回像素坐标的数组形式.
   * 文档中未提及，但是存在。
   */
  toJSON(): [number, number];
}

export type PixelLike = Pixel | [number, number];

export default Pixel;
